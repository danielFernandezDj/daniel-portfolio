import Link from "next/link"
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Globe,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  Users,
  Waypoints,
} from "lucide-react"

import { AbstractPortrait, PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const facts = [
  {
    icon: BriefcaseBusiness,
    label: "Experience",
    value: "3+ years",
  },
  {
    icon: Waypoints,
    label: "Focus",
    value: "Full-Stack Development",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Texas, USA",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Software Engineering (Self-Taught)",
  },
  {
    icon: Users,
    label: "Working Style",
    value: "Remote-friendly",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "English, Spanish",
  },
]

const drivers = [
  {
    icon: Code2,
    title: "Solving Problems",
    body: "I enjoy breaking down complex problems and building simple, effective solutions.",
  },
  {
    icon: Rocket,
    title: "Building Impact",
    body: "I want my work to make a real difference for users and businesses.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    body: "I’m always learning new tools, practices, and ways to level up my craft.",
  },
  {
    icon: Users,
    title: "Collaboration",
    body: "Great software is built by great teams. I value communication and shared goals.",
  },
]

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Supabase",
  "Docker",
  "Git",
  "Linux",
]

const metrics = [
  {
    icon: CalendarDays,
    value: "3+",
    label: "Years of experience",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Projects completed",
  },
  {
    icon: Lightbulb,
    value: "1000+",
    label: "Problems solved",
  },
  {
    icon: Users,
    value: "10+",
    label: "Happy clients",
  },
  {
    icon: BriefcaseBusiness,
    value: "1000+",
    label: "Hours of coding",
  },
]

export default function AboutPage() {
  return (
    <PortfolioShell active="About">
      <section className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-[540px] pt-2 sm:pt-5 lg:pt-7">
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-400 uppercase">
            About Me
          </p>
          <h1 className="max-w-[11ch] text-[2.65rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4.35rem]">
            I build software that solves{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              real problems.
            </span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-base leading-8 text-white/74 sm:mt-7 sm:text-[1.02rem]">
            I&apos;m a Full-Stack Developer with a passion for building clean,
            scalable, and efficient web applications. I love turning complex
            ideas into simple, intuitive solutions that make an impact.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-white/78 sm:mt-10 sm:text-[0.98rem] lg:grid-cols-1 xl:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400" />
              <span>Odessa / Midland, Texas, USA</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan-400" />
              <span className="break-all sm:break-normal">
                daniel.fernandez.dev@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-cyan-400" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <AbstractPortrait className="min-h-[300px] sm:min-h-[420px] lg:min-h-[520px]" />

          <div className="relative mt-4 w-full rounded-2xl border border-white/10 bg-[#0b1118]/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6 lg:absolute lg:top-9 lg:right-0 lg:mt-0 lg:max-w-[320px]">
            <h2 className="text-[1.6rem] font-semibold text-white sm:text-[1.85rem]">
              Quick Facts
            </h2>
            <div className="mt-3 h-[2px] w-12 rounded-full bg-cyan-400" />

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="grid grid-cols-[26px_1fr] gap-4">
                  <Icon className="mt-1 size-5 text-cyan-400" />
                  <div>
                    <h3 className="text-[1rem] font-medium text-white">
                      {label}
                    </h3>
                    <p className="mt-1 text-[0.96rem] leading-7 text-white/62">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 py-5 lg:grid-cols-[0.9fr_1.12fr_1.12fr]">
        <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <h2 className="text-[1.9rem] font-semibold text-white">My Journey</h2>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-cyan-400" />
          <div className="mt-5 space-y-4 text-[0.98rem] leading-8 text-white/68">
            <p>
              My path into tech started with curiosity and a drive to understand
              how things work. From building projects on my own to solving
              real-world problems, I&apos;ve grown into a developer who enjoys
              continuous learning and delivering value.
            </p>
            <p>
              Before tech, I worked in sales and client solutions, which taught
              me how to listen, communicate, and solve problems that truly
              matter. I bring that same mindset into every line of code I write.
            </p>
            <p>
              Today, I focus on building reliable, performant applications and
              creating experiences that users love.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 h-11 rounded-xl border-cyan-400/35 bg-cyan-400/8 px-5 text-cyan-300 hover:bg-cyan-400/14 hover:text-cyan-200"
          >
            Let&apos;s work together
          </Button>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <h2 className="text-[1.9rem] font-semibold text-white">
            What Drives Me
          </h2>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-cyan-400" />
          <div className="mt-6 grid gap-7 sm:grid-cols-2">
            {drivers.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-[1.35rem] font-medium text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[0.96rem] leading-7 text-white/64">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article
          id="skills"
          className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6"
        >
          <h2 className="text-[1.9rem] font-semibold text-white">Tech Stack</h2>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-cyan-400" />
          <div className="mt-6 grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
            {stack.map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/82">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white/7 text-sm font-semibold text-cyan-300">
                  {item.slice(0, 2)}
                </div>
                <span className="text-[1rem]">{item}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#091018]/92 px-4 py-5 shadow-[0_14px_30px_rgba(0,0,0,0.18)] sm:px-5 sm:py-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                <Icon className="size-5" />
              </div>
              <div>
                <div className="text-[1.7rem] font-semibold tracking-tight text-cyan-300 sm:text-[2rem]">
                  {value}
                </div>
                <div className="text-sm text-white/62 sm:text-[0.98rem]">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Back to home
        </Link>
      </div>
    </PortfolioShell>
  )
}
