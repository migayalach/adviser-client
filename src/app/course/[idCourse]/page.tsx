"use client";
import React, { use, useEffect, useState } from "react";
import { Picture } from "@/src/components";
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

  if (!data) return <h1>Loading....</h1>;

  return (
    <div className="cart-light text-color-light flex flex-col justify-center p-4">
      <h1 className="text-family text-[19px] font-bold text-center leading-7">
        {data.about.title}
      </h1>
      <h3 className="text-family-second text-[16px] font-semibold text-center my-2 leading-6">
        {data.about.subTitle}
      </h3>
      <div className="text-family-second text-[15px] flex flex-col justify-center items-center leading-6">
        <h3>{data.about.from}</h3>
        <p className="font-bold text-[16px]">{data.about.mode}</p>
        <p>
          {data.about.hours.title}: <span>{data.about.hours.hours}</span>
        </p>
        <p>{data.about.start}</p>
        <p className="font-bold text-[16px]">{data.about.cost}</p>
      </div>
      <div className="my-4">
        <Picture alt={data.title} src={data.image} width="auto" />
      </div>
      <div className="text-family-second">
        <div className="acordion-light p-2 rounded-2xl">
          {data.about.learn.map((itemDay: any, index: number) => (
            <div key={index} className="mt-3">
              <h4 className="font-semibold text-[16px]">{itemDay.day}</h4>
              <ol className="p-2 text-[15px] leading-7">
                {itemDay.items.map((item: any, index: number) => (
                  <li key={index}>
                    <span className="font-bold">{index + 1}.-</span> {item}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div className="text-[16px] text-center">
          {data.about.include.map((info: any, index: number) => {
            return (
              <div key={index} className="my-4 text-[16px]">
                {info}
              </div>
            );
          })}
          <p className="text-family text-[22px] font-bold">{data.about.ask}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
