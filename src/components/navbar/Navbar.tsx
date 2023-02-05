import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Logo from "../../images/logo.svg";
import ProfileImage from "../../images/avatar.svg";
import NavTabs from "./NavTabs";

import NavSearch from "./NavSearch";
import {
  LogoSearchWrapperStyle,
  LogoStyle,
  NavbarWrapperStyle,
  ProfileAvatarStyle,
  TabsAvatarWrapperStyle,
} from "./styles";

const Navbar = () => {
  return (
    <Flex {...NavbarWrapperStyle}>
      <Flex {...LogoSearchWrapperStyle}>
        <Image src={Logo} {...LogoStyle} />
        <NavSearch />
      </Flex>
      <Flex {...TabsAvatarWrapperStyle}>
        <NavTabs />
        <Image src={ProfileImage} {...ProfileAvatarStyle} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
