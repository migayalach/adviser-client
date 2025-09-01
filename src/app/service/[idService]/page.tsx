"use client";
import React, { use, useEffect, useState } from "react";
import { Picture } from "@/components";
import { services } from "@/mocks";
import "@/styles/text.css";
import { PropsService } from "@/types";

interface Info {
  id: string;
  title: string;
  image: string;
  about: string;
}

function page({ params }: PropsService) {
  const { idService } = use(params);

  const [info, setInfo] = useState<Info>({
    id: "",
    title: "",
    image: "",
    about: "",
  });

  useEffect(() => {
    if (idService) {
      const data = services.find((index) => index.id === idService);
      setInfo({
        id: data?.id || "",
        title: data?.title || "",
        image: data?.image || "",
        about: data?.about || "",
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
    <div className="cart-light text-color-light flex flex-col justify-center items-center px-7 pt-4 pb-7 md:flex md:flex-col md:min-h-[100vh]">
      <h1 className="text-family mb-3 text-[24px] font-semibold md:text-[40px] md:mt-[-80px]">
        {info.title}
      </h1>

      <div className="md:flex md:flex-row md:justify-center md:items-center">
        <div className="md:w-[550px]">
          {info?.image && (
            <Picture alt={info?.title} src={info.image} width="auto" />
          )}
        </div>
        <div className="acordion-light mt-4 p-4 rounded-lg md:w-[700px] md:ml-10">
          <p className="text-family-second text-[16px] text-center leading-7 md:text-[22px] md:leading-10">
            {info.about}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
