"use client"

import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";


export default function Reservatório() {
  return (
    <div >
      <body>
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
      </body>
    </div>
  );
}




/*         <SidebarProvider>
          <SidebarTrigger />
          <main className="flex-1 flex flex-col items-center justify-center gap-4">
            <img src="/mapa.png" alt="Mapa" />
            <Link href="/login">
              <Button className="bg-lightblue font-bold hover:bg-darkblue h-12 w-72">
                Iniciar Monitoramento
              </Button>
            </Link>
          </main>
          <AppSidebar />
        </SidebarProvider> */