import type { Metadata } from "next";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Painel - Budgee",
  description: "Gerenciador de Orçamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      {children}

      {/* Credits */}
      <p className="copyright">&copy; 2025 - Todos direitos reservados</p>
    </div>
  );
}
