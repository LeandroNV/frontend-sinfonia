"use client"

import * as React from "react"
import Link from "next/link"
import { Coffee, Leaf, Package } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: {
  title: string
  href: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    title: "Café grano",
    href: "/categories/cafe-grano",
    description:
      "Granos de café enteros que requieren ser molidos antes de su preparación. Ideal para los amantes del café que aprecian la frescura y la calidad",
    icon: <Leaf className="size-4 text-amber-700" />,
  },
  {
    title: "Café molido",
    href: "/categories/cafe-molido",
    description:
      "Café en forma de polvo listo para ser utilizado en diferentes métodos de preparación, como la cafetera de filtro o la prensa francesa",
    icon: <Coffee className="size-4 text-amber-700" />,
  },
  {
    title: "Café de cápsula",
    href: "/categories/cafe-capsula",
    description:
      "Café envasado en cápsulas individuales, ofreciendo conveniencia y consistencia en la preparación",
    icon: <Package className="size-4 text-amber-700" />,
  },
]

export const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1.5 p-3 md:grid-cols-[160px_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full flex-col justify-center rounded-lg bg-linear-to-b from-amber-900 to-stone-950 p-4 no-underline transition-all outline-none select-none hover:from-amber-800 focus:ring-2 focus:ring-amber-700"
                  >
                    <Coffee className="mb-3 size-6 text-amber-200" />
                    <div className="mb-1.5 text-xl leading-snug font-semibold text-amber-50">
                      Sinfonía Café
                    </div>
                    <p className="text-sm leading-snug text-amber-200/75">
                      Sumérgete en el apasionante mundo del café con nuestra web
                      especializada en la venta de granos de alta calidad,
                      molidos y en cápsulas.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem>
              <ListItem href="/accesories" title="Accesorios">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-1 p-3">
              {components.map((component) => (
                <CoffeeItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </CoffeeItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/accesories">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex flex-col gap-1 rounded-md px-3 py-2.5 no-underline transition-colors outline-none select-none hover:bg-amber-50 focus:bg-amber-50",
            className
          )}
        >
          <div className="text-sm leading-snug font-semibold text-foreground">
            {title}
          </div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function CoffeeItem({
  title,
  children,
  href,
  icon,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon?: React.ReactNode
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "group flex items-start gap-3 rounded-md p-3 no-underline transition-colors outline-none select-none hover:bg-amber-50 focus:bg-amber-50",
            className
          )}
        >
          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-amber-100 transition-colors group-hover:bg-amber-200">
            {icon}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-base leading-none font-medium text-foreground">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
