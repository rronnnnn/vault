import { ArrowIcon } from "./icons"

export function CTA() {
  return (
    <section id="contact" className="bg-[#0f0f0f] py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white [text-wrap:balance]">
          Ready to secure your infrastructure?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/60">
          Talk to our team. No sales pitch, just clarity.
        </p>

        <a
          href="#contact"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0f0f0f] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Schedule a Call
          <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
