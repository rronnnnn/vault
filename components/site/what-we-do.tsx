import { RadarIcon, ShieldCheckIcon, PulseIcon } from "./icons"
import type { ComponentType, SVGProps } from "react"

type Item = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
}

const items: Item[] = [
  {
    icon: RadarIcon,
    title: "Threat Detection",
    body: "Real-time monitoring across your entire infrastructure. We find threats before they find you.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Zero Trust Architecture",
    body: "Every access request verified. No assumptions, no exceptions.",
  },
  {
    icon: PulseIcon,
    title: "Incident Response",
    body: "When breaches happen, every second counts. Our team responds in minutes.",
  },
]

export function WhatWeDo() {
  return (
    <section id="solutions" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[#16171c] [text-wrap:balance]">
            Security that works while you sleep.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#54565f]">
            Three layers of protection, working together to keep your
            infrastructure safe — without slowing your team down.
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl border border-gray-200/70 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_22px_60px_-28px_rgba(15,15,20,0.28)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#16171c] text-white transition-colors duration-300 group-hover:bg-[#fb6415]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-[#16171c]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#54565f]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
