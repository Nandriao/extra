import Image, { StaticImageData } from "next/image";
import React from "react";

import Cuponomia from "@/assets/enterprise/cuponomia.png";

interface Props {
  logo: string | StaticImageData;
  ranquing: string | StaticImageData;
  logoAlt: string;
  ranquingAlt: string;
  value: string;
  category: string;
}

function ItemsCard({
  logo,
  ranquing,
  logoAlt,
  ranquingAlt,
  value,
  category,
}: Props) {
  return (
    <div className="bg-gray-100 rounded-md min-w-[48%] pt-2 shadow-md">
      <div className="flex flex-row justify-between items-center">
        <Image src={logo} alt={logoAlt} className="w-[150px] px-2 " />
        <Image src={Cuponomia} alt="Cuponomia" className="w-[120px] px-2 " />
      </div>

      <div
        className={"flex flex-row justify-between items-center gap-2 px-2 pb-2"}
      >
        <div className="flex flex-row gap-3 justify-between items-center w-full">
          <div className="flex flex-col ">
            <p className="">Comição</p>
            <p className="text-sm font-semibold">{value} MZN</p>
          </div>

          <div className="flex flex-row gap-2 items-center bg-">
            <div>
              <p className="">Categoria</p>
              <p className="text-sm font-semibold">{category} MZN</p>
            </div>
            <Image src={ranquing} alt={ranquingAlt} className="w-[50px] mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
