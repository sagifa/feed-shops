import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "../../images/searchIcon";
import { NavSearchIconStyle, NavSearchInputStyle } from "./styles";

const NavSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon {...NavSearchIconStyle} />}
      />
      <Input {...NavSearchInputStyle} />
    </InputGroup>
  );
};

export default NavSearch;
