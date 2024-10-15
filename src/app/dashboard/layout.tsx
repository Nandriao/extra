import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extra",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
