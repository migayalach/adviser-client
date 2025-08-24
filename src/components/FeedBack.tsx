"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { feedBack } from "@/src/mocks";

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
    <div className="bg-[#fff] py-4 px-4 flex flex-col justify-center items-center">
      <h1 className="text-[22px] font-sans">FeedBack</h1>
      {loading?.map(({ id, name, comment, image }: any) => (
        <Accordion selectionMode="multiple" defaultExpandedKeys={[id]} key={id}>
          <AccordionItem
            key={id}
            aria-label={name}
            startContent={
              <Avatar isBordered color="warning" radius="lg" src={image} />
            }
            title={name}
          >
            {comment}
          </AccordionItem>
        </Accordion>
      ))}
      <Button className="mt-5" color="primary" onClick={changeElements} isDisabled={disable}>
        Cargar mas
      </Button>
    </div>
  );
}

export default FeedBack;
