import React from "react";
import { ProfileAvatarStyle } from "./styles";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { texts } from "../../utils/consts";

type NavAvatarProps = {
  image: string;
};
const NavAvatar = ({ image }: NavAvatarProps) => {
  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Image src={image} {...ProfileAvatarStyle} />
        </MenuButton>
        <MenuList>
          <MenuItem>{texts.settings}</MenuItem>
          <MenuItem>{texts.privacy}</MenuItem>
          <MenuDivider />
          <MenuItem>{texts.logout}</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavAvatar;
