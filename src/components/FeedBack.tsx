"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { feedBack } from "@/src/mocks";

function FeedBack() {
  const [loading, setLoading] = useState<any>([]);
  const [current, setCurrent] = useState<number>(5);

  const changeElements = () => {
    alert("+5");
  };

  useEffect(() => {
    for (let i = 0; i < current; i++) {
      const element = feedBack[i];
      loading.push(element);
    }
    setCurrent(current + 5);
  }, []);

  return (
    <div>
      <h1>FeedBack</h1>
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
      <Button color="primary" onClick={changeElements}>
        Cargar mas
      </Button>
    </div>
  );
}

export default FeedBack;
