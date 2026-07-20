import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Box, Code2, SquareTerminal } from "lucide-react"

import { ProjectCard } from "@/components/home/project-card"
import { SectionReveal } from "@/components/home/section-reveal"
import { SiteHeader } from "@/components/home/site-header"

const buildColumns = [
  {
    icon: Code2,
    title: "AI Products",
    description: "Intelligent tools that help people learn, think, and create.",
  },
  {
    icon: Box,
    title: "Business Software",
    description: "Web applications that automate workflows and drive results.",
  },
  {
    icon: SquareTerminal,
    title: "Internal Tools",
    description: "Systems and utilities that improve operations and save time.",
  },
]

const selectedWork = [
  {
    title: "Akasha Seed",
    description:
      "AI workspace that helps you capture ideas, notes, and insights. Built with Next.js, Supabase, and Tailwind CSS.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    imageSrc: "/images/project-akasha.png",
    imageAlt: "Akasha Seed project preview",
    projectHref: "https://github.com/danfernandezdev",
    githubHref: "https://github.com/danfernandezdev",
  },
  {
    title: "Finance Calculator",
    description:
      "Financial calculator for vehicle payments with trade-in logic, interest rates, and amortization schedules.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageSrc: "/images/project-finance.png",
    imageAlt: "Finance Calculator project preview",
    projectHref: "https://github.com/danfernandezdev",
    githubHref: "https://github.com/danfernandezdev",
  },
  {
    title: "Water Business CRM",
    description:
      "CRM system for managing customers, appointments, subscriptions, and service visits for a water treatment business.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    imageSrc: "/images/project-water.png",
    imageAlt: "Water Business CRM project preview",
    projectHref: "https://github.com/danfernandezdev",
    githubHref: "https://github.com/danfernandezdev",
  },
]

const techStack = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Docker",
  "Git",
]

