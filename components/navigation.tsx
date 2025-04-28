"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useScroll } from "./scroll-provider"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const { activeSection, scrollToSection } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    closeMenu()
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-green-950/90 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Sanjana</div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {["hero", "about", "work", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={cn(
                "text-white capitalize transition-all duration-300 hover:text-green-300",
                activeSection === section ? "font-bold border-b-2 border-green-400" : "font-medium",
              )}
            >
              {section === "hero" ? "Home" : section}
            </button>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-green-950/95 z-50 flex flex-col items-center justify-center">
            <button className="absolute top-5 right-5 text-white" onClick={closeMenu} aria-label="Close menu">
              <X size={24} />
            </button>
            <nav className="flex flex-col space-y-8 items-center">
              {["hero", "about", "work", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={cn(
                    "text-white text-xl capitalize transition-all duration-300 hover:text-green-300",
                    activeSection === section ? "font-bold" : "font-medium",
                  )}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
