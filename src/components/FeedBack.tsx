"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { feedBack } from "@/src/mocks";
import "@/src/styles/text.css";

function FeedBack() {
  const [loading, setLoading] = useState<any>([]);
  const [current, setCurrent] = useState<any>({
    init: 0,
    end: 5,
  });
  const [disable, setDisable] = useState<boolean>(false);
  const size = feedBack.length;

  const loadingElements = () => {
    for (let i = current.init; i < current.end; i++) {
      const element = feedBack[i];
      loading.push(element);
    }
    setCurrent({
      init: current.init + 5,
      end: current.end + 5,
    });
    if (current.end === size) {
      setDisable(true);
    }
  };

  const changeElements = () => {
    loadingElements();
  };

  useEffect(() => {
    loadingElements();
  }, []);

  return (
    <div className="container-one-light py-4 px-4 flex flex-col justify-center items-center mb-24">
      <h1 className="text-family text-[27px] font-semibold text-center">
        ¿Que opina la gente de nosotros?
      </h1>
      <div className="cart-light flex flex-col items-center justify-center rounded-lg pt-4 px-3">
        <Accordion
          className="acordion-light rounded-xl px-4"
          selectionMode="multiple"
          defaultExpandedKeys={["1user"]}
        >
          {loading?.map(({ id, name, comment, image }: any, index: number) => (
            <AccordionItem
              className="text-family-second text-color-light leading-7"
              key={index}
              aria-label={name}
              startContent={
                <Avatar isBordered color="warning" radius="lg" src={image} />
              }
              title={<span className="font-medium tracking-wide">{name}</span>}
            >
              {<p className="mt-[-10px]">{comment}</p>}
            </AccordionItem>
          ))}
        </Accordion>
        <Button
          className="button-color-light my-5 text-[18px]"
          color="primary"
          onClick={changeElements}
          isDisabled={disable}
        >
          Cargar mas
        </Button>
      </div>
    </div>
  );
}

export default FeedBack;
