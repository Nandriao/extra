"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Loading from "../loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  } else {
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen">
          <Header />
          <div className="px-2">
            {children}
          </div>
          <Footer />
        </div>
      );
    } else {
      router.push("/");
    }
  }

  // if (!isLoading && !user) {
  //   redirect("/authentication/login");
  // }

  // return (
  //   <div>
  //     <Header />
  //     {children}
  //     <Footer />
  //   </div>
  // );
}
