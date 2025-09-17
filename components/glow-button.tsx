"use client"
import { cn } from "@/lib/utils"
import type React from "react"

const GlowButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "hover:opacity-90 rounded-2xl border font-light relative overflow-hidden",
        "after:absolute after:content-[''] after:inset-0 after:[box-shadow:0_0_15px_-1px_#ffffff90_inset] after:rounded-2xl",
        "before:absolute before:content-[''] before:inset-0 before:rounded-2xl before:z-20 after:z-10",
        "[box-shadow:0_0_100px_-10px_#8B5CF6] before:[box-shadow:0_0_7px_-1px_#e9d5ff_inset]",
        "bg-violet-500 border-violet-300/70 text-white px-8 text-lg opacity-90",
        "transition-all duration-300",
        className,
      )}
      {...props}
    >
      <span className="relative z-30">{children}</span>
    </button>
  )
}

export default GlowButton
