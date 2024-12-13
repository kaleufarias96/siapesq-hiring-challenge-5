import type { Metadata } from "next";

import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SIAPESQ",
  description: "Tela Administradora de Corpos Hídricos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="h-screen flex flex-col">
        <SidebarProvider>
          <SidebarTrigger />
          <main className="flex-1 flex flex-col items-center justify-center gap-4">
            <img src="/mapa.png" alt="Mapa" />
            <Link href="/#">
              <Button className="bg-lightblue font-bold hover:bg-darkblue h-12 w-72">
                Iniciar Monitoramento
              </Button>
            </Link>
          </main>
          <AppSidebar />
        </SidebarProvider>
        {children}
      </body>
    </html>
  );
}
