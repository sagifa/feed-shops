import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { ImagesWrapperStyle } from "./styles";

type ImagesProps = {
  images: string[];
};

const imagesToShow = 2;
const Images = ({ images }: ImagesProps) => {
  return (
    <Flex {...ImagesWrapperStyle}>
      {images.slice(0, imagesToShow).map((image, index) =>
        images.length === 1 ? (
          <Flex key={index} justifyContent="center" px="111px" w="full">
            <Image src={image} objectFit="fill" />
          </Flex>
        ) : (
          <Flex key={index} justifyContent="center" px="0px">
            <Image src={image} objectFit="cover" />
          </Flex>
        )
      )}
    </Flex>
  );
};

export default Images;
