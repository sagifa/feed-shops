import * as React from "react";
import "@fontsource/dm-sans";
import "@fontsource/poppins";

import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/feed/Card";
import { appMargin } from "./utils/consts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor="#F6F7F7">
      <Navbar />
      <Box paddingX={appMargin}>
        <Card />
      </Box>
    </Box>
  </ChakraProvider>
);
