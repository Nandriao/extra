"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Logo from "@/img/extra-purple-full.png";
import Colors from "@/constants/Colors";

import { FaBell, FaUser } from "react-icons/fa6";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

function Header() {
  const loged = true;
  const notificationCount = 3;

  return (
    <main className="p-3 flex flex-row justify-between items-center">
      <Link href="/" className="active:opacity-50">
        <Image alt="logo" src={Logo} className="w-24" />
      </Link>

      {loged ? (
        <div className="flex flex-row gap-2">
          <Link
            href={"/"}
            className="flex items-center rounded-md bg-purple-100 shadow-md active:opacity-50 relative"
            aria-label={`Você tem ${notificationCount} notificações`}
          >
            <FaBell color={Colors.PRYMARY} size={35} className="p-2" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full min-h-[20px] min-w-[20px] flex items-center justify-center px-1">
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            )}
          </Link>
          
          {window.location.pathname !== '/dashboard/profile' && (
            <Link
              href="/dashboard/profile"
              className="flex rounded-md bg-purple-100 shadow-md items-center active:opacity-50
                transform transition-all duration-300 ease-in-out hover:scale-105
                animate-in fade-in slide-in-from-right"
              aria-label="Ir para perfil"
            >
              <FaUser color={Colors.PRYMARY} size={35} className="p-2" />
            </Link>
          )}
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2">
            <Link
              href={"/authentication/login"}
              className="flex items-center rounded-md bg-gray-200 shadow-md active:opacity-50"
            >
              <AiOutlineLogin
                color={Colors.PRYMARY}
                size={35}
                className="p-2"
              />

              <p className={`text-primary pr-3`}>Entrar</p>
            </Link>

            <Link
              href={"/authentication/register"}
              className={`flex items-center rounded-md bg-primary shadow-md active:opacity-50`}
            >
              <AiOutlineUserAdd
                color={Colors.WHITE}
                size={38}
                className="p-2"
              />

              <p className={`text-white pr-3`}>Registar</p>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Header;
