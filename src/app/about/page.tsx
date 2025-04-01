'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {   CheckCircle, History, Target, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

function useInView(ref: React.RefObject<HTMLElement>) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref])

  return isInView
}

export default function About() {
  const containerRef = useRef(null)
  const storyRef = useRef(null)
  const servicesRef = useRef(null)
  
  const storyInView = useInView(storyRef as unknown as React.RefObject<HTMLElement>)
  const servicesInView = useInView(servicesRef as unknown as React.RefObject<HTMLElement>)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0">
          <Image
            src="/paint-bg.webp"
            alt="Paint Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 max-w-2xl mx-auto"
          >
            A journey of transforming spaces and building trust
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </motion.section>

      {/* Our Journey Section */}
      <section ref={storyRef} className="py-20 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={storyInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: History,
                  title: "Our Beginning",
                  description: "Established as a trusted paint and building materials company, we started with a vision to deliver excellence."
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  description: "Running an exclusive Berger paint store at Shaikpet and operations at RP Road, we've expanded our reach."
                },
                {
                  icon: Award,
                  title: "Our Excellence",
                  description: "With our expert team and absolute ownership approach, we've built a reputation for quality and reliability."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-16">Our Services Journey</h2>
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              {[
                {
                  title: "Paint Excellence",
                  description: "Premium paint solutions with expert application services",
                  features: ["Premium paint brands", "Expert color consultation", "Professional application"],
                  image: "/paint-service.jpg",
                  altText: "Professional paint application service"
                },
                {
                  title: "Design & Build",
                  description: "Comprehensive design and construction solutions",
                  features: ["Interior designs", "Customized building plans", "Expert execution"],
                  image: "/design-build.jpg",
                  altText: "Interior design and construction"
                },
                {
                  title: "Smart Solutions",
                  description: "Modern technology integration for your spaces",
                  features: ["Smart home installations", "Technical guidance", "Automation solutions"],
                  image: "/smart-home.jpg",
                  altText: "Smart home automation solutions"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.3 }}
                  className={`flex flex-col md:flex-row gap-12 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.3 + 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-slate-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }} // Slightly increased scale for better visibility
                      animate={servicesInView ? { opacity: 1, scale: 1.05 } : {}} // Added a slight scale effect on visibility
                      transition={{ delay: index * 0.3 + 0.4 }}
                      className="relative h-[450px] rounded-2xl overflow-hidden group" // Increased height for better image display
                    >
                      <Image
                        src={service.image}
                        alt={service.altText}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500" // Increased scale on hover for a more pronounced effect
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" /> 
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="text-lg font-semibold text-slate-900">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

     

      {/* Contact Section */}
     
    </div>
  )
}

