import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";

function Buttons({ id }: { id: string }) {
  return (
    <Button color="primary">
      <Link href={`/${id}`}>Saber más</Link>
    </Button>
  );
}

export default Buttons;
