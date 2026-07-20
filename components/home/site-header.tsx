"use client"

import { useState } from "react"
import Link from "next/link"
import { Download } from "lucide-react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion"

import { cn } from "@/lib/utils"

function SiteHeader() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 8)
  })

  const content = (
    <div
      className={cn(
        "mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 transition-all duration-200 md:px-10",
        scrolled && "backdrop-blur-sm"
      )}
    >
      <Link
        href="#top"
        className="text-[2rem] font-semibold tracking-[-0.08em] text-black transition-opacity hover:opacity-70"
        aria-label="Back to top"
      >
        DF
      </Link>

      <nav className="hidden items-center gap-10 text-[1.05rem] md:flex">
        <Link href="#selected-work" className="nav-link">
          Work
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
      </nav>

      <Link
        href="mailto:daniel.fernandez.dev@gmail.com?subject=Resume%20Request"
        className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        aria-label="Request resume by email"
      >
        Resume
        <Download className="size-4" />
      </Link>
    </div>
  )

  if (reduceMotion) {
    return (
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90">
        {content}
      </header>
    )
  }

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-white/80",
        scrolled && "border-neutral-200/80"
      )}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.78)",
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.header>
  )
}

export { SiteHeader }
