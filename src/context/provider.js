import React from "react";
import { UserProvider } from "./userContext";
import { NavProvider } from "./navContext";
import { ChakraProvider } from "@chakra-ui/react";

const MyProvider = ({ children }) => {
  return (
    <UserProvider>
      <NavProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </NavProvider>
    </UserProvider>
  );
};

export default MyProvider;
