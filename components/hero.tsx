"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useScroll } from "./scroll-provider"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const { scrollToSection } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleParallax)
    return () => window.removeEventListener("scroll", handleParallax)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden bg-green-950">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 to-green-950/90" />

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Hello and welcome!</span>
            <span className="text-green-400">I'm Sanjana</span>
          </h1>
          <p className="text-xl text-green-100 mb-8">
            A passionate designer showcasing my journey and creative work. Explore my projects and see how I can bring
            my skills to your collaborations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("work")}
            className="bg-green-500 hover:bg-green-400 text-green-950 font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="text-green-400 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
