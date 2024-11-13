"use client";

import React from "react";

import { redirect } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Loading from "../loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  } else {
    if (!isAuthenticated) {
      return (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      );
    } else {
      redirect("/authentication/login");
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
