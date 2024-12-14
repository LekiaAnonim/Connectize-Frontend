import { createContext, useContext, useState } from "react";

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [refetchInterval, setRefetchInterval] = useState(false);

  return (
    <QueryContext.Provider value={{ refetchInterval, setRefetchInterval }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContext;

export const useCustomQuery = () => {
  const queryContext = useContext(QueryContext);
  if (!queryContext) {
    throw new Error("useCustomQuery must be used within a query Provider");
  }

  return queryContext;
};
