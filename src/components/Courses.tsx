import { Image } from "@heroui/image";
import React from "react";
import { Cards, Buttons } from "@/src/components";

const courses = [
  {
    id: "1C",
    title: "Binance Desde Cero",
    image:
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1755873891/adviser/qopth7xbtcccblghjksp.jpg",
  },
];

function Courses() {
  return (
    <div>
      <h1>Cursos</h1>
      {courses.map(({ id, title, image }, index) => {
        return (
          <div key={index}>
            <Cards id={id} title={title} image={image} />
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
