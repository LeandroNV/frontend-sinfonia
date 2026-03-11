import Link from "next/link"
import { Separator } from "../ui/separator"

const dataFooter = [
  { id: 1, name: "Sobre nosotros", link: "#" },
  { id: 2, name: "Productos", link: "#" },
  { id: 3, name: "Mi cuenta", link: "#" },
  { id: 4, name: "Política de privacidad", link: "#" },
]

export const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="mx-auto w-full max-w-7xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">Sinfonía Café</span> E-commerce
          </p>

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="mr-4 hover:underline md:mr-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="#"
              className="font-medium text-foreground hover:underline"
            >
              Sinfonía Café
            </Link>{" "}
            · Todos los derechos reservados.
          </span>
          <span className="text-xs text-muted-foreground">
            Hora local:{" "}
            {new Date().toLocaleTimeString("es-CO", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </footer>
  )
}
