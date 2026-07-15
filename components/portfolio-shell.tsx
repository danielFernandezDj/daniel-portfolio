import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
]

function PortfolioShell({
  active,
  children,
}: {
  active: "Home" | "About" | "Projects"
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_32%),radial-gradient(circle_at_66%_36%,rgba(16,185,129,0.22),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_1px)] bg-[length:100%_460px]" />

        <div className="relative mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-10 sm:px-8 lg:px-10">
          <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 border-b border-white/8 py-4 sm:gap-6">
            <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-[1.9rem] font-black tracking-[-0.08em] text-transparent sm:text-[2.1rem]">
                DF
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-semibold tracking-tight sm:text-lg">
                  Daniel Fern&aacute;ndez
                </div>
                <div className="truncate text-xs text-white/68 sm:text-sm">
                  Full-Stack Developer
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-[0.95rem] text-white/78 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-white",
                    item.label === active &&
                      "border-b-2 border-cyan-400 pb-2 text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              className="h-10 rounded-xl border border-white/12 bg-white/3 px-4 text-sm text-white hover:bg-white/8 sm:h-11 sm:px-5"
              variant="outline"
            >
              Resume
              <Download className="size-4" />
            </Button>
          </header>

          {children}
        </div>
      </div>
    </main>
  )
}

function AbstractPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px]",
        className
      )}
    >
      <div className="absolute inset-x-[10%] bottom-0 h-[84%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28),rgba(6,182,212,0.14)_38%,transparent_70%)] blur-2xl" />

      <div className="absolute inset-x-[18%] bottom-0 h-[84%] rounded-t-[120px] rounded-b-[24px] bg-[linear-gradient(180deg,#181e27_0%,#090d12_52%,#03070b_100%)] shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:rounded-t-[170px] sm:rounded-b-[30px] lg:rounded-t-[210px] lg:rounded-b-[34px]">
        <div className="absolute inset-x-[12%] top-[9%] h-[38%] rounded-[999px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_38%)] blur-xl" />
        <div className="absolute top-[7%] left-1/2 h-[24%] w-[30%] -translate-x-1/2 rounded-[999px] bg-[#131821]" />
        <div className="absolute top-[20%] left-1/2 h-[18%] w-[18%] -translate-x-1/2 rounded-[999px] bg-[#d4a284]" />
        <div className="absolute top-[33%] left-1/2 h-[17%] w-[11%] -translate-x-1/2 rounded-b-[44px] bg-[#c58e72]" />
        <div className="absolute top-[18%] left-[30%] h-[16%] w-[10%] rotate-[25deg] rounded-[999px] bg-[#141922]" />
        <div className="absolute top-[18%] right-[30%] h-[16%] w-[10%] -rotate-[25deg] rounded-[999px] bg-[#141922]" />
        <div className="absolute top-[43%] left-1/2 h-[52%] w-[58%] -translate-x-1/2 rounded-t-[160px] bg-[linear-gradient(180deg,#10161f_0%,#04080d_100%)]" />
      </div>
    </div>
  )
}

export { AbstractPortrait, PortfolioShell }
