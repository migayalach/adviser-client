import React from "react";
import { Cards } from "@/src/components";
import { courses } from "@/src/mocks";

function Courses() {
  return (
    <div className="bg-[#111827] pt-4 pb-7">
      <h1 className="text-[#fff] text-[22px] text-center font-semibold">Cursos</h1>
      {courses?.map(({ id, title, image }, index) => {
        return (
          <div key={index}>
            <Cards id={id} title={title} image={image} path="courses"/>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
