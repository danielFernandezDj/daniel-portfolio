import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Globe,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  MoveRight,
  PanelsTopLeft,
  UserRound,
} from "lucide-react"

import { AbstractPortrait, PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const strengths = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    body: "Python, TypeScript, Next.js",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    body: "I turn ideas into functional and scalable solutions.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    body: "Always exploring new tools and improving my craft.",
  },
  {
    icon: Globe,
    title: "Based in Texas, USA",
    body: "Open to remote opportunities worldwide.",
  },
]

const techStack = [
  "TypeScript",
  "Next.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Supabase",
  "Docker",
  "Git",
]

const projects = [
  {
    title: "Akasha Seed",
    description:
      "AI-powered workspace for capturing ideas, notes, and insights. Built with Next.js, Supabase, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    accent: "from-cyan-500/25 via-emerald-400/10 to-transparent",
  },
  {
    title: "Finance Calculator",
    description:
      "Financial calculator for vehicle payments with trade-in logic, interest rates, and amortization schedules.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "from-slate-400/20 via-cyan-400/10 to-transparent",
  },
  {
    title: "Water Business CRM",
    description:
      "CRM system for managing customers, appointments, and subscriptions for a water treatment business.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    accent: "from-emerald-400/20 via-cyan-500/10 to-transparent",
  },
]

const motivations = [
  "Solving meaningful problems",
  "Building with purpose and impact",
  "Creating clean and maintainable code",
  "Learning and sharing knowledge",
]

export default function Page() {
  return (
    <PortfolioShell active="Home">
      <section
        id="home"
        className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-10"
      >
        <div className="max-w-[510px] pt-2 sm:pt-5 lg:pt-9">
          <p className="mb-5 text-[1.55rem] font-semibold text-cyan-400 sm:mb-6 sm:text-[2rem]">
            Hello, I&apos;m Daniel 👋
          </p>
          <h1 className="max-w-[14ch] text-[2.7rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.6rem] lg:text-[4.35rem]">
            I build scalable web applications that solve{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              real problems.
            </span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-8 text-white/74 sm:mt-7 sm:text-[1.02rem]">
            Full-Stack Developer with a passion for clean code, great user
            experiences, and building solutions that make an impact.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button className="h-11 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 text-[0.96rem] font-semibold text-[#031016] hover:opacity-92 sm:h-12 sm:w-auto sm:px-7">
              View My Work
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 w-full rounded-xl border-white/14 bg-white/3 px-6 text-[0.96rem] text-white hover:bg-white/8 sm:h-12 sm:w-auto sm:px-7"
            >
              Get In Touch
              <MessageCircle className="size-4" />
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-5 text-white/88">
            <Link href="#" className="transition-colors hover:text-cyan-300">
              <PanelsTopLeft className="size-5" />
            </Link>
            <Link href="#" className="transition-colors hover:text-cyan-300">
              <UserRound className="size-5" />
            </Link>
            <Link href="#" className="transition-colors hover:text-cyan-300">
              <Mail className="size-5" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <AbstractPortrait className="min-h-[300px] sm:min-h-[420px]" />

          <div className="relative mt-4 w-full rounded-2xl border border-white/10 bg-[#0b1118]/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6 lg:absolute lg:top-10 lg:right-0 lg:mt-0 lg:max-w-[290px] lg:p-7">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-7">
              {strengths.map(({ icon: Icon, title, body }) => (
                <div key={title} className="grid grid-cols-[30px_1fr] gap-4">
                  <Icon className="mt-1 size-5 text-cyan-400" />
                  <div>
                    <h2 className="text-[1.02rem] font-medium text-white">
                      {title}
                    </h2>
                    <p className="mt-1 text-[0.95rem] leading-7 text-white/64">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-4 sm:-mt-3 lg:-mt-5">
        <div className="rounded-2xl border border-white/10 bg-[#0c1219]/95 px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur sm:px-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="min-w-[112px] text-lg font-semibold">
              Tech Stack
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-sm text-white/84 sm:gap-x-8 sm:text-[1rem]">
              {techStack.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-md bg-white/7 text-[0.82rem] font-semibold text-cyan-300">
                    {item.slice(0, 2)}
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <h2 className="text-[1.8rem] font-semibold tracking-tight sm:text-[2rem]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            View all projects
            <MoveRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div
                  className={`relative h-[148px] w-full overflow-hidden rounded-xl border border-white/7 bg-[#091018] sm:w-[126px] sm:shrink-0 ${index === 1 ? "hidden sm:block" : ""}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
                  />
                  <div className="absolute inset-x-3 top-4 h-3 rounded-full bg-white/10" />
                  <div className="absolute inset-x-4 top-10 grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, gridIndex) => (
                      <div
                        key={gridIndex}
                        className="aspect-square rounded-md bg-white/8"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 h-6 rounded-md bg-cyan-400/24" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.35rem] font-medium tracking-tight text-white sm:text-[1.55rem]">
                      {project.title}
                    </h3>
                    <ExternalLink className="mt-1 size-5 shrink-0 text-white/70" />
                  </div>
                  <p className="mt-3 text-[0.96rem] leading-7 text-white/66">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 text-[0.78rem] text-white/72"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="grid gap-8 border-t border-white/8 py-7 text-white/72 lg:grid-cols-4 lg:gap-10"
      >
        <div>
          <h2 className="text-[1.45rem] font-semibold text-white sm:text-[1.65rem]">
            About Me
          </h2>
          <p className="mt-4 text-sm leading-8 sm:text-[0.98rem]">
            I&apos;m a developer who enjoys building practical, user-focused
            applications. I care about performance, clean code, and continuous
            improvement.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-[1rem] font-medium text-cyan-400 hover:text-cyan-300"
          >
            Learn more about me
            <MoveRight className="size-4" />
          </Link>
        </div>

        <div id="experience">
          <h2 className="text-[1.45rem] font-semibold text-white sm:text-[1.65rem]">
            What Drives Me
          </h2>
          <div className="mt-4 space-y-4">
            {motivations.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 size-2 rounded-full bg-cyan-400" />
                <p className="text-sm sm:text-[0.98rem]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[1.45rem] font-semibold text-white sm:text-[1.65rem]">
            Testimonials
          </h2>
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="text-4xl leading-none text-white/28">“</div>
            <p className="mt-2 text-sm leading-7 sm:text-[0.98rem]">
              Daniel is a proactive developer who delivers high-quality work and
              communicates clearly. A great teammate and problem solver.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-sm font-bold text-[#041016]">
                EG
              </div>
              <div>
                <div className="font-semibold text-white">Esteban G.</div>
                <div className="text-sm text-white/58">
                  CEO at TG Water Systems
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[1.45rem] font-semibold text-white sm:text-[1.65rem]">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-sm leading-8 sm:text-[0.98rem]">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-cyan-400" />
              <span className="text-sm break-all sm:text-[0.98rem] sm:break-normal">
                daniel.fernandez.dev@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-400" />
              <span className="text-sm sm:text-[0.98rem]">
                Odessa / Midland, Texas, USA
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-full flex flex-col gap-4 border-t border-white/8 pt-5 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Daniel Fern&aacute;ndez. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="size-4" />
            <span>Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </PortfolioShell>
  )
}
