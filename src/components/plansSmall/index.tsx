import React from "react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";


interface Props {
active: number;
  name: string;
  logo: StaticImageData;
  clickFunction: () => void;
}

export default function PlansSmall({ active, name, logo, clickFunction }: Props) {
  return (
    <Button
      onClick={clickFunction}
      className={`${
        active === 1 ? "text-white bg-primary" : "bg-gray-200 text-primary"
      } shadow-md gap-1 active:opacity-50 transition-all`}
    >
      {name}
      <Image src={logo} alt="name" className="w-[20px]" />
    </Button>
  );
}
