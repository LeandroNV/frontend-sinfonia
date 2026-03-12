import { getCategories } from "@/api/getCategories"
import { CategoryType } from "@/types/category"
import Image from "next/image"
import Link from "next/link"

export const ChooseCategory = async () => {
  const { data } = await getCategories()

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>
      <div className="grid grid-cols-2 gap-5 px-4 sm:grid-cols-3 sm:px-0">
        {data.map((category: CategoryType) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="relative block w-full"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                alt={category.categoryName}
                fill
                className="object-cover transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="absolute bottom-5 w-full py-2 text-center text-lg font-bold text-white backdrop-blur-lg">
              {category.categoryName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
