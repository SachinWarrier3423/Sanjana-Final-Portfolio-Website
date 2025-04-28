import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Work from "@/components/work"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ScrollProvider from "@/components/scroll-provider"

export const metadata: Metadata = {
  title: "Sanjana's Portfolio",
  description: "Portfolio website showcasing Sanjana's work and skills",
}

export default function Home() {
  return (
    <ScrollProvider>
      <div className="relative">
        <Navigation />
        <main>
          <section id="hero" className="section-hero">
            <Hero />
          </section>
          <section id="about" className="section-about">
            <About />
          </section>
          <section id="work" className="section-work">
            <Work />
          </section>
          <section id="contact" className="section-contact">
            <Contact />
          </section>
        </main>
      </div>
    </ScrollProvider>
  )
}
