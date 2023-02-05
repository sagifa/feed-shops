import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import Like from "../../images/like.svg";
import { TextDefaultStyle, WrapperStyle } from "./styles";
import { colors, texts } from "../../utils/consts";

type SummaryProps = {
  likes: number;
  comments: number;
};

const Summary = ({ likes, comments }: SummaryProps) => {
  return (
    <Flex {...WrapperStyle}>
      <Flex>
        <Image src={Like} boxSize="18px" />
        <Text {...TextDefaultStyle} color={colors.lightGray} ml="8px">
          {likes} {texts.likes}
        </Text>
      </Flex>
      <Text {...TextDefaultStyle} color={colors.lightGray}>
        {comments} {texts.comments}
      </Text>
    </Flex>
  );
};

export default Summary;
