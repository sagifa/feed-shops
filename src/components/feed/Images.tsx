import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ImagesWrapperStyle } from "./styles";

type ImagesProps = {
  images: string[];
};
const Images = ({ images }: ImagesProps) => {
  return (
    <Flex {...ImagesWrapperStyle}>
      {images.map((image, index) =>
        images.length === 1 ? (
          <Image key={index} src={image} objectFit="fill" />
        ) : (
          <Flex>
            <Image key={index} src={image} objectFit="cover" />
          </Flex>
        )
      )}
    </Flex>
  );
};

export default Images;
