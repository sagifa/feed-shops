import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ImagesWrapperStyle } from "./styles";
import { cardWidth } from "../../utils/consts";

type ImagesProps = {
  images: string[];
};

const imagesToShow = 2;
const widthMultiImages = 100 / imagesToShow + "%";

const Images = ({ images }: ImagesProps) => {
  if (images.length === 1)
    return (
      <Flex {...ImagesWrapperStyle} key={images[0]} px="111px">
        <Image src={images[0]} objectFit="cover" />
      </Flex>
    );

  return (
    <Flex {...ImagesWrapperStyle} gap="8px">
      {images.slice(0, imagesToShow).map((image, index) => (
        <Image key={index} src={image} objectFit="fill" w={widthMultiImages} />
      ))}
    </Flex>
  );
};

export default Images;
