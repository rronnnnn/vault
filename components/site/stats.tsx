const stats = [
  { value: "99.97%", label: "Uptime" },
  { value: "<4 min", label: "Response time" },
  { value: "10,000+", label: "Systems protected" },
  { value: "0", label: "Unresolved breaches" },
]

export function Stats() {
  return (
    <section className="bg-[#0f0f0f] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <dt className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-none tracking-tight text-white">
                {s.value}
              </dt>
              <dd className="mt-3 text-sm uppercase tracking-wider text-white/60">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
