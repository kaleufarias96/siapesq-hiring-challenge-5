"use client"

import { Button, } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  ColumnDef
} from "@tanstack/react-table"

import { Delete, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Reservatorio = {
  id: string
  discriminacao: string
  bloom1: string
  bloom2: string
  bloom3: string
}

export const columns: ColumnDef<Reservatorio>[] = [
  {
    accessorKey: "discriminacao",
    header: "Discriminacao",
  },
  {
    accessorKey: "bloom1",
    header: "Bloom 1",
  },
  {
    accessorKey: "bloom2",
    header: "Bloom 2",
  },
  {
    accessorKey: "bloom3",
    header: "Bloom 3",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>
              Baixar PDF
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className={'text-red-500'}>
              Excluir
              <Delete className="w-4 h-4 mr-2" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]