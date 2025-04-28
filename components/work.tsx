"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Define project categories based on user's request
const categories = [
  {
    id: "vyk",
    label: "VYK",
  },
  {
    id: "health-clinic",
    label: "My Health Clinic",
  },
  {
    id: "under25",
    label: "Under 25 App",
  },
  {
    id: "freelancing",
    label: "Freelancing",
  },
  {
    id: "hult",
    label: "Hult",
  },
]

// Sample projects with categories
const projects = [
  {
    id: 1,
    title: "VYK Digital Marketing",
    description:
      "Created engaging social media content and digital marketing materials for VYK NGO to increase awareness and engagement.",
    category: "vyk",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Social Media", "Digital Marketing", "NGO"],
  },
  {
    id: 2,
    title: "VYK Campaign Design",
    description:
      "Designed campaign materials for fundraising and awareness initiatives, helping the NGO reach a wider audience.",
    category: "vyk",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Campaign Design", "Graphic Design", "Canva"],
  },
  {
    id: 3,
    title: "International Day of Persons with Disabilities",
    description:
      "Created an awareness poster for the International Day of Persons with Disabilities on December 3rd, featuring inclusive illustrations.",
    category: "health-clinic",
    image: "/images/health-1.jpeg",
    tags: ["Healthcare", "Awareness Campaign", "Inclusive Design"],
  },
  {
    id: 4,
    title: "Osteopathy Services Promotion",
    description:
      "Designed a promotional graphic for osteopathy services at My Health Clinic in Neemrana, highlighting available treatments.",
    category: "health-clinic",
    image: "/images/health-2.jpeg",
    tags: ["Medical Services", "Promotional Design", "Healthcare Marketing"],
  },
  {
    id: 5,
    title: "World AIDS Day Awareness",
    description:
      "Created a World AIDS Day awareness graphic for December 1st, using the iconic red ribbon symbol on a vibrant background.",
    category: "health-clinic",
    image: "/images/health-3.jpeg",
    tags: ["Health Awareness", "Campaign Design", "Public Health"],
  },
  {
    id: 6,
    title: "World Diabetes Day Campaign",
    description:
      "Designed an informative graphic for World Diabetes Day on November 14th, featuring a glucose meter illustration.",
    category: "health-clinic",
    image: "/images/health-4.jpeg",
    tags: ["Health Education", "Awareness Campaign", "Medical Design"],
  },
  {
    id: 7,
    title: "Mental Health Self-Care Guide",
    description:
      "Created a mental wellness graphic encouraging self-care practices like meditation, journaling, and taking walks.",
    category: "health-clinic",
    image: "/images/health-5.jpeg",
    tags: ["Mental Health", "Self-Care", "Wellness Tips"],
  },
  {
    id: 8,
    title: "Daily Wellness Practices",
    description:
      "Designed an infographic highlighting essential daily wellness practices to boost immunity and maintain overall health.",
    category: "health-clinic",
    image: "/images/health-6.jpeg",
    tags: ["Wellness", "Health Education", "Lifestyle Tips"],
  },
  {
    id: 9,
    title: "Hydration Reminder Notification",
    description:
      "Designed a mobile app notification for My Health Wellness app, encouraging users to stay hydrated throughout the day.",
    category: "health-clinic",
    image: "/images/health-7.jpeg",
    tags: ["App Design", "User Experience", "Health Tech"],
  },
  {
    id: 10,
    title: "Clinic Services Promotion",
    description:
      "Created a promotional graphic for My Health Wellness clinic highlighting 24-hour services, professional doctors, and consultation options.",
    category: "health-clinic",
    image: "/images/health-8.jpeg",
    tags: ["Healthcare Marketing", "Clinic Promotion", "Service Advertisement"],
  },
  {
    id: 11,
    title: "Under 25 App Promotional Banner",
    description:
      "Designed a promotional banner for the Under 25 App highlighting its features for college students including events, internships, and student deals.",
    category: "under25",
    image: "/images/under25-1.png",
    tags: ["App Promotion", "Student Services", "Digital Marketing"],
  },
  {
    id: 12,
    title: "Under 25 App UI Design",
    description:
      "Designed user interface elements for the Under 25 mobile application, focusing on user experience and visual appeal.",
    category: "under25",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["UI Design", "Mobile App", "User Experience"],
  },
  {
    id: 13,
    title: "Diwali Greeting Card",
    description:
      "Designed a festive Diwali greeting card featuring Goddess Lakshmi with traditional elements and warm messaging.",
    category: "freelancing",
    image: "/images/freelancing-1.png",
    tags: ["Festival Design", "Greeting Card", "Cultural Design"],
  },
  {
    id: 14,
    title: "Souhrudam Festive Cheer",
    description:
      "Created a festive event promotional design for Souhrudam's 2025 celebration with holiday-themed elements.",
    category: "freelancing",
    image: "/images/freelancing-2.png",
    tags: ["Event Design", "Holiday Theme", "Promotional Material"],
  },
  {
    id: 15,
    title: "Hult Social Media Direction",
    description:
      "Led social media strategy and content creation as Social Media Director for Hult, increasing engagement and reach.",
    category: "hult",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Social Media Direction", "Strategy", "Content Creation"],
  },
  {
    id: 16,
    title: "Hult Event Promotion",
    description:
      "Designed promotional materials for Hult events, creating cohesive and engaging visual content to drive attendance.",
    category: "hult",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Event Promotion", "Graphic Design", "Marketing"],
  },
]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("vyk")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-green-300">Work</span>
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Explore my portfolio showcasing projects across various organizations and clients. Each project represents
            my passion for design and creative problem-solving.
          </p>
        </motion.div>

        <Tabs defaultValue="vyk" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12 bg-green-700/30 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn("data-[state=active]:bg-green-600 data-[state=active]:text-white", "text-green-200")}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-green-700/30 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-green-100 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-green-600/50 text-green-100 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
