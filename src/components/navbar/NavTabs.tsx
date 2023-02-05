import React, { useState } from "react";
import { Flex, Button, Icon, Text, IconProps } from "@chakra-ui/react";
import { TabButtonStyle, TabTextStyle, TabWrapperStyle } from "./styles";
import { colors } from "../../utils/consts";

type NavTabsProps = {
  buttonsList: {
    icon: (props: IconProps) => JSX.Element;
    text: string;
    url: string;
  }[];
};

const NavTabs = ({ buttonsList }: NavTabsProps) => {
  const [checked, setChecked] = useState("");

  return (
    <Flex {...TabWrapperStyle}>
      {buttonsList.map((button) => (
        <Button
          key={button.text}
          onClick={() => setChecked(button.text)}
          borderBottom={checked === button.text ? "2px" : ""}
          borderColor={
            checked === button.text ? colors.navSelected : colors.navDefault
          }
          {...TabButtonStyle}
        >
          <Icon
            as={button.icon}
            color={
              checked === button.text ? colors.navSelected : colors.navDefault
            }
            boxSize="18px"
          />
          <Text
            color={
              checked === button.text ? colors.navSelected : colors.navDefault
            }
            fontWeight={checked === button.text ? 500 : 400}
            {...TabTextStyle}
          >
            {button.text}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};

export default NavTabs;
