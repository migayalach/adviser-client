import React from "react";
import { Button } from "@heroui/button";
import { InputButton } from "@/types";
import Link from "next/link";
import "@/styles/text.css";

function Buttons({ id, url }: InputButton) {
  return (
    <Button className="text-[18px] button-color-services-light md:text-[25px] md:h-14">
      <Link href={url === "course" ? `/course/${id}` : `/service/${id}`}>
        Saber más
      </Link>
    </Button>
  );
}

export default Buttons;
