// This is sample data.
export const nav_data = {
	navMain: [
		{
			title: "Dashboard",
			url: "#",

			items: [
				{
					title: "Monitoramento",
					url: "/admin/monitoramento",
					emoji: "🎬",
				},
				{
					title: "Historico",
					url: "#",
				},
			],
		},
		{
			title: "Gerenciamento",
			url: "#",
			items: [
				{
					title: "Reservatórios",
					url: "/admin/reservatorio",
				},
				{
					title: "Servidores",
					url: "#",

				},
			],
		},
		{
			title: "Usuário",
			url: "#",
			items: [
				{
					title: "Sair",
					url: "/login",
					isActive: true,
				},
			],
		},
	],
}

type BreadcrumbItem = {
	href: string
	label: string
}
export function getBreadcrumbData(currentPath: string) {
	const items: BreadcrumbItem[] = []
	const pathSegments = currentPath.split("/").filter(Boolean)
	for (let i = 0; i < pathSegments.length; i++) {
		const href = "/" + pathSegments.slice(0, i + 1).join("/")
		const label = pathSegments[i]
		items.push({ href, label })
	}
	return items
}