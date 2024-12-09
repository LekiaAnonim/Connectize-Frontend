import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api-services/users";
import { refreshTokenIfNeeded } from "../lib/helpers";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCurrentUser = async () => {
    setLoading(true);
    const authorization = await refreshTokenIfNeeded();
    if (authorization && !user) {
      setUser(await getCurrentUser());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrentUser();
    return async () => await fetchCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const useAuth = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("useAuth must be used within a User Provider");
  }

  return userContext;
};
