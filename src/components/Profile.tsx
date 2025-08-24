import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

function Profile() {
  return (
    <Card className="bg-[#fff] p-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1755834589/adviser/q2ucn06zvmhyjd0cjb30.png"
          width="auto"
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-large text-[33px] mt-2">Stephani Bustillos</h1>
        <p className="text-tiny font-bold text-[19px] mt-6">Asesor Financiero</p>
        </div>
      </CardHeader>
    </Card>
  );
}

export default Profile;
