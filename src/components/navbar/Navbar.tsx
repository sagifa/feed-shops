import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Logo from "../../images/logo.svg";
import NavTabs from "./NavTabs";
import NavSearch from "./NavSearch";
import {
  LogoSearchWrapperStyle,
  LogoStyle,
  NavbarWrapperStyle,
  TabsAvatarWrapperStyle,
} from "./styles";
import NavAvatar from "./NavAvatar";
import { HomeIcon } from "../../images/homeIcon";
import { MessageIcon } from "../../images/messageIcon";
import { NotificationIcon } from "../../images/notificationIcon";
import { routeList } from "../../utils/consts";
import ProfileImage from "../../images/avatar.svg";

const buttonsList = [
  { icon: HomeIcon, text: "Home", url: routeList.home },
  { icon: MessageIcon, text: "Messaging", url: routeList.messages },
  {
    icon: NotificationIcon,
    text: "Notifications",
    url: routeList.notifications,
  },
];

const Navbar = () => {
  return (
    <Flex {...NavbarWrapperStyle}>
      <Flex {...LogoSearchWrapperStyle}>
        <Image src={Logo} {...LogoStyle} />
        <NavSearch />
      </Flex>
      <Flex {...TabsAvatarWrapperStyle}>
        <NavTabs buttonsList={buttonsList} />
        <NavAvatar image={ProfileImage} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
