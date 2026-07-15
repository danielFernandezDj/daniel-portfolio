import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Globe,
  Mail,
  MapPin,
  PanelsTopLeft,
  Send,
  UserRound,
  Users,
} from "lucide-react"

import { PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const summaryStats = [
  {
    icon: CalendarDays,
    value: "6+",
    title: "Years of Professional Experience",
  },
  {
    icon: Users,
    value: "4",
    title: "Industries Worked In",
  },
  {
    icon: Code2,
    value: "Tech + Sales",
    title: "Unique Hybrid Background",
  },
  {
    icon: MapPin,
    value: "Odessa, Texas",
    title: "Open to Remote Opportunities",
  },
]

const experiences = [
  {
    company: "TG Water Systems",
    role: "Sales & Water Solutions Specialist",
    description:
      "Specialize in water treatment solutions for residential clients. Conduct in-home water tests, educate homeowners on water quality, close high-ticket sales, and coordinate installations with the team.",
    dates: "Dec 2024 – May 2026",
    location: "Odessa, TX",
    tags: [
      "Consultative Sales",
      "High-Ticket Sales",
      "Water Treatment",
      "Customer Education",
    ],
    badge: "TG",
    accent: "text-cyan-300",
  },
  {
    company: "Lithia Toyota Odessa",
    role: "Sales Consultant",
    description:
      "Help customers find the right vehicle through a consultative sales process. Build relationships, generate leads, present solutions, and close deals while delivering excellent customer service.",
    dates: "May 2026 – Present",
    location: "Odessa, TX",
    tags: [
      "Consultative Sales",
      "Lead Generation",
      "Negotiation",
      "Customer Service",
    ],
    badge: "TY",
    accent: "text-red-300",
  },
  {
    company: "Lowe's Home Improvement",
    role: "Sales Specialist",
    description:
      "Assisted customers with product selection and project planning. Drove sales, maintained product knowledge, and provided solutions to meet customer needs.",
    dates: "2025 – 2026",
    location: "Odessa, TX",
    tags: [
      "Retail Sales",
      "Customer Service",
      "Product Knowledge",
      "Team Collaboration",
    ],
    badge: "LW",
    accent: "text-blue-300",
  },
  {
    company: "Walmart",
    role: "Associate",
    description:
      "Provided excellent customer service, maintained store standards, and supported daily operations across multiple departments.",
    dates: "2022 – 2025",
    location: "Odessa, TX",
    tags: ["Customer Service", "Operations", "Teamwork", "Problem Solving"],
    badge: "WM",
    accent: "text-yellow-300",
  },
  {
    company: "Self-Taught",
    role: "Software Engineering Studies",
    description:
      "Focused on full-stack web development, algorithms, databases, and system design. Built multiple projects to solve real-world problems and sharpen my skills.",
    dates: "Ongoing",
    location: "Online",
    tags: [
      "Full-Stack Development",
      "Problem Solving",
      "Algorithms",
      "Continuous Learning",
    ],
    badge: "SE",
    accent: "text-emerald-300",
  },
]

export default function ExperiencePage() {
  return (
    <PortfolioShell active="Experience">
      <section className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-10 lg:py-10">
        <div className="max-w-[520px] pt-2 sm:pt-5">
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-400 uppercase">
            My Experience
          </p>
          <h1 className="max-w-[10ch] text-[2.8rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[4.35rem]">
            Experience that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              builds solutions.
            </span>
          </h1>
          <p className="mt-6 max-w-[33rem] text-base leading-8 text-white/74 sm:text-[1.02rem]">
            A background that combines sales, customer solutions, and technical
            skills. Every role has helped me develop a problem-solving mindset
            and the ability to deliver value.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="grid gap-0 sm:grid-cols-2">
            {summaryStats.map(({ icon: Icon, value, title }, index) => (
              <div
                key={title}
                className={[
                  "space-y-4 p-5",
                  index > 1 ? "border-t border-white/8" : "",
                  index % 2 === 1 ? "sm:border-l sm:border-white/8" : "",
                ].join(" ")}
              >
                <Icon className="size-7 text-cyan-400" />
                <div className="text-[2.2rem] font-semibold tracking-tight text-cyan-300">
                  {value}
                </div>
                <p className="max-w-[16ch] text-[1rem] leading-8 text-white/74">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="relative space-y-4 pl-0 md:pl-10">
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-white/12 md:block" />

          {experiences.map((item) => (
            <div key={`${item.company}-${item.role}`} className="relative">
              <div className="absolute top-10 left-[9px] hidden size-3 rounded-full border-2 border-cyan-400 bg-[#02070d] md:block" />

              <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-5 lg:p-6">
                <div className="grid gap-5 lg:grid-cols-[132px_1fr_190px] lg:items-start">
                  <div className="flex h-[108px] w-full items-center justify-center rounded-2xl border border-white/8 bg-[#0a1118] sm:h-[124px] lg:w-[124px]">
                    <div
                      className={`text-[2rem] font-black tracking-[-0.06em] ${item.accent}`}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-[1.55rem] font-medium tracking-tight text-cyan-300">
                      {item.role}
                    </h2>
                    <h3 className="mt-1 text-[1.85rem] leading-tight font-medium text-white">
                      {item.company}
                    </h3>
                    <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-8 text-white/68">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 text-[0.78rem] text-white/72"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 lg:pt-1">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-0.5 size-5 shrink-0 text-cyan-400" />
                      <span className="text-[1rem] text-white/82">
                        {item.dates}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      {item.location === "Online" ? (
                        <Globe className="mt-0.5 size-5 shrink-0 text-cyan-400" />
                      ) : (
                        <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-400" />
                      )}
                      <span className="text-[1rem] text-white/82">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0c1219]/95 px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.24)] sm:px-6 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-white/[0.03] p-5 text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <Send className="size-7" />
            </div>
            <div>
              <h2 className="text-[1.5rem] font-semibold text-white sm:text-[1.9rem]">
                Always open to new opportunities
              </h2>
              <p className="mt-2 max-w-[42rem] text-sm leading-7 text-white/68 sm:text-[0.98rem]">
                I&apos;m actively looking for roles where I can contribute,
                learn, and help build products that make a real impact.
              </p>
            </div>
          </div>

          <Button className="h-11 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 text-[0.96rem] font-semibold text-[#031016] hover:opacity-92 sm:w-auto">
            Get In Touch
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <footer
        id="contact"
        className="flex flex-col gap-5 border-t border-white/8 py-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>&copy; 2026 Daniel Fern&aacute;ndez. All rights reserved.</p>
        <div className="flex items-center gap-5 text-white/78">
          <Link href="#" className="transition-colors hover:text-white">
            <PanelsTopLeft className="size-5" />
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            <UserRound className="size-5" />
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            <Mail className="size-5" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>Built with Next.js &amp; Tailwind CSS</span>
          <BriefcaseBusiness className="size-4" />
        </div>
      </footer>
    </PortfolioShell>
  )
}
