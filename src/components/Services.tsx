import React from "react";
import { Cards } from "@/components";
import { services } from "@/mocks";
import "@/styles/text.css";

function Services() {
  return (
    <div
      id="services"
      data-testid="services-container"
      className="container-one-light p-5 md:flex md:flex-col"
    >
      <h1 className="text-[27px] text-center md:text-[40px] font-semibold mb-2">
        Servicios y Asesorias
      </h1>
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center md:py-4 sm:flex-wrap sm:flex-row sm:justify-evenly sm:ml-4">
        {services?.map(({ id, title, image }, index) => {
          return (
            <div key={index}>
              <Cards id={id} title={title} image={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
