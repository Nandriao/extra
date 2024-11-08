"use client";

// import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Colors from "@/constants/Colors";

import Coins from "@/assets/money2.png";
import Deposit from "@/assets/new/Piggy bank-amico.svg";
import Withdraw from "@/assets/new/ATM machine-pana (1).svg";
import Send from "@/assets/new/Finance leaders-amico.svg";

import Aliexpress from "@/assets/enterprise/7044032_aliexpress_logo_icon.svg";
import Amazon from "@/assets/enterprise/amazon.png";
import Magalu from "@/assets/enterprise/magalu.png";

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

import { ChevronRight } from "lucide-react";
import ItemsCard from "@/components/itemsCard";
import PlansSmall from "@/components/plansSmall";
import OperationCard from "@/components/OperationCard";
import Loading from "./loading";
import MedalSlider from "@/components/MedalSlider";

export default function Home() {
  const [show, setShow] = useState<boolean>(true);

  const [active, setActive] = useState<number>(1);

  return (
    <main className="flex flex-col mt-3 mb-3">
      <div className="flex flex-col gap-3">
        <div className="flex px-3  flex-row items-center w-full">
          <Image src={Coins} alt="Balance" className="w-[150px] -ml-2  mt-3" />
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between w-full transition-all">
              <p className="text-xl text-gray-500 font-[poppins]">Saldo</p>

              <Button
                className="bg-transparent border-none shadow-none"
                variant={"outline"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <AiOutlineEye color={Colors.GRAY[500]} size={25} />
                ) : (
                  <AiOutlineEyeInvisible color={Colors.GRAY[500]} size={25} />
                )}
              </Button>
            </div>
            <p className="text-2xl transition-all flex flex-row text-gray-600 font-semibold font-[poppins]">
              {show ? "0,00" : "****"} MZN
            </p>
          </div>
        </div>

        <div className="flex px-3  flex-row justify-between w-full items-center">
          <p className="text-gray-500">Operações</p>
          <ChevronRight color={Colors.GRAY[500]} size={25} />
        </div>

        <ScrollArea className="w-full">
          <div className="flex px-3 w-max gap-2">
            <div className="flex flex-col w-[50%] items-center shadow-md active:opacity-50 transition-all bg-gray-200 rounded-md p-2">
              <MedalSlider />
              <p className="text-gray-500 pb-1">Planos</p>
            </div>
            {/* <OperationCard
              href="/dashboard/deposit"
              imageSrc={Deposit}
              imageAlt="Deposit"
              title="Depósitar"
            /> */}

            <OperationCard
              href="/dashboard/plans"
              imageSrc={Send}
              imageAlt="plans"
              title="Investir"
            />

            <OperationCard
              href="/dashboard/withdraw"
              imageSrc={Withdraw}
              imageAlt="Withdraw"
              title="Levantar"
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex flex-col gap-2">
          <div className="flex px-3 flex-row justify-between w-full items-center">
            <p className="text-gray-500">Planos e comições</p>
            <ChevronRight color={Colors.GRAY[500]} size={25} />
          </div>
        </div>

        <div className="flex px-3  flex-col gap-2 flex-wrap ">
          <ItemsCard
            logo={Aliexpress}
            logoAlt="Aliexpress"
            ranquing={Bronze}
            ranquingAlt="Bronze"
            value="25.00"
            category="500"
          />

          <ItemsCard
            logo={Amazon}
            logoAlt="Amazon"
            ranquing={Bronze}
            ranquingAlt="Bronze"
            value="25.00"
            category="500"
          />

          <ItemsCard
            logo={Magalu}
            logoAlt="Magalu"
            ranquing={Bronze}
            ranquingAlt="Bronze"
            value="25.00"
            category="500"
          />
        </div>
      </div>
    </main>
  );
}
