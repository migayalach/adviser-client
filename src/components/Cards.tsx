import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Buttons } from "@/src/components";

interface InputCards {
  id: string;
  title: string;
  image: string;
}

function Cards({ id, title, image }: InputCards) {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <Buttons id={id} />
    </Card>
  );
}

export default Cards;
