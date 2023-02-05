import * as React from "react";
import "@fontsource/dm-sans";
import "@fontsource/poppins";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/feed/Card";
import { appMargin } from "./utils/consts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor="#F6F7F7" h="100vh" paddingX={appMargin}>
      <Navbar />
      <Card />
    </Box>
  </ChakraProvider>
);
