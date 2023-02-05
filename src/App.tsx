import * as React from "react";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Main from "./components/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Main />
  </ChakraProvider>
);
