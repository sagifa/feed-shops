import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { colors } from "../../utils/consts";
import { SearchIcon } from "../../images/searchIcon";

const NavSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon mr="-18px" mb="-2px" boxSize="18px" />}
      />
      <Input
        type="text"
        placeholder="Search"
        borderRadius="32px"
        w="216px"
        h="40px"
        background="#F4F5F5"
        _placeholder={{
          fontFamily: "DM Sans",
          fontSize: "sm",
          fontWeight: "400",
          lineHeight: "18px",
          color: colors.defaultColor,
          letterSpacing: "-0.158333px",
        }}
      />
    </InputGroup>
  );
};

export default NavSearch;
