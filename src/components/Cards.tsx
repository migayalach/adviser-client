import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Buttons } from "@/src/components";

interface InputCards {
  id: string;
  title: string;
  image: string;
  path: "courses" | "services";
}


function Cards({ id, title, image, path }: InputCards) {
  return (
    <Card
      className={`${path === "courses" ? "bg-[#111827]" : "bg-[#fff] py-4"} mt-4`}
    >
      <CardBody className="overflow-visible py-2">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={image}
          width="400px"
          height={path === "services" ? "220px" : "auto"}
        />
      </CardBody>
      {/* TODO - ARREGLAR BUTTON */}
      <div className="flex flex-col justify-center items-center">
        <CardHeader className="pb-0 py-2 px-4 flex-col items-center">
          <h2
            className={`${path === "courses" ? "text-[#fff]" : "text-[#000]"} "font-bold text-large text-center text-[22px]"`}
          >
            {title}
          </h2>
        </CardHeader>
        <Buttons id={id} />
      </div>
    </Card>
  );
}

export default Cards;
