import React from "react";
import { Picture, Buttons } from "@/components";
import { courses } from "@/mocks";
import "@/styles/text.css";

function Courses() {
  return (
    <div
      id="courses"
      className="container-two-light flex flex-col justify-center items-center text-center p-4 md:py-10"
    >
      <h1 className="text-[27px] text-center font-semibold mb-2 md:text-[40px]">
        Cursos
      </h1>
      {courses?.map(({ id, title, image }, index) => {
        return (
          <div key={index} className="md:w-[550px]">
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
