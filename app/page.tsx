import Image from "next/image"
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Mail,
  TerminalSquare,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "AI Products",
    copy: "Intelligent tools that help people learn, think, and create.",
  },
  {
    icon: Box,
    title: "Business Software",
    copy: "Web applications that automate workflows and drive results.",
  },
  {
    icon: TerminalSquare,
    title: "Internal Tools",
    copy: "Systems and utilities that improve operations and save time.",
  },
]

const projects = [
  {
    title: "Dealer Payment Calculator",
    description:
      "Financial calculator for vehicle payments with trade-in logic, interest rates, and amortization schedules.",
    tags: ["Next.js", "TypeScript", "Jest"],
    preview: "https://dealer-monthly-payment-calculator.vercel.app",
  },
]

const experience = [
  {
    date: "Dec 2024 – Present",
    role: "Sales & Water Solutions Specialist",
    company: "TG Water Systems",
    copy: "Lead in-home water tests, consult with homeowners, and deliver tailored water treatment solutions. Close high-ticket sales and coordinate installations.",
  },
  {
    date: "May 2023 – Dec 2024",
    role: "Sales Consultant",
    company: "Lithia Toyota Odessa",
    copy: "Helped customers find the right vehicle through a consultative sales process. Built relationships, generated leads, and consistently delivered excellent customer service.",
  },
  {
    date: "2022 – 2023",
    role: "Sales Specialist",
    company: "Lowe’s Home Improvement",
    copy: "Assisted customers with product selection and project planning. Drove sales and maintained product knowledge across departments.",
  },
  {
    date: "2019 – 2022",
    role: "Associate",
    company: "Walmart",
    copy: "Provided excellent customer service, maintained store standards, and supported daily operations across multiple departments.",
  },
]

function LinkButton({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a target="_blank" href={href} className={`inline-flex ${className}`}>
      <Button>{children}</Button>
    </a>
  )
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          className="text-3xl font-bold tracking-tighter"
          aria-label="Home"
        >
          DF
        </a>
        <nav
          className="flex items-center gap-2 sm:gap-7"
          aria-label="Primary navigation"
        >
          <a className="nav-link hidden text-sm sm:block" href="#work">
            Work
          </a>
          <a className="nav-link hidden text-sm sm:block" href="#contact">
            Contact
          </a>
          <LinkButton
            href="https://docs.google.com/document/d/1_qPE7nnIj7lQEVDJM7ak8NGMPn_qDVsMu3Trz1BiyCg/edit?usp=sharing"
            className="[&_button]:h-10 [&_button]:px-4"
          >
            Resume <ArrowDownToLine className="size-4" />
          </LinkButton>
        </nav>
      </header>

      <section className="border-b">
        <div className="mx-auto grid max-w-7xl items-end px-6 pt-10 lg:grid-cols-2 lg:px-10 lg:pt-14">
          <div className="relative z-10 pb-14 lg:pb-20">
            <p className="mb-7 text-xs font-medium tracking-wide text-neutral-500 uppercase">
              Full-stack developer
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">
              Building software
              <br />
              that solves
              <br />
              real problems.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
              I build scalable web applications with clean code and great user
              experiences.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span>Python</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>PostgreSQL</span>
            </div>
            <div className="mt-9 flex items-center gap-4">
              <a href="#work">
                <Button>
                  View my work <ArrowUpRight className="size-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="ghost">
                  Get in touch <ArrowRight className="size-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden:small:h-[440px] relative mx-auto w-full max-w-[580px] overflow-hidden lg:h-[620px]">
            <Image
              src="/images/hero-portrait-2.png"
              alt="Black and white developer portrait"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="border-b py-12 lg:py-14">
          <p className="section-label">What I build</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">
            {services.map(({ icon: Icon, title, copy }, i) => (
              <article
                key={title}
                className={`md:px-10 ${i === 0 ? "md:pl-0" : "border-neutral-200 md:border-l"}`}
              >
                <Icon className="mb-4 size-7 stroke-[1.6]" />
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-8 border-b py-12 lg:py-14">
          <div className="flex items-center justify-between">
            <p className="section-label">Selected work</p>
            {/* <a
              className="inline-flex items-center gap-2 text-sm font-medium"
              href="#all-projects"
            >
              View all projects <ArrowRight className="size-4" />
            </a> */}
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-6">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="aspect-[1.3] overflow-hidden rounded-md border bg-neutral-100 p-2 transition-transform duration-300 group-hover:-translate-y-1">
                  <iframe
                    src={project.preview}
                    loading="lazy"
                    className="h-full w-full rounded-2xl border"
                  ></iframe>
                </div>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-5 flex items-start justify-between">
                    <p className="text-lg font-semibold">{project.title}</p>
                    <ArrowUpRight className="size-5" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {project.description}
                  </p>
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b py-10">
          <p className="section-label">Tech stack</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm sm:text-base">
            {[
              "Python",
              "TypeScript",
              "Next.js",
              "PostgreSQL",
              "Supabase",
              "Tailwind CSS",
              "Docker",
              "Git",
            ].map((tech, i) => (
              <span key={tech} className="flex items-center gap-7">
                {i > 0 && <span className="text-xs">•</span>}
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 py-12 lg:py-14">
          <p className="section-label">Experience</p>
          <div className="mt-8 max-w-4xl">
            {experience.map((item, i) => (
              <article
                key={item.role}
                className="grid grid-cols-[1fr_22px_3.8fr] gap-4 sm:grid-cols-[180px_30px_1fr]"
              >
                <p className="pt-1 text-xs text-neutral-600 sm:text-sm">
                  {item.date}
                </p>
                <div className="relative flex justify-center">
                  <span className="mt-2 size-2.5 rounded-full bg-black" />
                  {i < experience.length - 1 && (
                    <span className="absolute top-5 bottom-0 w-px bg-neutral-200" />
                  )}
                </div>
                <div className="pb-9">
                  <h2 className="font-semibold">{item.role}</h2>
                  <p className="mt-0.5 text-sm">{item.company}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          {/* <a
            className="inline-flex items-center gap-3 text-sm font-medium"
            href="#full-experience"
          >
            View full experience <ArrowRight className="size-4" />
          </a> */}
        </section>
      </div>

      <footer id="contact" className="scroll-mt-8 border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <h2 className="max-w-md text-4xl leading-[1.05] font-semibold tracking-tight">
                Let’s build something
                <br />
                great together.
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                I’m always open to discussing new projects and opportunities.
              </p>
            </div>
            <LinkButton href="https://www.linkedin.com/in/daniel-fernandez-tech/">
              Let’s connect <ArrowRight className="size-4" />
            </LinkButton>
          </div>
          <div className="mt-12 flex flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-xs text-neutral-500">
              © 2026 Daniel Fernández. All rights reserved.
            </p>
            <div className="flex gap-7">
              <a
                href="https://github.com/danielFernandezDj?tab=repositories"
                aria-label="GitHub"
                target="_blank"
                className="flex items-center gap-2"
              >
                Github
                <GitBranch className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-fernandez-tech/"
                aria-label="LinkedIn"
                target="_blank"
                className="flex items-center gap-2"
              >
                Linkedin
                <BriefcaseBusiness className="size-5" />
              </a>
              <a
                href="mailto:danielfernande.tech@gmail.com"
                aria-label="Email"
                target="_blank"
                className="flex items-center gap-2"
              >
                Mail
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
