import { AppSidebar } from "@/components/ui/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BreadcrumbResponsive } from "./breadcrum-header"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-row flex-1">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />

        <div className="flex flex-col flex-1 border p-4 mx-4 rounded">
          <div>
            <BreadcrumbResponsive />
          </div>
          {children}
        </div>

      </SidebarProvider>
    </div>
  )
}
