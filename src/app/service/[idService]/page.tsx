"use client";
import React, { use, useEffect, useState } from "react";
import { Picture } from "@/src/components";
import { services } from "@/src/mocks";
import "@/src/styles/text.css";

interface Props {
  params: Promise<{ idService: string }>;
}

function page({ params }: Props) {
  const { idService } = use(params);

  const [info, setInfo] = useState<any>({
    id: "",
    title: "",
    image: "",
    about: "",
  });

  useEffect(() => {
    if (idService) {
      const data = services.find((index) => index.id === idService);
      setInfo({
        id: data?.id,
        title: data?.title,
        image: data?.image,
        about: data?.about,
      });
    }
    return () => {
      setInfo({
        id: "",
        title: "",
        image: "",
        about: "",
      });
    };
  }, [idService]);

  return (
    <div className="cart-light text-color-light flex flex-col justify-center items-center px-7 pt-4 pb-7">
      <h1 className="text-family mb-3 text-[24px] font-semibold">
        {info.title}
      </h1>
      {info?.image && (
        <Picture alt={info?.title} src={info.image} width="auto" />
      )}
      <div className="acordion-light mt-4 p-4 rounded-lg">
        <p className="text-family-second text-[16px] text-center leading-7">
          {info.about}
        </p>
      </div>
    </div>
  );
}

export default page;
