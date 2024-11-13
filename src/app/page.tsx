"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

import { redirect } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";

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

import { useAuth } from "@/hooks/useAuth";

import Loading from "./loading";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(true);
  const [active, setActive] = useState<number>(1);

  const { isLoading, isAuthenticated } = useAuth();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect("/authentication/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return null;

  return (
    <main className="flex flex-col mb-3 min-h-screen">
      <div className="flex flex-col gap-3">
        <Header />
        <div className="flex flex-col mt-3 gap-3">
          <div className="flex px-3  flex-row items-center w-full">
            <Image
              src={Coins}
              alt="Balance"
              className="w-[150px] -ml-2  mt-3"
            />
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
                    <AiOutlineEyeInvisible
                      color={Colors.GRAY[500]}
                      size={25}
                    />
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
              <OperationCard
                href=""
                imageSrc={Bronze}
                imageAlt="Deposit"
                title="Bronze"
              />

              <OperationCard
                href="/dashboard/plans"
                imageSrc={Send}
                imageAlt="plans"
                title="Atualizar"
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
            <div className="flex px-3  flex-row justify-between w-full items-center">
              <p className="text-gray-500">Planos e comições</p>
              <ChevronRight color={Colors.GRAY[500]} size={25} />
            </div>

            <ScrollArea className="w-full">
              <div className="flex px-3 pb-2 w-max gap-2">
                <PlansSmall
                  active={active === 1 ? 1 : 0}
                  name="Bronze"
                  logo={Bronze}
                  clickFunction={() => setActive(1)}
                />

                <PlansSmall
                  active={active === 2 ? 1 : 0}
                  name="Silver"
                  logo={Silver}
                  clickFunction={() => setActive(2)}
                />

                <PlansSmall
                  active={active === 3 ? 1 : 0}
                  name="Gold"
                  logo={Gold}
                  clickFunction={() => setActive(3)}
                />

                <PlansSmall
                  active={active === 4 ? 1 : 0}
                  name="Platinum"
                  logo={Platinum}
                  clickFunction={() => setActive(4)}
                />

                <PlansSmall
                  active={active === 5 ? 1 : 0}
                  name="Emerald"
                  logo={Emerald}
                  clickFunction={() => setActive(5)}
                />

                <PlansSmall
                  active={active === 6 ? 1 : 0}
                  name="Diamond"
                  logo={Diamond}
                  clickFunction={() => setActive(6)}
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
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
        <Footer />
      </div>
    </main>
  );
}