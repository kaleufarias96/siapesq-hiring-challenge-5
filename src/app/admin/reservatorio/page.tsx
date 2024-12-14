
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReservatorioForm } from "./tabs/cadastro/form"
import { columns, Reservatorio } from "./tabs/lista/columns"
import { DataTable } from "./tabs/lista/data-table"

async function getData(): Promise<Reservatorio[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      discriminacao: "Latitude",
      bloom1: "42.5432",
      bloom2: "42.5432",
      bloom3: "42.5432",
    },
    {
      id: "728ed52f",
      discriminacao: "Latitude",
      bloom1: "42.5432",
      bloom2: "42.5432",
      bloom3: "42.5432",
    },
    {
      id: "728ed52f",
      discriminacao: "Latitude",
      bloom1: "42.5432",
      bloom2: "42.5432",
      bloom3: "42.5432",
    },
    {
      id: "728ed52f",
      discriminacao: "Latitude",
      bloom1: "42.5432",
      bloom2: "42.5432",
      bloom3: "42.5432",
    },
    {
      id: "728ed52f",
      discriminacao: "Latitude",
      bloom1: "42.5432",
      bloom2: "42.5432",
      bloom3: "42.5432",
    },
    // ...
  ]
}

export default async function ReservatorioPage() {
  const data = await getData()

  return (
    <div className="container py-4">

      <Tabs defaultValue="lista" className="">
        <TabsList>
          <TabsTrigger value="lista">
            Listagem
          </TabsTrigger>
          <TabsTrigger value="cadastro">
            Cadastro
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lista">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="cadastro">
          <ReservatorioForm />
        </TabsContent>
      </Tabs>


    </div>
  )
}
