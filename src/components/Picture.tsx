import React from "react";
import { Image } from "@heroui/image";
import { InputPicture } from "@/types";

function Picture({ alt, src, width }: InputPicture) {
  return <Image alt={alt} src={src} width={width} />;
}

export default Picture;
