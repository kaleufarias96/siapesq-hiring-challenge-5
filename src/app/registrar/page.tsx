"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[linear-gradient(225deg,_#96E71E_0%,_#62B467_26%,_#479B8B_38%,_#2D81AF_48%,_#246EA1_60%,_#17558E_70%,_#00286E_89%,_#131B27_97%,_#141A22_100%)] ">

      <div className=" flex p-14 items-center justify-center">
        <div className="bg-white/65 p-6 text-center rounded-lg w-[400px] max-w-full">

          <div className="flex items-center p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="t-2" src="logo1.png" alt="Logo" />
          </div>
          <p className="text-3xl  font-bold mb-4 text-darkblue ">Registrar</p>

          <div className="flex flex-col gap-4 font-bold ">
            <Input className="text-center " type="email" placeholder="Insira seu Nome" />
            <Input className="text-center " type="email" placeholder="Insira seu E-mail" />
            <Input className="text-center " type="email" placeholder="Insira seu CPF" />
            <Input className="text-center " type="password" placeholder="Senha" />
          </div>

          <div className="flex justify-between p-4 flex-wrap    ">
            <Link type="submit" href="/login">
              <Button className="bg-lightblue font-bold hover:bg-darkblue w-32">Voltar</Button>
            </Link>
            <Link type="submit" href="/#">
              <Button className="bg-lightblue font-bold hover:bg-darkblue w-32">Continuar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}