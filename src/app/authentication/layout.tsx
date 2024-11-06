import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticação",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
