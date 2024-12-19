
"use client"

import Link from "next/link"
import * as React from "react"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { getBreadcrumbData } from "./nav-data"

const ITEMS_TO_DISPLAY = 3

export function BreadcrumbResponsive() {
	const currentPath = usePathname()

	const items = getBreadcrumbData(currentPath)

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (

					<React.Fragment key={index}>
						<BreadcrumbItem>
							{item.href ? (
								<>
									<BreadcrumbLink
										asChild
										className="max-w-20 truncate md:max-w-none"
									>
										<Link href={item.href}>{item.label}</Link>
									</BreadcrumbLink>
								</>
							) : (
								<BreadcrumbPage className="max-w-20 truncate md:max-w-none">
									{item.label}
								</BreadcrumbPage>
							)}

						</BreadcrumbItem>
						{
							index < items.length - 1 ? <BreadcrumbSeparator /> : null
						}
					</React.Fragment>

				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
