import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import "@/src/styles/text.css";

type Url = "service" | "course";

interface InputButton {
  id: string;
  url: Url;
}

function Buttons({ id, url }: InputButton) {
  return (
    <Button className="text-[18px] button-color-services-light">
      <Link href={url === "course" ? `/course/${id}` : `/service/${id}`}>
        Saber más
      </Link>
    </Button>
  );
}

export default Buttons;