const experience = [
  {
    period: "Dec 2024 – Present",
    title: "Independent Software Engineer",
    company: "TG Water Systems",
    description:
      "Lead in-home water test software, customer workflow tools, and tailored operational solutions for a local service business.",
  },
  {
    period: "May 2023 – Dec 2024",
    title: "Sales Consultant",
    company: "Lithia Toyota Odessa",
    description:
      "Built relationships, generated leads, and delivered a high standard of client communication and follow-through.",
  },
  {
    period: "2022 – 2023",
    title: "Sales Specialist",
    company: "Lowe's Home Improvement",
    description:
      "Assisted customers with product planning and solutions while maintaining strong product knowledge across departments.",
  },
  {
    period: "2019 – 2022",
    title: "Associate",
    company: "Walmart",
    description:
      "Delivered customer service, maintained store standards, and supported reliable day-to-day operations.",
  },
]

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Fernandez",
  jobTitle: "Full-Stack Developer",
  email: "mailto:daniel.fernandez.dev@gmail.com",
  url: "https://danielfernandez.dev",
  sameAs: [
    "https://github.com/danfernandezdev",
    "https://www.linkedin.com/in/daniel-fernandez-tech",
  ],
  knowsAbout: [
    "Python",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "React",
    "Supabase",
  ],
}

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-white text-black">
      <SiteHeader />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <section className="grid min-h-[calc(100vh-88px)] items-end gap-12 border-b border-neutral-200 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="pb-6 lg:pb-12">
            <div className="text-[0.95rem] font-medium tracking-[0.04em] text-neutral-500 uppercase">
              Full-stack developer
            </div>
            <div className="mt-10 space-y-8">
              <HeroCopy />
              <HeroParagraph />
              <HeroButtons />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-[1rem] text-neutral-700 md:gap-6">
              {techStack.slice(0, 4).map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4 md:gap-6">
                  <span>{item}</span>
                  {index < 3 ? <span className="text-neutral-300">•</span> : null}
                </span>
              ))}
            </div>
          </div>

          <HeroPortrait />
        </section>

        <SectionReveal className="border-b border-neutral-200 py-12 md:py-16">
          <div className="text-[0.9rem] font-medium tracking-[0.04em] text-neutral-500 uppercase">
            What I Build
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {buildColumns.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="border-l border-neutral-200 pl-6 first:border-l-0 first:pl-0 md:pl-8"
              >
                <Icon className="size-6 text-black" />
                <h2 className="mt-6 text-[2rem] font-semibold tracking-[-0.04em]">
                  {title}
                </h2>
                <p className="mt-4 max-w-[24ch] text-[1.02rem] leading-8 text-neutral-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="selected-work" className="border-b border-neutral-200 py-12 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-[0.9rem] font-medium tracking-[0.04em] text-neutral-500 uppercase">
              Selected Work
            </div>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-[1rem] font-medium text-black"
            >
              View all projects
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {selectedWork.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="border-b border-neutral-200 py-12 md:py-16">
          <div className="text-[0.9rem] font-medium tracking-[0.04em] text-neutral-500 uppercase">
            Tech Stack
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-[1.35rem] tracking-[-0.03em] md:text-[1.6rem]">
            {techStack.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-6">
                <span>{item}</span>
                {index < techStack.length - 1 ? (
                  <span className="text-neutral-300">•</span>
                ) : null}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="experience" className="border-b border-neutral-200 py-12 md:py-16">
          <div className="text-[0.9rem] font-medium tracking-[0.04em] text-neutral-500 uppercase">
            Experience
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[170px_1px_1fr] md:gap-x-10">
            <div className="hidden md:block" />
            <div className="hidden bg-neutral-200 md:block" />
            <div className="space-y-12">
              {experience.map((item) => (
                <div key={`${item.company}-${item.period}`} className="grid gap-6 md:grid-cols-[170px_1px_1fr] md:gap-x-10">
                  <div className="text-[0.98rem] text-neutral-600">{item.period}</div>
                  <div className="relative hidden md:block">
                    <div className="absolute left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-black" />
                  </div>
                  <article>
                    <h3 className="text-[1.8rem] font-semibold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-1 text-[1.12rem] text-neutral-700">{item.company}</p>
                    <p className="mt-3 max-w-[60ch] text-[1rem] leading-8 text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="mailto:daniel.fernandez.dev@gmail.com?subject=Full%20Experience"
              className="group inline-flex items-center gap-2 text-[1rem] font-medium text-black"
            >
              View full experience
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal id="contact" className="py-12 md:py-16">
          <div className="flex flex-col gap-10 border-b border-neutral-200 pb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-[10ch] text-[3rem] leading-[0.96] font-semibold tracking-[-0.06em] md:text-[4rem]">
                Let&apos;s build something great together.
              </h2>
              <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-8 text-neutral-600">
                I&apos;m always open to discussing new projects and opportunities.
              </p>
            </div>

            <Link
              href="mailto:daniel.fernandez.dev@gmail.com?subject=Let%27s%20connect"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-[1rem] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Let&apos;s connect
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <footer className="flex flex-col gap-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
            <div>
              <p>&copy; 2026 Daniel Fern&aacute;ndez. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6">
              <Link href="https://github.com/danfernandezdev" className="footer-link">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/daniel-fernandez-tech" className="footer-link">
                LinkedIn
              </Link>
              <Link href="mailto:daniel.fernandez.dev@gmail.com" className="footer-link">
                Email
              </Link>
              <Link href="mailto:daniel.fernandez.dev@gmail.com?subject=Resume%20Request" className="footer-link">
                Resume
              </Link>
            </div>
          </footer>
        </SectionReveal>
      </div>
    </main>
  )
}

function HeroCopy() {
  return (
    <SectionReveal className="!opacity-100 !translate-y-0" delay={0}>
      <h1 className="max-w-[8ch] text-[4rem] leading-[0.92] font-semibold tracking-[-0.08em] md:text-[5.8rem] lg:text-[6.4rem]">
        Building software that solves real problems.
      </h1>
    </SectionReveal>
  )
}

function HeroParagraph() {
  return (
    <SectionReveal className="!opacity-100 !translate-y-0" delay={0.12}>
      <p className="max-w-[26ch] text-[1.15rem] leading-9 text-neutral-600 md:text-[1.2rem]">
        I build scalable web applications with clean code and great user experiences.
      </p>
    </SectionReveal>
  )
}

function HeroButtons() {
  return (
    <SectionReveal className="!opacity-100 !translate-y-0" delay={0.18}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="#selected-work"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-[1rem] font-medium text-white transition-colors hover:bg-neutral-800"
        >
          View my work
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <Link
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl px-2 py-4 text-[1rem] font-medium text-black"
        >
          Get in touch
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </SectionReveal>
  )
}

function HeroPortrait() {
  return (
    <SectionReveal className="!opacity-100 !translate-y-0" delay={0}>
      <div className="relative overflow-hidden rounded-[32px] bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.9)_18%,rgba(255,255,255,0)_34%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[26%] bg-white" />
        <Image
          src="/images/portrait-source.png"
          alt="Black and white portrait of Daniel Fernandez"
          width={1200}
          height={1200}
          priority
          className="h-auto w-full grayscale object-cover object-[74%_50%]"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>
    </SectionReveal>
  )
}
