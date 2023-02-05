import React, { useState } from "react";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { CommentIcon } from "../../images/commentIcon";
import { LikeIcon } from "../../images/likeIcon";
import { colors, texts } from "../../utils/consts";
import { ButtonsWrapperStyle, ButtonsStyle, TextButtonStyle } from "./styles";

const textColor = "#484E4C";

const Buttons = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Flex {...ButtonsWrapperStyle}>
      <Button {...ButtonsStyle} onClick={() => setIsClick(!isClick)}>
        <Icon
          as={LikeIcon}
          boxSize="15px"
          color={isClick ? colors.lightBlue : colors.lightGray}
        />
        <Text
          {...TextButtonStyle}
          color={isClick ? colors.lightBlue : textColor}
        >
          {texts.like}
        </Text>
      </Button>
      <Button {...ButtonsStyle}>
        <Icon as={CommentIcon} boxSize="15px" color={colors.lightGray} />
        <Text {...TextButtonStyle} color={textColor}>
          {texts.comment}
        </Text>
      </Button>
    </Flex>
  );
};

export default Buttons;
