"use client";
import React, { use, useEffect, useState } from "react";
import { Picture, Loading } from "@/src/components";
import { courses } from "@/src/mocks";
import "@/src/styles/text.css";

interface Props {
  params: Promise<{ idCourse: string }>;
}

function page({ params }: Props) {
  const { idCourse } = use(params);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (idCourse) {
      const course = courses.find((index) => index.id === idCourse);
      setData(course);
    }
  }, [idCourse]);

  if (!data) return <Loading />;

  return (
    <div className="cart-light text-color-light flex flex-col justify-center p-4">
      <h1 className="text-family text-[19px] font-bold text-center leading-7 md:text-[28px] md:leading-10">
        {data.about.title}
      </h1>
      <h3 className="text-family-second text-[16px] font-semibold text-center my-2 leading-6 md:text-[22px]">
        {data.about.subTitle}
      </h3>
      <div className="text-family-second text-[15px] flex flex-col justify-center items-center leading-6 md:text-[20px] md:leading-9">
        <h3>{data.about.from}</h3>
        <p className="font-bold text-[16px] md:text-[20px]">
          {data.about.mode}
        </p>
        <p>
          {data.about.hours.title}: <span>{data.about.hours.hours}</span>
        </p>
        <p>{data.about.start}</p>
        <p className="font-bold text-[16px] md:text-[20px]">
          {data.about.cost}
        </p>
      </div>
      <div className="text-family-second">
        <div className="md:flex md:flex-row md:justify-center md:items-center">
          <div className="my-4 md:w-[590px]">
            <Picture alt={data.title} src={data.image} width="auto" />
          </div>
          <div className="acordion-light p-2 rounded-2xl md:ml-8 md:p-3 md:w-[650px]">
            {data.about.learn.map((itemDay: any, index: number) => (
              <div key={index} className="mt-3">
                <h4 className="font-semibold text-[16px] md:text-[20px]">
                  {itemDay.day}
                </h4>
                <ol className="p-2 text-[15px] leading-7">
                  {itemDay.items.map((item: any, index: number) => (
                    <li key={index} className="md:text-[18px]">
                      <span className="font-bold">{index + 1}.-</span> {item}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[16px] text-center">
          {data.about.include.map((info: any, index: number) => {
            return (
              <div key={index} className="my-4 text-[16px] md:text-[20px]">
                {info}
              </div>
            );
          })}
          <p className="text-family text-[22px] md:text-[24px] font-bold">
            {data.about.ask}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
