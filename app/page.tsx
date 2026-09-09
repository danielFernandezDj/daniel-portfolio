import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDot,
  Code2,
  Database,
  GitBranch,
  GitPullRequest,
  Mail,
  Network,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const capabilities = [
  {
    icon: Code2,
    eyebrow: "Application development",
    title: "TypeScript · Next.js · React",
    copy: "Build maintainable interfaces and application logic around real user and business workflows.",
  },
  {
    icon: Database,
    eyebrow: "Data & persistence",
    title: "PostgreSQL · SQL · Prisma",
    copy: "Model application data, persist system state, and validate behavior at the data layer.",
  },
  {
    icon: Network,
    eyebrow: "API integration",
    title: "REST · JSON · HTTP",
    copy: "Connect application behavior across service boundaries and reason about data contracts.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Quality engineering",
    title: "Playwright · Jest · Postman",
    copy: "Protect critical behavior with targeted automated testing and regression coverage.",
  },
  {
    icon: GitPullRequest,
    eyebrow: "Delivery",
    title: "Git · GitHub Actions",
    copy: "Ship changes through version-controlled workflows and automated delivery pipelines.",
  },
]

const approach = [
  {
    icon: CircleDot,
    title: "Understand",
    copy: "Find the actual user or business problem.",
  },
  {
    icon: Network,
    title: "Model",
    copy: "Define the workflow, data, constraints, and failure points.",
  },
  {
    icon: Code2,
    title: "Build",
    copy: "Implement the simplest maintainable solution.",
  },
  {
    icon: ShieldCheck,
    title: "Validate",
    copy: "Verify behavior and important failure conditions.",
  },
  {
    icon: GitPullRequest,
    title: "Deliver",
    copy: "Deploy, observe, and improve the system.",
  },
]

