"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function MonitoramentoPage() {
  return (
    <div className={'flex flex-1 items-center justify-center'}>
      <div className={'flex flex-col items-center gap-6 justify-cente'}>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mapa.png" alt="Mapa" className="rounded-lg" />
        <Link href="/#">
          <Button className="bg-lightblue font-bold hover:bg-darkblue h-12 w-72">
            Iniciar Monitoramentoaa
          </Button>
        </Link>

      </div>

    </div>
  )
}