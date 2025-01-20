import React, { useEffect, useState } from "react";
import { UserProvider } from "./userContext";
import { NavProvider } from "./navContext";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryProvider } from "./queryContext";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const MyProvider = ({ children }) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded]);

  if (!pageLoaded) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NavProvider>
          <ChakraProvider>
            <QueryProvider>{children}</QueryProvider>
          </ChakraProvider>
        </NavProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default MyProvider;
