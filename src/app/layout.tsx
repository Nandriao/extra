import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Extra",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="">
        <Toaster />
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
