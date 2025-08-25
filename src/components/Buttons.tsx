import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import "@/src/styles/text.css";

function Buttons({ id }: { id: string }) {
  return (
    <Button className="text-[18px] button-color-services-light">
      <Link href={`/${id}`}>Saber más</Link>
    </Button>
  );
}

export default Buttons;
