import { Image } from "@heroui/image";
import React from "react";

function Courses() {
  return (
    <div>
      <h1>Cursos</h1>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://heroui.com/images/hero-card-complete.jpeg"
        width={270}
      />
    </div>
  );
}

export default Courses;
