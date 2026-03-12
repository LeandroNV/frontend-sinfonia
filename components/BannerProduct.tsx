import Link from "next/link"
import { buttonVariants } from "./ui/button"

export const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumérgete en una esperiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Café exquisito
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>

      <div className="mt-5 h-[350px] bg-[url('/slider-image.jpg')] bg-cover bg-center md:h-[900px]"></div>
    </>
  )
}
