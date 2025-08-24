import React from "react";
import { Cards } from "@/src/components";
import { services } from "@/src/mocks";

function Services() {
  return (
    <div className="bg-[#fff] p-5">
      <h1 className="text-[24px] text-center font-semibold mb-2">
        Servicios y Asesorias
      </h1>
      {services?.map(({ id, title, image }, index) => {
        return (
          <div key={index}>
            <Cards id={id} title={title} image={image} path="services" />
          </div>
        );
      })}
    </div>
  );
}

export default Services;
