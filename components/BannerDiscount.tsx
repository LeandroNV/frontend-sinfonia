import Link from "next/link"
import { buttonVariants } from "./ui/button"

export const BannerDiscount = () => {
  return (
    <div className="p-5 text-center sm:p-20">
      <h2 className="text-2xl font-black text-primary uppercase">
        Consigue hasta un -25%
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar $200000 o -25% al gastar $250000. Usa el código de
        LENGUPA
      </h3>

      <div className="mx-auto mt-5 max-w-md justify-center gap-8 sm:flex">
        <Link href={"#"} className={buttonVariants()}>
          Comprar
        </Link>
        <Link href={"#"} className={buttonVariants({ variant: "outline" })}>
          Más información
        </Link>
      </div>
    </div>
  )
}

//! 2:22:46
