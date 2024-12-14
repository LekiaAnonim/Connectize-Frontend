import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { getCurrentUser } from "../api-services/users";
import { refreshTokenIfNeeded } from "../lib/helpers";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCurrentUser = useCallback(async () => {
    setLoading(true);
    try {
      const authorization = await refreshTokenIfNeeded();
      if (authorization && !user) {
        const fetchedUser = await getCurrentUser();
        setUser(fetchedUser);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchCurrentUser();
    // Dependency array excludes user intentionally; prevent re-fetch on updates.
  }, [fetchCurrentUser]);

  const contextValue = React.useMemo(
    () => ({ user, setUser, loading }),
    [user, loading]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;

export const useAuth = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("useAuth must be used within a UserProvider");
  }

  return userContext;
};
