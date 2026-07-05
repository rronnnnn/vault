import type { SVGProps } from "react"

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/** Threat Detection — radar sweep */
export function RadarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 1 0 8.5 6.1" />
      <path d="M12 7.5a4.5 4.5 0 1 0 4.3 3.2" />
      <path d="M12 12 20 5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Zero Trust — shield with check */
export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.7v5.1c0 4.3 3 7.2 7 8.7 4-1.5 7-4.4 7-8.7V5.7L12 3Z" />
      <path d="m9.2 11.7 1.9 1.9 3.7-3.8" />
    </svg>
  )
}

/** Incident Response — activity pulse */
export function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h3.2l1.8-5 3 12 2.4-8 1.5 3H21" />
    </svg>
  )
}

/** small check used in bullet lists */
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </svg>
  )
}

/** arrow used on CTA buttons */
export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}
