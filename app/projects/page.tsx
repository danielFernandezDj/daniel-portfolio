import Link from "next/link"
import { ArrowRight, Code2, Eye, MoveRight, PanelsTopLeft } from "lucide-react"

import { PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const categories = ["All Projects", "Full-Stack", "Web Apps", "Tools", "Other"]

const projects = [
  {
    title: "Akasha Seed",
    description:
      "AI-powered workspace for capturing ideas, notes, and insights. Built with Next.js, Supabase, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API"],
    accent: "from-cyan-500/25 via-emerald-400/10 to-transparent",
    featured: true,
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
    tags: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL", "Stripe"],
    accent: "from-emerald-400/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "TaskFlow",
    description:
      "A productivity app to manage tasks, projects, and team collaboration efficiently.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    accent: "from-cyan-400/18 via-slate-400/10 to-transparent",
  },
  {
    title: "NoteHub",
    description:
      "A clean notes application with folders, rich text editing, and real-time search.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Local Storage"],
    accent: "from-emerald-400/16 via-cyan-400/10 to-transparent",
  },
  {
    title: "API Toolkit",
    description:
      "A collection of developer tools for testing APIs, formatting JSON, and generating code snippets.",
    tags: ["TypeScript", "Vanilla JS", "Tailwind CSS"],
    accent: "from-slate-300/16 via-cyan-500/10 to-transparent",
  },
]

function ProjectPreview({
  accent,
  variant,
}: {
  accent: string
  variant: number
}) {
  return (
    <div className="relative h-[228px] w-full overflow-hidden rounded-xl border border-white/7 bg-[#091018] sm:h-[240px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-x-4 top-4 h-4 rounded-full bg-white/10" />
      {variant % 3 === 0 ? (
        <>
          <div className="absolute top-[18%] left-1/2 h-[24%] w-[44%] -translate-x-1/2 rounded-[28px] border border-cyan-400/30 bg-white/4" />
          <div className="absolute inset-x-4 top-[48%] grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-9 rounded-lg border border-white/6 bg-white/7"
              />
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-4 h-7 rounded-lg bg-cyan-400/24" />
        </>
      ) : variant % 3 === 1 ? (
        <>
          <div className="absolute inset-x-5 top-[20%] space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-white/6 bg-white/6 px-3 py-2"
              >
                <div className="h-2.5 w-[38%] rounded-full bg-white/16" />
                <div className="h-2.5 w-[18%] rounded-full bg-cyan-400/26" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-[20%] bottom-4 left-4 w-9 rounded-lg bg-white/5" />
          <div className="absolute top-[20%] right-4 left-[22%] h-[22%] rounded-xl border border-white/6 bg-white/7" />
          <div className="absolute top-[48%] right-4 left-[22%] grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-11 rounded-lg border border-white/6 bg-white/5"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <PortfolioShell active="Projects">
      <section className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[1fr_0.92fr] lg:items-end lg:gap-12 lg:py-10">
        <div className="max-w-[540px] pt-2 sm:pt-5">
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-400 uppercase">
            My Work
          </p>
          <h1 className="max-w-[11ch] text-[2.8rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.3rem]">
            Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              I&apos;ve built
            </span>
          </h1>
          <p className="mt-6 max-w-[33rem] text-base leading-8 text-white/74 sm:text-[1.02rem]">
            A selection of projects that showcase my skills in building scalable
            web applications, solving real-world problems, and delivering great
            user experiences.
          </p>

          <Button
            variant="outline"
            className="mt-8 h-11 w-full rounded-xl border-white/14 bg-white/3 px-6 text-[0.96rem] text-white hover:bg-white/8 sm:w-auto"
          >
            <PanelsTopLeft className="size-4" />
            Check out more on GitHub
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="lg:pb-9">
          <div className="flex flex-wrap gap-3 border-b border-white/8 pb-4 sm:gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={
                  index === 0
                    ? "rounded-full border border-cyan-400/60 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-white"
                    : "rounded-full px-3 py-2 text-sm text-white/76 transition-colors hover:text-white sm:px-4"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-5 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-5"
            >
              <div className="grid gap-4 sm:grid-cols-[190px_1fr]">
                <ProjectPreview accent={project.accent} variant={index} />

                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-[1.45rem] font-medium tracking-tight text-white sm:text-[1.7rem]">
                      {project.title}
                    </h2>
                    {project.featured ? (
                      <span className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[0.7rem] text-cyan-300">
                        Featured
                      </span>
                    ) : null}
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

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      <Eye className="size-4" />
                      Live Demo
                    </Link>
                    <div className="flex items-center gap-4 text-white/78">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[0.95rem] transition-colors hover:text-white"
                      >
                        <Code2 className="size-4" />
                        Code
                      </Link>
                      <Link
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        <PanelsTopLeft className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0c1219]/95 px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] sm:px-6 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/8 p-3 text-cyan-400">
              <Code2 className="size-6" />
            </div>
            <div>
              <h2 className="text-[1.5rem] font-semibold text-white sm:text-[1.8rem]">
                Interested in working together?
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/68 sm:text-[0.98rem]">
                I&apos;m always open to discussing new projects and
                opportunities.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-11 w-full rounded-xl border-cyan-400/35 bg-cyan-400/8 px-6 text-cyan-300 hover:bg-cyan-400/14 hover:text-cyan-200 sm:w-auto"
          >
            Get In Touch
            <MoveRight className="size-4" />
          </Button>
        </div>
      </section>
    </PortfolioShell>
  )
}
