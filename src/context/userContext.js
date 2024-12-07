import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api-services/users";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => async () => setUser((await getCurrentUser()) || null));

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
