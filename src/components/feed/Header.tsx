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
import TimeAgo, { DateInput } from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const formatTimeAgo = (date: DateInput) => {
  const timeAgo = new TimeAgo("en-US");
  const ago = timeAgo.format(date, "mini");
  return ago;
};

type HeaderProps = {
  avatar: string;
  shopName: string;
  username: string;
  text: string;
  date: string;
};
const Header = ({ avatar, shopName, username, text, date }: HeaderProps) => {
  const timeAgo = formatTimeAgo(new Date(date));

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
            <Link color="#0A66C2">{username}</Link> • {timeAgo}
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
