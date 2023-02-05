import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { colors } from "../../utils/consts";
import { ButtonClickAbleProps } from "./ButtonClickAble";
import { ButtonsStyle, TextButtonStyle } from "./styles";

const ButtonRegular = ({ icon, text }: ButtonClickAbleProps) => {
  return (
    <Button {...ButtonsStyle}>
      <Icon as={icon} boxSize="15px" color={colors.lightGray} />
      <Text {...TextButtonStyle} color={colors.buttonTextColor}>
        {text}
      </Text>
    </Button>
  );
};

export default ButtonRegular;
