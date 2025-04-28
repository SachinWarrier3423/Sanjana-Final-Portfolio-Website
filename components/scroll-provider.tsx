"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ScrollContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function useScroll() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider")
  }
  return context
}

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  )
}
