import Image from "next/image"
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CircleDot,
  Code2,
  Container,
  Database,
  GitBranch,
  GitPullRequest,
  Globe2,
  Mail,
  Network,
  ShieldCheck,
  Calculator,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe2,
    eyebrow: "UI automation",
    title: "Playwright",
    copy: "Reliable browser coverage for critical user journeys.",
  },
  {
    icon: Network,
    eyebrow: "API testing",
    title: "REST APIs · Postman",
    copy: "Contract and response validation across service boundaries.",
  },
  {
    icon: Database,
    eyebrow: "Data validation",
    title: "SQL · PostgreSQL",
    copy: "Database assertions that verify system behavior end to end.",
  },
  {
    icon: Code2,
    eyebrow: "Test engineering",
    title: "TypeScript · Jest",
    copy: "Maintainable suites built from reusable test utilities.",
  },
  {
    icon: GitPullRequest,
    eyebrow: "CI/CD",
    title: "GitHub Actions",
    copy: "Automated quality gates that protect every release.",
  },
]

const workflow = [
  { icon: CircleDot, title: "User action", tool: "Test scenario" },
  { icon: Globe2, title: "UI testing", tool: "Playwright" },
  { icon: Network, title: "API validation", tool: "Postman" },
  { icon: Database, title: "Data validation", tool: "SQL" },
  { icon: Container, title: "CI/CD pipeline", tool: "GitHub Actions" },
  { icon: ShieldCheck, title: "Release", tool: "Quality gate" },
]

const projects = [
  {
    title: "Dealer Payment Calculator",
    description:
      "A production-deployed financial calculator used to model vehicle payments, trade equity, APR, taxes, fees, and amortization.",
    tags: ["Next.js", "TypeScript", "Jest"],
    preview: "https://dealer-monthly-payment-calculator.vercel.app",
    automation: [
      "Calculation accuracy",
      "Boundary cases",
      "Input validation",
      "Regression protection",
    ],
    link1: "https://dealer-monthly-payment-calculator.vercel.app",
    link2:
      "https://github.com/danielFernandezDj/dealer-monthly-payment-calculator.git",
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
            href="../Daniel-Fernandez-CV.pdf"
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
              Software Test Automation Engineer
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">
              Building reliable
              <br />
              automation for
              <br />
              every release.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
              I build reliable test automation that catches regressions early
              and gives teams confidence to release.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span>UI</span>
              <span>•</span>
              <span>API</span>
              <span>•</span>
              <span>Data</span>
              <span>•</span>
              <span>CI/CD</span>
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
          <p className="section-label">Automation toolkit</p>
          <div className="mt-8 grid gap-x-0 gap-y-9 md:grid-cols-3">
            {services.map(({ icon: Icon, eyebrow, title, copy }, i) => (
              <article
                key={title}
                className={`md:px-8 ${i % 3 === 0 ? "md:pl-0" : "border-neutral-200 md:border-l"}`}
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

          <section className="pt-8 lg:pt-8">
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              One connected validation path—from the first user action to a
              confident release.
            </p>
            <div className="workflow-grid mt-5">
              {workflow.map(({ icon: Icon, title, tool }, i) => (
                <article key={title} className="workflow-step">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 stroke-[1.6]" />
                    <span className="font-mono text-[10px] text-neutral-400">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-8 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-neutral-500">{tool}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="grid gap-8 border-b py-12 lg:grid-cols-[1fr_2fr] lg:py-16">
          <p className="section-label">About</p>
          <div className="max-w-2xl">
            <h2 className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              I approach quality as an engineering problem.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              I study how systems behave, trace failures across layers, and turn
              repetitive verification into reliable automation. My focus is
              building clear, maintainable test coverage that finds risk early
              and gives teams confidence to ship.
            </p>
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
          <div className="mt-8 grid gap-10 md:gap-6">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="aspect-[1.1] overflow-hidden rounded-md border bg-neutral-100 p-2">
                  <iframe
                    src={project.preview}
                    loading="lazy"
                    className="h-full w-full rounded-2xl border"
                  ></iframe>
                </div>
                {/* <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <div className="mt-5 flex items-start justify-between">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <Calculator className="size-5" />
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>
                {/* </a> */}
                <div className="mt-5 border-t pt-5">
                  <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    Automation highlights
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {project.automation.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <Check className="size-3.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="my-5 flex gap-6">
                  <a
                    href={project.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Live App <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View Source <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 py-12 lg:py-14">
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
                Let’s make every release
                <br />
                more reliable.
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                I’m open to test automation and quality engineering
                opportunities.
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
