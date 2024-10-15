"use client";

// import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { FaBell, FaChevronDown } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

import Colors from "@/constants/Colors";

import Coins from "@/assets/money2.png";
// import Deposit from "@/assets/new/Savings-rafiki.svg";
import Deposit from "@/assets/new/Piggy bank-amico.svg";
import Withdraw from "@/assets/new/ATM machine-pana (1).svg";
import Send from "@/assets/new/Bitcoin-amico.svg";

import { ChevronDown } from "lucide-react";

export default function Home() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <main className="flex px-3 flex-col mt-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center w-full">
          <Image src={Coins} alt="Balance" className="w-[150px] -ml-2  mt-3" />
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between w-full transition-all">
              <p className="text=xl text-purple-500 font-[poppins]">Saldo</p>

              <Button
                className="bg-transparent border-none shadow-none"
                variant={"outline"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <AiOutlineEye color={Colors.PRYMARY} size={25} />
                ) : (
                  <AiOutlineEyeInvisible color={Colors.PRYMARY} size={25} />
                )}
              </Button>
            </div>
            <p className="text-2xl  transition-all flex flex-row text-purple-500 font-semibold font-[poppins]">
              {show ? "0,00" : "****"} MZN
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full items-center">
          <p className="text-gray-500">Operações</p>
          <ChevronDown color={Colors.GRAY[500]} size={25} />
        </div>

        <div className="flex flex-row gap-4">
          <Link
            href={"/"}
            className="flex flex-col items-center active:opacity-50 bg-purple-100 rounded-md px-2"
          >
            <Image
              src={Deposit}
              alt="Balance"
              className="w-[100px] -ml-2  mt-3"
            />

            <p className="text-gray-500 pb-1">Depósitar</p>
          </Link>

          <Link
            href={"/"}
            className="flex flex-col items-center active:opacity-50 bg-purple-100 rounded-md px-2"
          >
            <Image
              src={Withdraw}
              alt="Balance"
              className="w-[100px] -ml-2  mt-3"
            />

            <p className="text-gray-500 pb-1">Levantar</p>
          </Link>

          <Link
            href={"/"}
            className="flex flex-col items-center active:opacity-50 bg-purple-100 rounded-md px-2"
          >
            <Image src={Send} alt="Balance" className="w-[100px] -ml-2  mt-3" />

            <p className="text-gray-500 pb-1">Transferir</p>
          </Link>
        </div>

        <div className="flex flex-row justify-between w-full items-center">
          <p className="text-gray-500">Recomendações</p>
          <ChevronDown color={Colors.GRAY[500]} size={25} />
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <Link href={"/"} className=""></Link>
        </div>
      </div>
    </main>
  );
}
