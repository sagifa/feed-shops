import { FlexProps, TextProps } from "@chakra-ui/react";

export const CardWrapperStyle: FlexProps = {
  w: "1120px",
  h: "753px",
  gap: "16px",
  paddingTop: "24px",
  bgColor: "white",
  boxShadow: "0px 1px 7px rgba(40, 47, 45, 0.07)",
  borderRadius: "4px",
  direction: "column",
  mb: "24px",
  alignItems: "center",
  // paddingX: appMargin,
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

export const ShopNameStyle: TextProps = {
  color: "#282F2D",
  fontWeight: "500",
  textTransform: "capitalize",
};

export const LinkStyle: TextProps = {
  color: "#0A66C2",
  fontWeight: "500",
  textTransform: "capitalize",
};

export const DescriptionStyle: TextProps = {
  width: "1070px",
  // height: "40px",
  color: "#000000",
  mt: "16px",
};

export const ImagesWrapperStyle: FlexProps = {
  // justifyContent: "center",
  // padding: "0px 111px",
  // gap: "8px",
  width: "1120px,",
  height: "517px",
  bgColor: "#B8C248",
};

export const TextDefaultStyle: TextProps = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontSize: "sm",
  lineHeight: "20px",
};
