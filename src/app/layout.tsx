import type { Metadata } from "next"

import "./globals.css"


export const metadata: Metadata = {
  title: "SIAPESQ",
  description: "Tela Administradora de Corpos Hídricos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-1 grow-0 basis-full h-full">
        {children}
      </body>
    </html>
  )
}
