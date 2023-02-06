import React, { useEffect, useRef } from "react";
import { Flex, Link, Text, Image } from "@chakra-ui/react";
import { colors } from "../../utils/consts";
import {
  CardHeaderStyle,
  ShopNameStyle,
  LinkStyle,
  DescriptionStyle,
  CardIntroStyle,
  TextDefaultStyle,
  CardAvatarStyle,
} from "./styles";
import TimeAgo, { DateInput } from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import api from "../../services/api";

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
  userId: string;
  id: string;
};

const Header = ({
  avatar,
  shopName,
  username,
  text,
  date,
  userId,
  id,
}: HeaderProps) => {
  const timeAgo = formatTimeAgo(new Date(date));
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      api.postUserObserverFeed(userId, id);
    }
  }, [isVisible, id, userId]);

  return (
    <div ref={ref}>
      <Flex {...CardIntroStyle}>
        <Flex {...CardHeaderStyle}>
          <Image src={avatar} {...CardAvatarStyle} />
          <Flex direction="column">
            <Text {...TextDefaultStyle} {...ShopNameStyle}>
              {username}
            </Text>
            <Text
              {...TextDefaultStyle}
              {...LinkStyle}
              color={colors.navDefault}
              href="#x"
            >
              <Link color={colors.lightBlue}>{shopName}</Link> • {timeAgo}
            </Text>
          </Flex>
        </Flex>
        <Text {...TextDefaultStyle} {...DescriptionStyle}>
          {text}
        </Text>
      </Flex>
    </div>
  );
};

export default Header;
