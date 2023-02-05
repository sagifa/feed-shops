import React, { useState } from "react";
import { MessageIcon } from "../../images/messageIcon";
import { NotificationIcon } from "../../images/notificationIcon";
import { HomeIcon } from "../../images/homeIcon";
import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import { TabButtonStyle, TabTextStyle, TabWrapperStyle } from "./styles";
import { routeList } from "../../utils/consts";

const buttonsList = [
  { icon: HomeIcon, text: "Home", url: routeList.home },
  { icon: MessageIcon, text: "Messaging", url: routeList.messages },
  {
    icon: NotificationIcon,
    text: "Notifications",
    url: routeList.notifications,
  },
];

const selectedColor = "#2DB8A1";
const defaultColor = "#949796";

const NavTabs = () => {
  const [checked, setChecked] = useState("");
  return (
    <Flex {...TabWrapperStyle}>
      {buttonsList.map((button) => (
        <Button
          key={button.text}
          onClick={() => setChecked(button.text)}
          borderBottom={checked === button.text ? "2px" : ""}
          borderColor={checked === button.text ? selectedColor : defaultColor}
          {...TabButtonStyle}
        >
          <Icon
            as={button.icon}
            color={checked === button.text ? selectedColor : defaultColor}
            boxSize="18px"
          />
          <Text
            color={checked === button.text ? selectedColor : defaultColor}
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
