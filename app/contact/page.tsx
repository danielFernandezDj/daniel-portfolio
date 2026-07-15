import Link from "next/link"
import {
  ArrowUp,
  Check,
  Clock3,
  Globe,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Send,
  User,
  UserRound,
} from "lucide-react"

import { PortfolioShell } from "@/components/portfolio-shell"
import { Button } from "@/components/ui/button"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "daniel.fernandez.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(786) 307-4352",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Odessa / Midland, Texas, USA",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "Open to new opportunities",
  },
]

const socialLinks = [
  {
    icon: PanelsTopLeft,
    title: "GitHub",
    value: "github.com/danfernandezdev",
  },
  {
    icon: User,
    title: "LinkedIn",
    value: "linkedin.com/in/daniel-fernandez-tech",
  },
  {
    icon: MessageCircle,
    title: "Twitter/X",
    value: "@danieldev_",
  },
  {
    icon: Mail,
    title: "Email",
    value: "daniel.fernandez.dev@gmail.com",
  },
]

const services = [
  "Full-Stack Web Development",
  "API Development & Integration",
  "Database Design & Optimization",
  "Problem Solving & Consulting",
  "Technical Discussions",
  "Open Source Collaboration",
]

function InputLike({
  icon: Icon,
  placeholder,
  className = "",
  multiline = false,
}: {
  icon: React.ComponentType<{ className?: string }>
  placeholder: string
  className?: string
  multiline?: boolean
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-white/10 bg-[#0a1118] px-4 py-4 text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] ${className}`}
    >
      <Icon className="mt-0.5 size-5 shrink-0 text-white/62" />
      <span className={multiline ? "pt-0.5" : ""}>{placeholder}</span>
    </div>
  )
}

export default function ContactPage() {
  return (
    <PortfolioShell active="Contact">
      <section className="grid gap-8 border-b border-white/8 py-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-10 lg:py-10">
        <div className="max-w-[540px] pt-2 sm:pt-5">
          <p className="mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-400 uppercase">
            Get In Touch
          </p>
          <h1 className="max-w-[10ch] text-[2.8rem] leading-[0.96] font-bold tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[4.35rem]">
            Let&apos;s build{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              something great
            </span>{" "}
            together.
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-8 text-white/74 sm:text-[1.02rem]">
            I&apos;m always open to discussing new opportunities,
            collaborations, or interesting projects. Feel free to reach out!
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="border-white/8 xl:border-r xl:pr-5 xl:last:border-r-0"
              >
                <Icon className="mb-4 size-6 text-cyan-400" />
                <div className="text-[1.2rem] font-medium text-white">
                  {label}
                </div>
                <div className="mt-2 text-[0.95rem] leading-7 text-white/62">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <article className="rounded-2xl border border-white/10 bg-[#0c1219]/94 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:p-6">
          <h2 className="text-[1.85rem] font-semibold text-white">
            Send Me a Message
          </h2>
          <p className="mt-2 text-[1rem] text-white/66">
            I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InputLike icon={UserRound} placeholder="Your Name" />
            <InputLike icon={Mail} placeholder="Your Email" />
          </div>

          <div className="mt-4">
            <InputLike icon={Send} placeholder="Subject" />
          </div>

          <div className="mt-4">
            <InputLike
              icon={MessageCircle}
              placeholder="Your Message"
              multiline
              className="min-h-[152px]"
            />
          </div>

          <Button className="mt-4 h-12 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 text-[0.98rem] font-semibold text-[#031016] hover:opacity-92">
            Send Message
            <Send className="size-4" />
          </Button>

          <div className="mt-5 flex items-start gap-2 text-sm text-white/52">
            <Lock className="mt-0.5 size-4 shrink-0" />
            <p>Your information is safe with me. No spam, ever.</p>
          </div>
        </article>
      </section>

      <section className="py-8">
        <div className="rounded-2xl border border-white/10 bg-[#0c1219]/94 px-4 py-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:px-6 sm:py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="min-w-[270px]">
              <h2 className="text-[1.7rem] font-semibold text-white">
                Let&apos;s Connect
              </h2>
              <p className="mt-2 text-[0.98rem] leading-7 text-white/62">
                Find me on these platforms or check out my code.
              </p>
            </div>

            <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {socialLinks.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/6 p-2 text-white">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[1.1rem] font-medium text-white">
                        {title}
                      </div>
                      <div className="mt-1 truncate text-sm text-white/58">
                        {value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0c1219]/94 px-4 py-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:px-6 sm:py-6">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_0.98fr_0.9fr] xl:items-center">
          <div className="xl:border-r xl:border-white/8 xl:pr-8">
            <h2 className="text-[1.7rem] font-semibold text-white">
              What I Can Help With
            </h2>
            <div className="mt-3 h-[2px] w-10 rounded-full bg-cyan-400" />
            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-cyan-400" />
                  <span className="text-[1rem] text-white/76">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_44%)]">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-[38%] left-[14%] h-[30%] w-[20%] rounded-[50%] border border-cyan-400/20" />
              <div className="absolute top-[22%] left-[36%] h-[48%] w-[28%] rounded-[48%] border border-cyan-400/18" />
              <div className="absolute top-[28%] right-[12%] h-[42%] w-[28%] rounded-[52%] border border-cyan-400/16" />
              <div className="absolute bottom-[14%] left-[28%] h-[26%] w-[18%] rounded-[45%] border border-cyan-400/14" />
              <div className="absolute right-[22%] bottom-[18%] h-[20%] w-[14%] rounded-[45%] border border-cyan-400/14" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.45)_1px,transparent_1.8px)] bg-[length:8px_8px] opacity-30" />
            <div className="relative z-10 rounded-full bg-cyan-400/10 p-3 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <MapPin className="size-7" />
            </div>
          </div>

          <div>
            <h2 className="text-[1.8rem] font-semibold text-white">
              Based in Texas, USA
            </h2>
            <p className="mt-4 text-[1rem] leading-8 text-white/68">
              I&apos;m currently based in Odessa / Midland, Texas and open to
              remote opportunities worldwide.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-cyan-400/10 p-3 text-cyan-400">
                  <Globe className="size-6" />
                </div>
                <div>
                  <div className="text-[1.2rem] font-medium text-white">
                    Remote First
                  </div>
                  <p className="mt-2 text-[0.96rem] leading-7 text-white/64">
                    Available to work with teams across any time zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-5 border-t border-white/8 py-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Daniel Fern&aacute;ndez. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <PanelsTopLeft className="size-4" />
          <span>Built with Next.js &amp; Tailwind CSS</span>
          <Mail className="size-4 text-cyan-400" />
        </div>
        <Link
          href="#top"
          className="inline-flex items-center gap-2 text-white/72 transition-colors hover:text-white"
        >
          Back to top
          <ArrowUp className="size-4" />
        </Link>
      </footer>
    </PortfolioShell>
  )
}
