import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Puzzle,
  Rocket,
  Shield,
  Users,
  Wrench,
} from "lucide-react"

import { PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const stats = [
  {
    icon: Code2,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: Puzzle,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: Lightbulb,
    value: "1000+",
    label: "Problems Solved",
  },
  {
    icon: Rocket,
    value: "Always",
    label: "Learning",
  },
]

const technicalSkills = [
  { name: "Python", percent: 90, badge: "Py", iconTint: "text-yellow-300" },
  { name: "TypeScript", percent: 85, badge: "TS", iconTint: "text-cyan-300" },
  { name: "JavaScript", percent: 85, badge: "JS", iconTint: "text-yellow-300" },
  { name: "Next.js", percent: 80, badge: "N", iconTint: "text-white" },
  { name: "React", percent: 80, badge: "R", iconTint: "text-cyan-300" },
  { name: "PostgreSQL", percent: 90, badge: "PG", iconTint: "text-cyan-300" },
  { name: "SQL", percent: 85, badge: "DB", iconTint: "text-white" },
  { name: "Tailwind CSS", percent: 85, badge: "TW", iconTint: "text-cyan-300" },
  { name: "Supabase", percent: 80, badge: "SB", iconTint: "text-emerald-300" },
  { name: "Git & GitHub", percent: 85, badge: "GT", iconTint: "text-white" },
]

const tools = [
  "Docker",
  "VS Code",
  "Postman",
  "Figma",
  "Linux",
  "AWS",
  "Vercel",
  "Jest",
  "Playwright",
  "ESLint",
  "Prettier",
  "Stripe",
]

const softSkills = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    body: "I turn complex issues into simple solutions.",
  },
  {
    icon: Users,
    title: "Communication",
    body: "I explain technical ideas clearly and effectively.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Collaboration",
    body: "I work well with teams to achieve shared goals.",
  },
  {
    icon: Rocket,
    title: "Adaptability",
    body: "I learn fast and adapt to new challenges.",
  },
  {
    icon: Shield,
    title: "Ownership",
    body: "I take initiative and deliver results.",
  },
]

function SkillMeter({
  name,
  percent,
  badge,
  iconTint,
}: {
  name: string
  percent: number
  badge: string
  iconTint: string
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <div
          className={`flex size-10 items-center justify-center rounded-lg bg-white/6 text-sm font-semibold ${iconTint}`}
        >
          {badge}
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
          <span className="truncate text-[1rem] text-white">{name}</span>
          <span className="text-sm text-white/84">{percent}%</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="h-[5px] w-7 rounded-full bg-white/16" />
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <PortfolioShell active="Skills">
      <section className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10 lg:py-10">
        <div className="max-w-[520px] pt-2 sm:pt-5">
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-400 uppercase">
            My Skills
          </p>
          <h1 className="max-w-[10ch] text-[2.8rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[4.35rem]">
            The skills I use to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              build and solve.
            </span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-8 text-white/74 sm:text-[1.02rem]">
            I combine full-stack development, problem solving, and a strong
            business mindset to build solutions that are efficient, scalable,
            and user-focused.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-4 border-white/8 text-center xl:border-r xl:last:border-r-0"
              >
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/8 p-4 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                  <Icon className="size-7" />
                </div>
                <div className="text-[2.3rem] font-semibold tracking-tight text-cyan-300">
                  {value}
                </div>
                <div className="text-[0.98rem] text-white/78">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 py-8 lg:grid-cols-[1.22fr_0.94fr]">
        <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-cyan-400/8 p-2 text-cyan-400">
              <Database className="size-5" />
            </div>
            <h2 className="text-[1.55rem] font-semibold text-white sm:text-[1.8rem]">
              Technical Skills
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {technicalSkills.map((skill) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-white/56">
            <BadgeCheck className="mt-0.5 size-4 shrink-0 text-white/42" />
            <p>
              Proficiency levels are based on hands-on experience and continuous
              learning.
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-cyan-400/8 p-2 text-cyan-400">
              <Wrench className="size-5" />
            </div>
            <h2 className="text-[1.55rem] font-semibold text-white sm:text-[1.8rem]">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-white/6 text-sm font-semibold text-cyan-300">
                  {tool.slice(0, index === 1 ? 2 : 3)}
                </div>
                <div className="text-[1rem] text-white/88">{tool}</div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-400/8 p-2 text-cyan-400">
            <GraduationCap className="size-5" />
          </div>
          <h2 className="text-[1.55rem] font-semibold text-white sm:text-[1.8rem]">
            Soft Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {softSkills.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border-white/8 xl:border-r xl:pr-5 xl:last:border-r-0"
            >
              <div className="mb-4 w-fit rounded-lg bg-cyan-400/8 p-2 text-cyan-400">
                <Icon className="size-5" />
              </div>
              <h3 className="text-[1.2rem] font-medium text-white">{title}</h3>
              <p className="mt-2 text-[0.96rem] leading-7 text-white/64">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-cyan-400/28 bg-[#0c1219]/95 px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] sm:px-6 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-white/[0.03] p-5 text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <Rocket className="size-7" />
            </div>
            <div>
              <h2 className="text-[1.5rem] font-semibold text-white sm:text-[1.9rem]">
                I&apos;m always improving and learning new technologies.
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/68 sm:text-[0.98rem]">
                Currently exploring advanced system design, scalability
                patterns, and AI tools.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-11 w-full rounded-xl border-cyan-400/35 bg-cyan-400/8 px-6 text-cyan-300 hover:bg-cyan-400/14 hover:text-cyan-200 sm:w-auto"
          >
            Let&apos;s Build Something
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <div className="py-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          View project work
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </PortfolioShell>
  )
}
