"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Logo from "@/img/extra-purple-full.png";
import Colors from "@/constants/Colors";

import { FaBell, FaUser } from "react-icons/fa6";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

function Header() {
  // const [loged, setLoged] = useState<boolean>(false);

  const loged = false;

  return (
    <main className="p-3 flex flex-row justify-between items-center">
      <Image alt="logo" src={Logo} className="w-24" />

      {loged ? (
        <div className="flex flex-row gap-2">
          <Link
            href={"/"}
            className="flex items-center rounded-md bg-purple-100 shadow-md active:opacity-50"
          >
            <FaBell color={Colors.PRYMARY} size={35} className="p-2 " />
          </Link>
          <Link
            href={"/"}
            className="flex rounded-md bg-purple-100 shadow-md items-center"
          >
            <FaUser color={Colors.PRYMARY} size={35} className="p-2 " />
          </Link>
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
