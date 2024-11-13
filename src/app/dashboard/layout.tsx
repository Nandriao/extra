"use client"

import React from "react";

import { redirect } from "next/navigation";

import Loading from "@/app/loading";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { useAuth } from "@/hooks/useAuth";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useAuth();

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
      redirect("/");

    }
  }

  // return (
  //   <div>
  //     {isLoading ? (
  //       <Loading />
  //     ) : (
  //       <>
  //         <Header />
  //         {children}
  //         <Footer />
  //       </>
  //     )}
  //   </div>
  // );
}
