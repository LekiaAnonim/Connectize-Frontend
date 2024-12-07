import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api-services/users";
import { refreshTokenIfNeeded } from "../lib/helpers";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(
    () => async () => {
      const authorization = await refreshTokenIfNeeded();
      if (authorization) setUser(await getCurrentUser());
    },
    []
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