const experience = [
  {
    date: "2025 – Present",
    role: "Water Treatment Consultant",
    company: "TG Water Systems",
    copy: "Translate customer requirements and water-quality findings into treatment recommendations, then coordinate the solution from diagnosis through installation.",
  },
  {
    date: "2023 – 2025",
    role: "Flooring Sales Specialist",
    company: "Lowe’s Home Improvement",
    copy: "Moved customer projects from requirements gathering to installation by coordinating product decisions, documentation, vendors, timelines, and issue resolution.",
  },
  {
    date: "2020 – 2023",
    role: "Associate",
    company: "Walmart",
    copy: "Supported customers and high-volume daily operations while maintaining accuracy, organization, and consistent service execution.",
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
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`inline-flex ${className}`}
    >
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
          <a className="nav-link hidden text-sm sm:block" href="#experience">
            Experience
          </a>
          <a className="nav-link hidden text-sm sm:block" href="#contact">
            Contact
          </a>
          <LinkButton
            href="/Daniel-Fernandez-CV.pdf"
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
              Software Developer · Systems & Automation
            </p>

            <h1 className="max-w-xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">
              Building software
              <br />
              around real
              <br />
              problems.
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
              I turn business and user problems into practical software
              solutions—from modeling the workflow and data to building,
              validating, and delivering the system.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span>Applications</span>
              <span>•</span>
              <span>Data</span>
              <span>•</span>
              <span>APIs</span>
              <span>•</span>
              <span>Automation</span>
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

          <div className="relative mx-auto hidden h-[620px] w-full max-w-[580px] overflow-hidden lg:block">
            <Image
              src="/images/hero-portrait-2.png"
              alt="Black and white developer portrait"
              fill
              priority
              sizes="50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section id="work" className="scroll-mt-8 border-b py-12 lg:py-16">
          <div className="flex items-center justify-between">
            <p className="section-label">Selected work</p>
            <p className="hidden text-xs text-neutral-500 sm:block">
              01 / Featured project
            </p>
          </div>

          <article className="mt-8 grid items-center gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                Financial decision modeling
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Dealer Math
              </h2>

              <p className="mt-4 text-xl leading-8 font-medium">
                Vehicle financing, made easier to reason about.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
                A financial modeling application that brings vehicle price,
                trade position, taxes, fees, APR, and loan terms into one
                transparent calculation workflow.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-neutral-500">
                <span>Next.js</span>
                <span>·</span>
                <span>TypeScript</span>
                <span>·</span>
                <span>PostgreSQL</span>
                <span>·</span>
                <span>Prisma</span>
                <span>·</span>
                <span>Jest</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  href="/work/dealer-math"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore case study <ArrowRight className="size-4" />
                </Link>

                <a
                  href="https://dealer-monthly-payment-calculator.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black"
                >
                  Launch app <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <Link
              href="/work/dealer-math"
              aria-label="Open Dealer Math case study"
              className="block transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative pb-6 pr-10 sm:pb-8 sm:pr-14">
                <Image
                  src="/images/Macbook-Air-dealer-math-screenshot.webp"
                  alt="Dealer Math vehicle financing calculator on a MacBook Air"
                  width={3178}
                  height={1826}
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 90vw"
                  className="h-auto w-full"
                />
                <Image
                  src="/images/iPhone-13-PRO-dealer-math-screenshot.webp"
                  alt="Dealer Math vehicle financing calculator on an iPhone 13 Pro"
                  width={914}
                  height={1856}
                  sizes="(min-width: 1280px) 144px, (min-width: 1024px) 12vw, 22vw"
                  className="absolute right-0 bottom-0 h-auto w-[24%]"
                />
              </div>
            </Link>
          </article>
        </section>

        <section className="border-b py-12 lg:py-14">
          <p className="section-label">Engineering capabilities</p>

          <div className="mt-8 grid gap-x-0 gap-y-9 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, eyebrow, title, copy }, i) => (
              <article
                key={title}
                className={`md:px-8 ${
                  i % 3 === 0
                    ? "md:pl-0"
                    : "border-neutral-200 md:border-l"
                }`}
              >
                <Icon className="mb-4 size-7 stroke-[1.6]" />
                <p className="text-xs text-neutral-500">{eyebrow}</p>
                <h2 className="mt-1 text-base font-semibold">{title}</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
            <div>
              <p className="section-label">How I work</p>
              <h2 className="mt-4 max-w-xs text-2xl font-semibold tracking-tight">
                Technology follows the problem.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {approach.map(({ icon: Icon, title, copy }, i) => (
                <article key={title} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 stroke-[1.6]" />
                    <span className="font-mono text-[10px] text-neutral-400">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-8 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b py-12 lg:grid-cols-[1fr_2fr] lg:py-16">
          <p className="section-label">About</p>

          <div className="max-w-2xl">
            <h2 className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              My path into software started with solving problems outside of
              software.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Customer-facing and operational roles taught me to clarify vague
              requirements, understand constraints, coordinate moving parts,
              and stay accountable for the outcome. I bring that same approach
              to software: understand what needs to change, model the system,
              then choose the technology that supports the solution.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-8 py-12 lg:py-14"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="section-label">Experience</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                A track record of disciplined problem solving.
              </h2>
            </div>
            <Activity className="hidden size-6 stroke-[1.5] sm:block" />
          </div>

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
        </section>
      </div>

      <footer id="contact" className="scroll-mt-8 border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <h2 className="max-w-md text-4xl leading-[1.05] font-semibold tracking-tight">
                Let&apos;s build something
                <br />
                useful.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-600">
                I&apos;m open to software engineering, application development,
                technical systems, and automation opportunities.
              </p>
            </div>

            <LinkButton href="https://www.linkedin.com/in/daniel-fernandez-tech/">
              Let&apos;s connect <ArrowRight className="size-4" />
            </LinkButton>
          </div>

          <div className="mt-12 flex flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-xs text-neutral-500">
              © 2026 Daniel Fernandez. All rights reserved.
            </p>

            <div className="flex gap-7">
              <a
                href="https://github.com/danielFernandezDj?tab=repositories"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Github
                <GitBranch className="size-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/daniel-fernandez-tech/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Linkedin
                <BriefcaseBusiness className="size-5" />
              </a>

              <a
                href="mailto:danielfernandez.tech@gmail.com"
                aria-label="Email"
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
