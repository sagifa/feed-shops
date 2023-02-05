import React from "react";
import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import Like from "../../images/like.svg";
import { TextDefaultStyle } from "./styles";

export const WrapperStyle: FlexProps = {
  pl: "24px",
  gap: "8px",
  width: "1098px",
  height: "20px",
  justifyContent: "space-between",
  px: "24px",
  mt: "16px",
};

type SummaryProps = {
  likes: number;
  comments: number;
};

const color = "#737877";

const Summary = ({ likes, comments }: SummaryProps) => {
  return (
    <Flex {...WrapperStyle}>
      <Flex>
        <Image src={Like} boxSize="18px" />
        <Text {...TextDefaultStyle} color={color} ml="8px">
          {likes} Likes
        </Text>
      </Flex>
      <Text {...TextDefaultStyle} color={color}>
        {comments} Comments
      </Text>
    </Flex>
  );
};

export default Summary;
