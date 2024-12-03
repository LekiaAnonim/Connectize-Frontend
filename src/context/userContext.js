import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api-services/users";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
      address: null,
      avatar: null,
      bio: null,
      city: null,
      company: null,
      country: null,
      date_joined: "",
      date_of_birth: null,
      email: "",
      first_name: null,
      full_name: "",
      gender: null,
      id: 0,
      is_active: true,
      is_admin: false,
      is_first_time_user: true,
      is_staff: false,
      last_login: "",
      last_name: null,
      phone_number: null,
      region: null,
      role: null,
      verified: false,
    } || null
  );
  useEffect(() => async () => setUser((await getCurrentUser()) || null), []);

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
