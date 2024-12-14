import type { Metadata } from "next"

import "./globals.css"
import Login from "./login/page"

export const metadata: Metadata = {
  title: "SIAPESQ",
  description: "Tela Administradora de Corpos Hídricos",
}


export default function App() {
  return (

    <Login />

  )
}

