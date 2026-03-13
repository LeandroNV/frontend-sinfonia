import { Skeleton } from "@/components/ui/skeleton"

export const FeaturedProductsSkeleton = () => {
  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <Skeleton className="mb-8 ml-6 h-9 w-56" />

      <div className="flex overflow-hidden px-4 sm:px-0">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 shrink-0 basis-[85%] p-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="rounded-lg border border-gray-200">
              <Skeleton className="h-60 w-full rounded-t-lg" />
              <div className="flex h-10 items-center justify-between gap-4 px-8">
                <Skeleton className="h-5 w-28" />
                <div className="flex gap-3">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
