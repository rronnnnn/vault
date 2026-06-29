"use client"

import { motion, useReducedMotion } from "motion/react"
import { Globe } from "@/components/ui/globe"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(125% 115% at 50% 16%, #ffffff 0%, #f4f4f6 54%, #e9e9ec 100%)",
      }}
    >
      {/* Zone 1 — text, in normal document flow. Owns the top ~40% and pushes
          the globe down; it never shares a stacking layer with the canvas. */}
      <div className="flex min-h-[40vh] shrink-0 flex-col items-center justify-center px-6 pt-16 text-center">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.05 }}
          className="bg-gradient-to-b from-[#1a1a1a] to-[#888888] bg-clip-text text-[clamp(3.5rem,12vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em] text-transparent [text-wrap:balance]"
        >
          Vault
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.26 }}
          className="mt-5 text-xs uppercase tracking-[0.28em] text-gray-400 sm:text-sm"
        >
          Protecting what matters most.
        </motion.p>
      </div>

      {/* Zone 2 — globe, fills the remaining height and crops off the bottom.
          Absolute positioning is scoped to this zone only, so it can never
          ride up over the text. */}
      <div className="relative grow overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 aspect-square w-[clamp(480px,82vw,820px)] -translate-x-1/2 translate-y-[14%]"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: EASE_OUT_EXPO, delay: 0.15 }}
            className="relative h-full w-full"
          >
            <Globe className="max-w-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
