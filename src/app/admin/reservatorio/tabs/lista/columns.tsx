"use client"

import { ColumnDef } from "@tanstack/react-table"

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
]