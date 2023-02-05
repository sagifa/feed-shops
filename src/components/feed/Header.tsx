import React from "react";
import { Flex, Link, Text, Image } from "@chakra-ui/react";
import { colors } from "../../utils/consts";
import {
  CardHeaderStyle,
  ShopNameStyle,
  LinkStyle,
  DescriptionStyle,
  CardIntroStyle,
  TextDefaultStyle,
} from "./styles";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
const ago = timeAgo.format(new Date(), "mini");
console.log({ ago });

type HeaderProps = {
  avatar: string;
  shopName: string;
  username: string;
  text: string;
};
const Header = ({ avatar, shopName, username, text }: HeaderProps) => {
  return (
    <Flex {...CardIntroStyle}>
      <Flex {...CardHeaderStyle}>
        <Image src={avatar} boxSize="40px" />
        <Flex direction="column">
          <Text {...TextDefaultStyle} {...ShopNameStyle}>
            {shopName}
          </Text>

          <Text
            {...TextDefaultStyle}
            {...LinkStyle}
            color={colors.defaultColor}
            href="#x"
          >
            <Link color="#0A66C2">{username}</Link> • 1h
          </Text>
        </Flex>
      </Flex>
      <Text {...TextDefaultStyle} {...DescriptionStyle}>
        {text}
      </Text>
    </Flex>
  );
};

export default Header;
