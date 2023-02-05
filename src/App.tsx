import * as React from "react";
import "@fontsource/dm-sans";
import "@fontsource/poppins";
import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/feed/Card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex direction="column" alignItems="center" bgColor="#F6F7F7" w="1440px">
      <Navbar />
      <Card />
    </Flex>
  </ChakraProvider>
);
