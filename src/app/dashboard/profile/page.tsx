"use client";

import { Button } from "@/components/ui/button";
import Colors from "@/constants/Colors";

import Image from "next/image";
import Link from "next/link";

import { FaUser } from "react-icons/fa6";

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";
import { ChevronRight, LogOut } from "lucide-react";

const ProfilePage = () => {
  const userProfile = {
    name: "Albino Nandriao",
    Phone: 843794444,
    medall: "Gold"
  };

  const handleEditProfile = () => {
    // Implementação futura da edição de perfil
    console.log("Editar perfil");
  };

  return (
    <div className="min-h-screen py-6 px-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={Gold}
            alt="Gold medal profile"
            className="w-12"
            priority
          />

          <div className="flex flex-1 flex-col">
            <h1 className="text-base font-semibold text-gray-700">
              {userProfile.name}
            </h1>
            <p className="text-gray-500 text-sm">{userProfile.Phone}</p>
          </div>

          <Button
            onClick={() => console.log("Upgrade clicked")}
            variant="outline"
            className="flex items-center gap-2 h-10 text-sm border-primary text-primary hover:bg-primary/10"
            aria-label="Fazer upgrade da conta"
          >
            {/* <FaUser className="h-6 w-4" /> */}
            Upgrade
          </Button>
        </div>

        <div className="flex flex-col mt-7 px-2 gap-2">
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-gray-700 text-base">Saldo em dinheiro</p>
            <p className="text-gray-700 text-base">100,00 MZN</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-gray-700 text-base">Investido</p>
            <p className="text-gray-700 text-base">100,00 MZN</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-gray-700 text-base">Bônus</p>
            <p className="text-gray-700 text-base">100,00 MZN</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 w-full mt-8 items-center justify-center">
          <Link href="/dashboard/deposit" className="flex flex-1">
            <Button 
              className="w-full h-12 text-base bg-primary text-white hover:bg-primary/90" 
              aria-label="Depositar dinheiro"
            >
              Depositar
            </Button>
          </Link>

          <Link href="/dashboard/withdraw" className="flex flex-1">
            <Button
              type="button"
              variant="outline"
              aria-label="Levantar dinheiro"
              className="text-primary text-base border-primary w-full h-12"
            >
              Levantar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 mt-6">
            <h1 className="text-gray-700 text-base">Operações e configurações</h1>

            <Link 
              href="/dashboard/details" 
              className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <p className="text-gray-700 text-base">Detalhes do perfil</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </Link>

            <Link 
              href="/dashboard/transactions" 
              className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <p className="text-gray-700 text-base">Histórico de transações</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </Link>

            <Link 
              href="/dashboard/settings" 
              className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <p className="text-gray-700 text-base">Configurações</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </Link>

            <Link 
              href="/dashboard/help" 
              className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <p className="text-gray-700 text-base">Ajuda</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </Link>
        </div>

        <div className="mt-6 w-full">
          <Button
            type="button"
            variant="destructive"
            aria-label="Encerrar sessão"
            className="w-full h-12 text-base flex items-center justify-center gap-2"
            onClick={() => {
              // TODO: Implement logout logic
              console.log('Logout clicked');
            }}
          >
            <LogOut className="h-5 w-5" />
            Encerrar sessão
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
