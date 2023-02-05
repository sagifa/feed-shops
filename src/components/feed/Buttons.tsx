import {
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Icon,
  Text,
  TextProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CommentIcon } from "../../images/commentIcon";
import { LikeIcon } from "../../images/likeIcon";

export const ButtonsWrapperStyle: FlexProps = {
  justifyContent: "center",
  alignItems: "center",
  gap: "307px",
  w: "full",
  h: "40px",
  pb: "16px",
};
export const ButtonsStyle: ButtonProps = {
  bgColor: "unset",
  _hover: { bgColor: "unset" },
};

export const TextButtonStyle: TextProps = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
  ml: "9.5px",
};
const iconColor = "#737877";
const textColor = "#484E4C";
const clickedColor = "#0A66C2";

const Buttons = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <Flex {...ButtonsWrapperStyle}>
      <Button {...ButtonsStyle} onClick={() => setIsClick(!isClick)}>
        <Icon
          as={LikeIcon}
          boxSize="15px"
          color={isClick ? clickedColor : iconColor}
        />
        <Text {...TextButtonStyle} color={isClick ? clickedColor : textColor}>
          Like
        </Text>
      </Button>
      <Button {...ButtonsStyle}>
        <Icon as={CommentIcon} boxSize="15px" color={iconColor} />
        <Text {...TextButtonStyle} color={textColor}>
          Comment
        </Text>
      </Button>
    </Flex>
  );
};

export default Buttons;
