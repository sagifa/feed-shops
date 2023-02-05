import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import { colors } from "../utils/consts";
import Card from "./feed/Card";
import Navbar from "./navbar/Navbar";

const AppStyle: FlexProps = {
  direction: "column",
  alignItems: "center",
  bgColor: colors.appBackground,
  w: "1440px",
};

const Main = () => {
  return (
    <Flex {...AppStyle}>
      <Navbar />
      <Card />
    </Flex>
  );
};

export default Main;
