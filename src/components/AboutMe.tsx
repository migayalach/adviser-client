import React from "react";
import "@/src/styles/text.css";

function AboutMe() {
  return (
    <div className="container-two-light p-5 text-center md:p-8 md:h-[250px]">
      <h1 className="text-family text-[27px] md:text-[40px] mb-2 font-semibold">
        Conoce a Stephani
      </h1>
      <p className="text-family-second text-[16px] md:text-[28px] leading-10 md:leading-10 font-normal">
        Soy una profesional especialista en Ingeniería, Economía y Finanzas.
        Cuento con una amplia experiencia en el sector bancario y financiero, y
        hoy quiero compartir todos mis conocimientos con ustedes!
      </p>
    </div>
  );
}

export default AboutMe;
