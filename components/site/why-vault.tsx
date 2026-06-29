import { CheckIcon } from "./icons"

const bullets = [
  "No backdoors. No master keys. Your data stays yours.",
  "Continuous verification — every request, every time.",
  "Compliance built in: SOC 2, ISO 27001, and GDPR.",
  "Human analysts on call, around the clock.",
]

type Log = { time: string; kind: "ok" | "alert"; message: string }

const logs: Log[] = [
  { time: "09:42:18", kind: "ok", message: "perimeter scan complete — 0 threats" },
  { time: "09:42:19", kind: "alert", message: "anomalous login blocked · 203.0.113.44" },
  { time: "09:42:21", kind: "ok", message: "zero-trust policy enforced · api-gateway" },
  { time: "09:42:24", kind: "ok", message: "endpoint isolated · node-7f3a" },
  { time: "09:42:27", kind: "alert", message: "brute-force attempt mitigated · ssh" },
  { time: "09:42:29", kind: "ok", message: "all systems nominal" },
]

export function WhyVault() {
  return (
    <section id="why" className="bg-[#f7f7f8] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[#16171c] [text-wrap:balance]">
            Security without compromise.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#54565f]">
            Enterprise-grade protection that gets out of your way. No theater,
            no lock-in — just defenses that hold.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#fb6415]" />
                <span className="text-[15px] leading-relaxed text-[#2c2d33]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live-feed terminal */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d11] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-2 font-mono text-xs text-white/40">
              vault — live feed
            </span>
          </div>

          <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
            {logs.map((l, i) => (
              <div
                key={l.time + l.message}
                className="log-line flex gap-3"
                style={{ animationDelay: `${0.2 + i * 0.22}s` }}
              >
                <span className="shrink-0 text-white/35">{l.time}</span>
                <span
                  className={
                    l.kind === "alert"
                      ? "shrink-0 text-[#fb6415]"
                      : "shrink-0 text-emerald-400/90"
                  }
                  aria-hidden="true"
                >
                  {l.kind === "alert" ? "⚠" : "✓"}
                </span>
                <span className="text-white/75">{l.message}</span>
              </div>
            ))}

            <div
              className="log-line flex items-center gap-2 pt-1 text-white/55"
              style={{ animationDelay: `${0.2 + logs.length * 0.22}s` }}
            >
              <span>vault@core:~$</span>
              <span className="cursor inline-block h-4 w-[7px] bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
