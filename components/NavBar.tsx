"use client"

import { Heart, ShoppingCartIcon, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MenuList } from "./MenuList"

export const NavBar = () => {
  const router = useRouter()

  return (
    <nav className="mx-auto flex cursor-pointer items-center justify-between p-4 sm:max-w-4xl md:max-w-6xl">
      <Link href="/">
        <span className="text-3xl">
          Sinfonía <span className="font-bold">Café</span>
        </span>
      </Link>

      <div className="hidden items-center justify-between sm:flex">
        <MenuList />
      </div>

      <div className="flex sm:hidden">
        <p>Items menu Mobile</p>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCartIcon
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("./cart")}
        />
        <Heart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("./loved-products")}
        />
        <User strokeWidth={1} className="cursor-pointer" />
      </div>
    </nav>
  )
}
