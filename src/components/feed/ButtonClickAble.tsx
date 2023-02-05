import { Button, Icon, IconProps, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../utils/consts";
import { ButtonsStyle, TextButtonStyle } from "./styles";

export type ButtonClickAbleProps = {
  icon: (props: IconProps) => JSX.Element;
  text: string;
};
const ButtonClickAble = ({ icon, text }: ButtonClickAbleProps) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Button {...ButtonsStyle} onClick={() => setIsClick(!isClick)}>
      <Icon
        as={icon}
        boxSize="15px"
        color={isClick ? colors.lightBlue : colors.lightGray}
      />
      <Text
        {...TextButtonStyle}
        color={isClick ? colors.lightBlue : colors.buttonTextColor}
      >
        {text}
      </Text>
    </Button>
  );
};

export default ButtonClickAble;
