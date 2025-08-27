import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Buttons } from "@/src/components";
import "@/src/styles/text.css";

interface InputCards {
  id: string;
  title: string;
  image: string;
}

function Cards({ id, title, image }: InputCards) {
  return (
    <Card className="cart-light mt-4 py-2 md:h-96 md:w-96">
      <CardBody className="overflow-visible py-2">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={image}
          width="400px"
          height="220px"
        />
      </CardBody>
      <CardHeader className="pb-0 py-2 px-4 flex-col items-center">
        <h2 className="text-family-second text-color-light font-medium text-[20px] mb-2 md:text-[30px]">
          {title}
        </h2>
        <Buttons id={id} url="service"/>
      </CardHeader>
    </Card>
  );
}

export default Cards;
