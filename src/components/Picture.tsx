import React from "react";
import { Image } from "@heroui/image";

interface InputPicture {
  alt: string;
  src: string;
  width: string;
}

function Picture({ alt, src, width }: InputPicture) {
  return (
    <Image alt={alt} src={src} width={width} />
  );
}

export default Picture;
