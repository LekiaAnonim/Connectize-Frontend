import React from "react";
import { UserProvider } from "./userContext";
import { NavProvider } from "./navContext";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const MyProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NavProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </NavProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default MyProvider;
