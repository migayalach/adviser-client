import React from "react";
import { Picture, Buttons } from "@/src/components";
import { courses } from "@/src/mocks";
import "@/src/styles/text.css";

function Courses() {
  return (
    <div className="container-two-light flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-[27px] text-center font-semibold mb-2">Cursos</h1>
      {courses?.map(({ id, title, image }, index) => {
        return (
          <div key={index}>
            <Picture alt={title} src={image} width="auto" />
            <br />
            <Buttons id={id} url="course" />
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
