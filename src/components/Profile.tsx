import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

function Profile() {
  return (
    <Card className="py-0">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1755834589/adviser/q2ucn06zvmhyjd0cjb30.png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="font-bold text-large">Stephani Bustillos</h1>
        <p className="text-tiny font-bold">Asesor Financiero</p>
      </CardHeader>
    </Card>
  );
}

export default Profile;
