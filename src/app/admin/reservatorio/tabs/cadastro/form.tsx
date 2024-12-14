
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReservatorioForm() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Cadastro de Reservatório</CardTitle>
				<CardDescription>Preencha todos os campos abaixo</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="discriminacao">Discriminação</Label>
							<Input id="discriminacao" placeholder="..." />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="bloom1">Bloom 1</Label>
							<Input id="bloom1" placeholder="..." />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="bloom2">Bloom 2</Label>
							<Input id="bloom2" placeholder="..." />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="bloom3">Bloom 3</Label>
							<Input id="bloom3" placeholder="..." />
						</div>

					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Resetar</Button>
				<Button>Salvar</Button>
			</CardFooter>
		</Card>
	)
}
