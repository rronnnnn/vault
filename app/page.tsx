import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { WhatWeDo } from "@/components/site/what-we-do"
import { Stats } from "@/components/site/stats"
import { WhyVault } from "@/components/site/why-vault"
import { CTA } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Stats />
        <WhyVault />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
