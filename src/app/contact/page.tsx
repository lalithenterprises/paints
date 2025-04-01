'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function Contact() {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef)

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_4s]" />
      </div>

      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <section ref={contactRef} className="relative min-h-screen py-20 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-600 font-medium">Contact Us</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-600 text-lg">
              We&apos;re here to help with all your paint and construction needs
            </p>
          </div>

          {/* Contact Card */}
          <Card className="max-w-3xl mx-auto overflow-hidden shadow-2xl">
            <CardContent className="p-8 bg-gradient-to-br from-slate-900 to-blue-900 relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full blur-2xl" />
              </div>

              <div className="relative space-y-8">
                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Numbers */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={contactInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-full">
                        <Phone className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-blue-300 text-sm mb-2">Call Us</p>
                        <Link href="tel:+919848016428" className="text-white font-medium hover:text-blue-200 transition-colors flex items-center gap-2">
                          +91 98480 16428 <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link href="tel:+917801016428" className="text-white font-medium hover:text-blue-200 transition-colors flex items-center gap-2">
                          +91 78010 16428 <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={contactInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-full">
                        <Mail className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-blue-300 text-sm mb-2">Email Us</p>
                        <Link href="mailto:lalithenterprises2023@gmail.com" className="text-white font-medium hover:text-blue-200 transition-colors flex items-center gap-2">
                          lalithenterprises2023@gmail.com <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Locations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-300" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-blue-300 text-sm mb-2">Our Locations</p>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-white font-medium">Exclusive Berger Paint Store</h3>
                            <p className="text-blue-200">8-1-284/OU/521/6/9 shutter no:3 Shaikpet OU Colony Hyd-500008</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}
