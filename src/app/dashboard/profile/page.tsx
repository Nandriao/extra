"use client";

import { Button } from "@/components/ui/button";
import Colors from "@/constants/Colors";

import Image from "next/image";
import Link from "next/link";

import { ChevronRight, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { FaUser } from "react-icons/fa6";

import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/useAuth";
import formatNumber from "@/utils/formaterNumber";

const ProfilePage = () => {

  const router = useRouter();
  const { signOut, user } = useAuth();

  if (!user) signOut();

  const handleSignOut = async () => {
    await signOut();
    router.push("/authentication/login");
  };

  return (
    <div className="min-h-screen py-6 px-3">
      <div className="max-w-2xl">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={Gold}
            alt="Gold medal profile"
            className="w-12"
            priority
          />

          <div className="flex flex-1 flex-col">
            <h1 className="text-base font-semibold text-gray-700">
              {user?.fullName}
            </h1>
            <p className="text-gray-500 text-sm">{user?.phoneNumber}</p>
          </div>

          <Button
            onClick={() => router.push('/dashboard/plans')}
            variant="outline"
            className="flex items-center gap-2 h-10 text-sm border-primary text-primary hover:bg-primary/10"
            aria-label="Fazer upgrade da conta"
          >
            Upgrade
          </Button>
        </div>

        <div className="flex flex-col mt-7 px-2 gap-2">
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-gray-700 text-base">Saldo em dinheiro</p>
            <p className="text-gray-700 text-base">{Number(user?.balance) ?? 0} MZN</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <p className="text-gray-700 text-base">Investido</p>
            <p className="text-gray-700 text-base">{Number(user?.pendentBalance) ?? 0} MZN</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 w-full mt-8 items-center justify-center">
          <Link href="/dashboard/withdraw" className="flex flex-1">
            <Button
              type="button"
              variant="default"
              aria-label="Levantar dinheiro"
              className="text-white text-base border-primary w-full h-12"
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
            <p className="text-gray-700 text-base">Detalhes do perfil</p>

            <ChevronRight className="h-6 w-6 text-gray-500" />
          </Link>

          <Link
            href="/dashboard/transactions"
            className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <p className="text-gray-700 text-base">Histórico de transações</p>
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <p className="text-gray-700 text-base">Configurações</p>
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </Link>

          <Link
            href="/dashboard/help"
            className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <p className="text-gray-700 text-base">Ajuda</p>
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </Link>
        </div>

        <div className="mt-6 w-full">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="destructive"
                aria-label="Encerrar sessão"
                className="w-full h-12 text-base flex items-center justify-center gap-2"
              >
                <LogOut className="h-5 w-5" />
                Encerrar sessão
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Você realmente deseja encerrar sua sessão?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Não</AlertDialogCancel>
                <AlertDialogAction onClick={handleSignOut}>
                  Sim
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
