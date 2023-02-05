import {
  ButtonProps,
  FlexProps,
  ImageProps,
  TextProps,
} from "@chakra-ui/react";
import { appMargin } from "../../utils/consts";

export const NavbarWrapperStyle: FlexProps = {
  height: "58px",
  bgColor: "white",
  alignItems: "center",
  justifyContent: "space-between",
  px: appMargin,
  mb: "24px",
};

export const LogoSearchWrapperStyle: FlexProps = {
  w: "268px",
  h: "40px",
  gap: "12px",
};

export const TabsAvatarWrapperStyle: FlexProps = {
  alignItems: "center",
  h: "100%",
  w: "431px",
};
export const LogoStyle: ImageProps = {
  alt: "logo",
  borderRadius: "4px",
  boxSize: "40px",
};

export const ProfileAvatarStyle: ImageProps = {
  alt: "profile image",
  boxSize: "40px",
  ml: "16px",
  cursor: "pointer",
};
export const TabButtonStyle: ButtonProps = {
  bgColor: "unset",
  borderRadius: "none",
  gap: "8px",
  px: "4px",
  h: "full",
  _hover: { bgColor: "unset" },
};

export const TabTextStyle: TextProps = {
  fontSize: "md",
  lineHeight: "24px",
  fontFamily: "Poppins",
  letterSpacing: "-0.158333px",
};

export const TabWrapperStyle: FlexProps = {
  w: "374px",
  alignItems: "baseline",
  h: "100%",
  gap: "34px",
};
