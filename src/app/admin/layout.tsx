import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "lucide-react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-darkblue">
       
       <div className="flex flex-row bg-darkblue">
        <SidebarProvider>
          <SidebarTrigger />
          <AppSidebar  />
        </SidebarProvider>
      </div>

        <div className="flex  bg-white rounded-lg">
        {children} 
        </div>

      </body>
    </html>
  );
}
