"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen py-20 bg-green-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-green-300">Touch</span>
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing
            together.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-300 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-green-100">01sanjananair@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-300 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-green-100">9958488077</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-300 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-green-100">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Sanjana S Nair</h3>
              <p className="text-green-100">Designer & Creative Professional</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-green-600/30 border-green-600/50 text-white placeholder:text-green-200/50 focus-visible:ring-green-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-green-600/30 border-green-600/50 text-white placeholder:text-green-200/50 focus-visible:ring-green-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-green-600/30 border-green-600/50 text-white placeholder:text-green-200/50 focus-visible:ring-green-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-green-600/30 border-green-600/50 text-white placeholder:text-green-200/50 focus-visible:ring-green-400"
                />
              </div>

              <Button className="bg-green-500 hover:bg-green-400 text-green-950 w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
