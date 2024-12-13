"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Login() {
  return (
    <div >
      <body className="flex  flex-col items-center  bg-[linear-gradient(225deg,_#96E71E_0%,_#62B467_26%,_#479B8B_38%,_#2D81AF_48%,_#246EA1_60%,_#17558E_70%,_#00286E_89%,_#131B27_97%,_#141A22_100%)] h-screen w-full">
        <div className="flex items-center p-14 ">
          <img className="h-72 t-2" src="logo1.png" alt="Logo" />
        </div>

        <div className=" flex p-14 items-center ">
          <div className="bg-white p-6 text-center rounded-lg w-96 max-w-full">
            <p className="text-3xl font-bold font-sans m-2 text-darkblue">Login</p>

            <div className="flex flex-col gap-4 font-bold">
              <Input className="text-center" type="email" placeholder="Insira seu E-mail" />
              <Input className="text-center" type="password" placeholder="Senha" />
            </div>

            <div className="flex justify-between p-4 flex-wrap ">
              <Link type="submit" href="/registrar">
              <Button className="bg-lightblue hover:bg-darkblue">Registrar</Button>
              </Link>
              <Link type="submit" href="/#">
                <Button className="bg-lightblue hover:bg-darkblue">Continuar</Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}




