'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet, Brush, Wrench, CheckCircle,  Phone,  Palette,MapPin, Shield, LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type Feature = string | {
  title: string;
  items: Array<{
    name: string;
    image: string;
    description: string;
  }>;
};

type Service = {
  id: number;
  title: string;
  icon: LucideIcon ;
  category: 'Paint' | 'Chemicals' | 'Services';
  highlights: string[];
  description: string;
  features: Feature[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Premium Paint Solutions",
    icon: Droplet,
    category: "Paint",
    highlights: ["Berger Paints", "Birla Paints", "Indigo Paints","Jsw Paints"],
    description: "Complete paint solutions from top brands with expert application services. We handle everything from surface preparation to final finishing.",
    features: [
      "Expert color consultation",
      "Professional application team",
      "Quality assurance",
      "Post-painting cleanup"
    ]
  },
  {
    id: 2,
    title: "Construction Chemicals",
    icon: Brush,
    category: "Chemicals",
    highlights: ["MYK Laticrate", "Ramco", "Weber (Saint-Gobain)"],
    description: "High-performance construction chemicals for all your building needs. From waterproofing to surface treatments, we provide complete solutions.",
    features: [
      "Waterproofing solutions",
      "Tile adhesives & grouts",
      "Surface treatments",
      "Technical support"
    ]
  },
  {
    id: 3,
    title: "End-to-End Services",
    icon: Wrench,
    category: "Services",
    highlights: ["Interior Designing", "Sampling / Shade Selection of Paints", "Liaison with GHMC and other Statutory Institutions"],
    description: "Comprehensive project management from start to finish. We handle everything from design to execution with absolute ownership.",
    features: [
      "Design & Plan by Professional Architects",
      "Insurance services of general and life",
      {
        title: "Insurance Services",
        items: [
          {
            name: "LIC Insurance",
            image: "/lic_logo.png",
            description: "Life Insurance Solutions"
          },
          {
            name: "Tokio Insurance",
            image: "/tokio.png",
            description: "General Insurance Coverage"
          },
          {
            name: "Oriental Insurance",
            image: "/orenital.png",
            description: "Comprehensive Insurance Services"
          }
        ]
      },
      "Installation services",
      "Quality monitoring"
    ]
  }
]

export default function ServiceShowcase() {
  const [activeService, setActiveService] = useState<Service>(services[0])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-50 transition-colors duration-700">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* First Blob */}
          <div 
            className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]"
          />
          
          {/* Second Blob */}
          <div 
            className="absolute -top-1/4 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_2s]"
          />
          
          {/* Third Blob */}
          <div 
            className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-sky-100/40 to-blue-100/40 rounded-full blur-3xl mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_4s]"
          />
        </div>

        {/* Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6 border border-white/20 hover:bg-white/90 transition-colors"
          >
            <Droplet className="w-5 h-5 text-blue-600" />
            <span className="text-slate-700 font-medium">End-to-End Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Space
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From premium paints to construction chemicals, we deliver complete solutions with expert application services
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex gap-2 border border-white/20">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={activeService.id === service.id ? "default" : "ghost"}
                onClick={() => setActiveService(service)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeService.id === service.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'hover:bg-slate-50'
                }`}
              >
                <service.icon className="w-4 h-4 mr-2" />
                {service.category}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column - Service Info */}
            <div className="lg:col-span-5 space-y-8">
              <Card className="bg-white/90 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50">
                      <activeService.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{activeService.title}</h3>
                      <p className="text-slate-500">Professional Solutions</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {activeService.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeService.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                 
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4">Ready to Transform?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+91 98480 16428 / +91 78010 16428</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>8-1-284/OU/521/6/9 shutter no:3 Shaikpet OU Colony Hyd-500008</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Features Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={typeof feature === 'string' ? feature : feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={typeof feature === 'object' ? 'md:col-span-2' : ''}
                  >
                    <Card className="h-full bg-white/90 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        {typeof feature === 'string' ? (
                          // Regular feature
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-blue-50">
                              <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2">{feature}</h4>
                              <p className="text-slate-600 text-sm">
                                Professional expertise with quality assurance
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Insurance services with images
                          <div>
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 rounded-lg bg-blue-50">
                                <Shield className="w-6 h-6 text-blue-600" />
                              </div>
                              <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {feature.items.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-200 transition-all duration-300"
                                >
                                  <div className="relative h-20 mb-4">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      fill
                                      className="object-contain"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                  </div>
                                  <div className="text-center">
                                    <h5 className="font-medium text-slate-900 mb-1">
                                      {item.name}
                                    </h5>
                                    <p className="text-sm text-slate-600">
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Why Choose Us Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-2"
                >
                  <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Palette className="w-8 h-8" />
                        <h4 className="text-xl font-semibold">Why Choose Us?</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          "Expert Application Team",
                          "Premium Quality Products",
                          "End-to-End Support"
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}