import type { Metadata } from "next";

import "./globals.css";


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
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
