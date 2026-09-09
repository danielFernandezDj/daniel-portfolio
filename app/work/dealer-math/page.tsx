import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  GitBranch,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const liveApp =
  "https://dealer-monthly-payment-calculator.vercel.app"
const source =
  "https://github.com/danielFernandezDj/dealer-monthly-payment-calculator.git"

const engineering = [
  {
    icon: Code2,
    title: "Financial logic",
    copy: "TypeScript models the financing rules separately from the visual presentation so the core calculations remain understandable and testable.",
  },
  {
    icon: Database,
    title: "Data model",
    copy: "PostgreSQL and Prisma move calculations beyond temporary UI state and provide a path toward calculation history and future analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    copy: "Automated tests focus on calculation behavior, boundary conditions, input validation, and regression protection around the financial model.",
  },
]

function DealerMathProductPreview() {
  return (
    <div className="overflow-hidden rounded-xl border bg-slate-100 shadow-sm">
      <div className="flex items-center justify-between bg-blue-950 px-5 py-4 text-white">
        <div>
          <p className="text-xs text-blue-200">Dealer Math</p>
          <p className="font-semibold">Dealer Payment Calculator</p>
        </div>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs">
          Production deployed
        </span>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1fr_0.9fr] lg:p-7">
        <div className="space-y-3">
          {[
            ["Vehicle Price", "$35,000"],
            ["Down Payment", "$5,000"],
            ["Current Payoff", "$10,000"],
            ["Dealer Trade Offer", "$8,000"],
            ["Sales Tax Rate", "6.25%"],
            ["Dealer Fees", "$225"],
            ["APR", "7.99%"],
          ].map(([label, value], i) => (
            <div key={label} className="rounded-lg border bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium tracking-wide text-neutral-400 uppercase">
                    0{i + 1}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">{label}</p>
                </div>
                <p className="font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-xs font-medium tracking-wide text-red-600 uppercase">
              Trade position
            </p>
            <p className="mt-2 text-3xl font-semibold text-red-700">-$2,000</p>
            <p className="mt-2 text-xs leading-5 text-red-700/70">
              Negative equity becomes part of the financing model instead of
              disappearing inside the monthly payment.
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between rounded-lg bg-white p-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                Amount financed
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">
                $34,412
              </p>
            </div>

            <div className="mt-12 border-t pt-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-neutral-500">72 months</p>
                  <p className="mt-1 text-2xl font-semibold">$603 / mo</p>
                </div>
                <p className="text-xs text-neutral-400">7.99% APR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DealerMathCaseStudy() {
  return (
    <main>
      <header className="border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeft className="size-4" />
            Daniel Fernandez
          </Link>

          <div className="flex items-center gap-5">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm sm:inline-flex"
            >
              Source <GitBranch className="size-4" />
            </a>

            <a href={liveApp} target="_blank" rel="noopener noreferrer">
              <Button>
                Launch app <ArrowUpRight className="size-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            Case Study · Financial decision modeling
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Making vehicle
                <br />
                financing easier
                <br />
                to reason about.
              </h1>
            </div>

            <div>
              <p className="max-w-lg text-base leading-7 text-neutral-600">
                Dealer Math brings vehicle price, trade position, taxes, fees,
                APR, and loan terms into one transparent financial model so the
                user can understand what is actually being financed.
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
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <DealerMathProductPreview />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="grid gap-8 border-b py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            01 · The problem
          </p>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A monthly payment is the end of the equation, not the beginning.
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-600">
              Vehicle financing becomes difficult to reason about when several
              variables are compressed into a single monthly payment. Sticker
              price alone does not explain the financed amount: cash down,
              taxes, fees, trade value, current payoff, APR, and term all change
              the result.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <div className="rounded-lg border p-5">
                <p className="text-xs text-neutral-500">Inputs</p>
                <p className="mt-2 font-semibold">
                  Price + Tax + Fees + Trade − Cash
                </p>
              </div>

              <ArrowRight className="mx-auto hidden size-4 text-neutral-400 sm:block" />

              <div className="rounded-lg border p-5">
                <p className="text-xs text-neutral-500">Financing base</p>
                <p className="mt-2 font-semibold">Amount Financed</p>
              </div>

              <ArrowRight className="mx-auto hidden size-4 text-neutral-400 sm:block" />

              <div className="rounded-lg border p-5">
                <p className="text-xs text-neutral-500">Loan structure</p>
                <p className="mt-2 font-semibold">APR + Term → Payment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            02 · The solution
          </p>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn the financing structure into a visible workflow.
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-600">
              The application separates the calculation into the same decisions
              a buyer or salesperson needs to reason through: vehicle price,
              customer cash, trade position, taxes and fees, then financing.
              Changing any variable immediately changes the financing model.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Vehicle price establishes the starting value.",
                "Down payment reduces the amount that needs financing.",
                "Trade payoff and dealer offer expose positive or negative equity.",
                "Taxes and fees remain visible instead of being buried in the payment.",
                "APR and loan term turn the financed amount into payment scenarios.",
                "The result creates a clearer basis for comparing financing decisions.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border p-4 text-sm leading-6 text-neutral-700"
                >
                  <Check className="mt-1 size-4 shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b py-14 lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            03 · Engineering decisions
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engineering.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-lg border p-6">
                <Icon className="size-6 stroke-[1.6]" />
                <h2 className="mt-8 text-lg font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            04 · Data model
          </p>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Calculations can become records, not disposable results.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600">
              The project is evolving from a calculator whose result exists only
              in the browser toward a system that can associate calculations
              with a user. That creates a foundation for history, comparison,
              and future financing analytics.
            </p>

            <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-[0.7fr_auto_1.3fr] md:items-center">
              <div className="rounded-lg border p-6">
                <p className="text-xs text-neutral-500">Entity</p>
                <p className="mt-2 text-xl font-semibold">User</p>
                <div className="mt-5 space-y-2 text-sm text-neutral-600">
                  <p>id</p>
                  <p>authID</p>
                  <p>email</p>
                  <p>createdAt</p>
                </div>
              </div>

              <div className="mx-auto text-center text-sm text-neutral-400">
                1 → N
              </div>

              <div className="rounded-lg border p-6">
                <p className="text-xs text-neutral-500">Entity</p>
                <p className="mt-2 text-xl font-semibold">Calculation</p>
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-600">
                  <p>vehiclePrice</p>
                  <p>downPayment</p>
                  <p>apr</p>
                  <p>salesTax</p>
                  <p>dealerFees</p>
                  <p>otherFees</p>
                  <p>tradeValue</p>
                  <p>tradePayoff</p>
                  <p>terms</p>
                  <p>monthlyPayment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            05 · Reliability
          </p>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Test the part of the product that has to be trusted.
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-600">
              The calculator is useful only if the financial behavior remains
              correct as the application changes. Testing therefore focuses on
              the domain logic rather than treating automation as the product.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Calculation accuracy",
                "Boundary conditions",
                "Input validation",
                "Regression protection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border p-4 text-sm font-medium"
                >
                  <Check className="size-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            06 · Delivered
          </p>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The output is a decision model, not just a calculator.
            </h2>

            <div className="mt-8 space-y-6">
              {[
                "Delivered one workflow that combines vehicle price, trade position, taxes, fees, APR, and loan structure instead of presenting those decisions independently.",
                "Made positive and negative trade equity explicit so the user can see how an existing loan changes the new financed amount.",
                "Structured the project so calculation results can evolve from temporary UI output into persistent historical data.",
                "Protected core financial behavior with automated validation rather than making testing the primary identity of the application.",
              ].map((item, i) => (
                <div
                  key={item}
                  className="grid grid-cols-[36px_1fr] gap-4 border-t pt-5"
                >
                  <span className="font-mono text-xs text-neutral-400">
                    0{i + 1}
                  </span>
                  <p className="text-base leading-7 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-14 lg:grid-cols-[1fr_2fr] lg:py-20">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
            07 · Architecture evolution
          </p>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The project changed as the problem became larger.
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-600">
              Dealer Math began as a client-side calculation experience. Adding
              persistence changes the architecture: a calculation stops being
              temporary form state and becomes a domain record that can belong
              to a user. That shift creates new design questions around data
              types, relationships, migrations, history, and analytics.
            </p>
          </div>
        </section>
      </div>

      <section className="border-t bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
                Explore the product
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                See Dealer Math in action.
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={liveApp} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  Launch app <ArrowUpRight className="size-4" />
                </Button>
              </a>

              <a href={source} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-neutral-700 bg-transparent text-white hover:bg-neutral-900 hover:text-white"
                >
                  View source <GitBranch className="size-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800 pt-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
