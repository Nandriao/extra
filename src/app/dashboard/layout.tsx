"use client";

import React from "react";

import Loading from "@/app/loading";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { useAuth } from "@/hooks/useAuth";
import Login from "../authentication/login/page";

export default function Dashboard({ children }: { children: React.ReactNode }) {

  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <Loading />;
  } else {
    if (isAuthenticated) {
      return (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-3">
          <Header />
          <Login />
          <Footer />
        </div>
      );
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
