import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budgee",
  description: "Gerenciador de Orçamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
