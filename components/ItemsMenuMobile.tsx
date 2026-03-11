"use client"

import { Coffee, Leaf, Menu, Package } from "lucide-react"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "./ui/popover"
import { Highlighter } from "./ui/highlighter"

const categories = [
  {
    title: "Café molido",
    href: "/categories/cafe-molido",
    icon: <Coffee className="size-4 text-amber-700" />,
    description: "Listo para preparar",
  },
  {
    title: "Café en grano",
    href: "/categories/cafe-grano",
    icon: <Leaf className="size-4 text-amber-700" />,
    description: "Frescura y calidad",
  },
  {
    title: "Café cápsula",
    href: "/categories/cafe-capsula",
    icon: <Package className="size-4 text-amber-700" />,
    description: "Conveniencia en cada taza",
  },
]

export const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex cursor-pointer items-center justify-center rounded-md p-1.5 transition-colors hover:bg-muted">
          <Menu className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0" align="center">
        <PopoverHeader className="border-b border-border px-4 pt-4 pb-3">
          <Highlighter
            className={"text-base font-semibold"}
            action="underline"
            color="#FDE68A"
            animationDuration={700}
            isView={true}
          >
            Nuestros productos
          </Highlighter>
        </PopoverHeader>
        <div className="flex flex-col p-2">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-amber-50"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-amber-100 transition-colors group-hover:bg-amber-200">
                {cat.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm leading-none font-medium text-foreground">
                  {cat.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cat.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
