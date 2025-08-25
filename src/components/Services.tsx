import React from "react";
import { Cards } from "@/src/components";
import { services } from "@/src/mocks";
import "@/src/styles/text.css";

function Services() {
  return (
    <div className="container-one-light p-5">
      <h1 className="text-[27px] text-center font-semibold mb-2">
        Servicios y Asesorias
      </h1>
      {services?.map(({ id, title, image }, index) => {
        return (
          <div key={index}>
            <Cards id={id} title={title} image={image} />
          </div>
        );
      })}
    </div>
  );
}

export default Services;
