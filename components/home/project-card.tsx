"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

type ProjectCardProps = {
  title: string
  description: string
  stack: string[]
  imageSrc: string
  imageAlt: string
  projectHref: string
  githubHref: string
}

function ProjectCard({
  title,
  description,
  stack,
  imageSrc,
  imageAlt,
  projectHref,
  githubHref,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group rounded-[28px] border border-neutral-200 bg-white p-4 md:p-5"
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.015,
              y: -2,
              boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
            }
      }
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-[22px] border border-neutral-200 bg-neutral-100">
        <motion.div
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={780}
            className="h-auto w-full object-cover"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </motion.div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.9rem] font-semibold tracking-[-0.05em] text-black">
            {title}
          </h3>
          <p className="mt-3 max-w-[34ch] text-[1rem] leading-8 text-neutral-600">
            {description}
          </p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-black" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-neutral-100 px-3 py-1 text-[0.8rem] text-neutral-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-6 text-[0.96rem]">
        <Link
          href={projectHref}
          className="group/link inline-flex items-center gap-2 font-medium text-black"
        >
          Open Project
          <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
        </Link>
        <Link href={githubHref} className="text-neutral-600 transition-colors hover:text-black">
          GitHub
        </Link>
      </div>
    </motion.article>
  )
}

export { ProjectCard }
