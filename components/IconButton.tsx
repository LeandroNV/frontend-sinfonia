import { cn } from "@/lib/utils"

interface IconButtonProps {
  onClick: () => void
  icon: React.ReactElement
  className?: string
}

export const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className
      )}
    >
      {icon}
    </button>
  )
}
