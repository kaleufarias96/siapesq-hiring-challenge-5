// This is sample data.
export const nav_data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/admin/dashboard",

			items: [
				{
					title: "Monitoramento",
					url: "/admin/dashboard/monitoramento",
					emoji: "🎬",
				},
				{
					title: "Historico",
					url: "/admin/dashboard/historico",
				},
			],
		},
		{
			title: "Gerenciamento",
			url: "/admin/gerenciamento",
			items: [
				{
					title: "Reservatórios",
					url: "/admin/gerenciamento/reservatorios",
				},
				{
					title: "Servidores",
					url: "/admin/gerenciamento/servidores",

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
		const path = pathSegments[i]
		let label = ""
		function findLabel(navItems: any[], segment: string): string {
			for (const item of navItems) {
				if (item.url === href) {
					return item.title
				}
				if (item.items) {
					const found = findLabel(item.items, segment)
					if (found) return found
				}
			}
			return ""
		}
		label = findLabel(nav_data.navMain, path)
		items.push({ href, label })
	}
	return items
}