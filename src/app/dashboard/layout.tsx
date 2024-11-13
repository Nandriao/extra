import type { Metadata } from "next";

import Loading from "@/app/loading";
import { useAuth } from "@/hooks/useAuth";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useAuth();
  return (
      <div>{isLoading ? <Loading /> : children}</div>
  );
}
