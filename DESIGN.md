# Design

## Theme

Light-only. A single full-viewport rounded panel floating on a white page, with a soft drop
shadow and a 1px hairline border. The panel surface is a radial gradient from near-white at
the upper center to a slightly darker cool-gray at the edges, giving the globe room to glow.

## Color

Near-monochrome, Restrained strategy with one accent.

- Page background: `#ffffff`
- Panel surface: `radial-gradient(125% 125% at 50% 28%, #fefefe 0%, #f5f5f6 52%, #ececed 100%)`
- Panel border: `rgba(0,0,0,0.06)` · shadow: `0 40px 120px -32px rgba(15,15,20,0.22)`
- Logotype: vertical gradient `#1a1a1a → #888888` (charcoal to mid-gray), clipped to text
- Tagline ink: `gray-400` (deliberately faint, tracked-out label register)
- Accent: globe markers `rgb(251,100,21)` — the only saturated color on the page

## Typography

- Family: **Inter** (`next/font/google`), fallback Helvetica Neue / system sans.
- Logotype "Vault": `clamp(4rem, 14vw, 9rem)`, weight 700, `letter-spacing: -0.045em`,
  `line-height: 0.9`, `text-wrap: balance`. A single deliberate logotype, not body display.
- Tagline: `text-xs`→`sm`, uppercase, `letter-spacing: 0.28em`, muted gray.

## Layout

- Outer: `min-h-[100dvh]`, white, small padding so the panel floats.
- Panel: `flex-1`, `overflow-hidden`, `rounded-[1.75rem]`→`[2.25rem]`.
- Title block: absolutely positioned in the upper ~15–16%, centered.
- Globe: static outer wrapper centers it (`left-1/2 -translate-x-1/2`) and anchors it to the
  bottom (`bottom-0` + `translate-y`) so it crops off-screen. Larger and raised on phones
  (`w-[clamp(500px,130vw,760px)]`, `translate-y-11%`) → desktop (`760px`, `translate-y-26%`).

## Components

- `components/ui/globe.tsx` — `cobe` WebGL globe. Auto-rotates (`phi += 0.005`/frame), pauses
  on pointer-down, drag spins it via a `motion` spring; fades in on first paint.

## Motion

- Page-load entrance: logotype rises + fades, tagline follows (staggered), globe fades and
  scales up. Easing `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo), no bounce.
- Positioning transform lives on a static parent; `motion` only animates opacity/scale on a
  nested element so it never overwrites the centering/crop transform.
- `prefers-reduced-motion`: entrances become instant (`initial={false}`); the globe still
  rotates (a continuous canvas render, not a transition).
