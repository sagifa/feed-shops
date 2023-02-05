import {
  ButtonProps,
  FlexProps,
  ImageProps,
  TextProps,
} from "@chakra-ui/react";
import { cardWidth, colors } from "../../utils/consts";

export const CardWrapperStyle: FlexProps = {
  w: cardWidth,
  gap: "16px",
  paddingTop: "24px",
  bgColor: "white",
  boxShadow: "0px 1px 7px rgba(40, 47, 45, 0.07)",
  borderRadius: "4px",
  direction: "column",
  mb: "24px",
  alignItems: "center",
};

export const CardIntroStyle: FlexProps = {
  px: "24px",
  w: "1118px",
  direction: "column",
};

export const CardHeaderStyle: FlexProps = {
  w: "379px",
  h: "40px",
  gap: "12px",
};

export const CardAvatarStyle: ImageProps = {
  boxSize: "40px",
  rounded: "full",
  objectFit: "cover",
};

export const ShopNameStyle: TextProps = {
  color: "#282F2D",
  fontWeight: "500",
  textTransform: "capitalize",
};

export const LinkStyle: TextProps = {
  color: colors.lightBlue,
  fontWeight: "500",
  textTransform: "capitalize",
};

export const DescriptionStyle: TextProps = {
  w: "1070px",
  color: "#000000",
  mt: "16px",
};

export const ImagesWrapperStyle: FlexProps = {
  w: cardWidth,
  height: "517px",
  bgColor: "#B8C248",
  justifyContent: "center",
};
export const WrapperStyle: FlexProps = {
  pl: "24px",
  gap: "8px",
  w: "1098px",
  height: "20px",
  justifyContent: "space-between",
  px: "24px",
  mt: "16px",
};

export const TextDefaultStyle: TextProps = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontSize: "sm",
  lineHeight: "20px",
};

export const ButtonsWrapperStyle: FlexProps = {
  justifyContent: "center",
  alignItems: "center",
  gap: "307px",
  w: "full",
  h: "40px",
  pb: "16px",
};
export const ButtonsStyle: ButtonProps = {
  bgColor: "unset",
  _hover: { bgColor: "unset" },
};

export const TextButtonStyle: TextProps = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
  ml: "9.5px",
};
