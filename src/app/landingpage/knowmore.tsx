'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Beaker, Shield } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const chemicals = [
  {
    name: "MYK Laticrate",
    description: "High-performance construction chemicals for waterproofing, tiling, and surface treatments.",
    icon: Beaker,
    features: ["Waterproofing Solutions", "Tile Adhesives", "Surface Treatments"],
    image: "/myk-logo.png",
    website: "https://myklaticrete.com/" // Added website link
  },
  {
    name: "Ramco",
    description: "Quality construction chemicals backed by extensive research and development.",
    icon: Shield,
    features: ["Concrete Admixtures", "Grouts", "Repair Solutions"],
    image: "/ramco-logo.jpg",
    website: "https://www.ramcocements.in/" // Added website link
  },
  {
    name: "Weber (Saint-Gobain)",
    description: "Globally recognized construction chemical solutions for modern building needs.",
    icon: Shield,
    features: ["Industrial Flooring", "Tile Fixing", "Technical Mortars"],
    image: "/weber-logo.jpg",
    website: "https://www.in.weber/" // Added website link
  }
]

export default function ConstructionChemicals() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-10">
          <motion.div 
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Construction Chemicals
            </h2>
            <p className="text-slate-600">
              Premium quality construction chemicals for all your building needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {chemicals.map((chemical, index) => (
              <motion.div
                key={chemical.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group h-full border border-slate-200 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative h-24 mb-6 bg-slate-50 rounded-lg p-4">
                      <Image
                        src={chemical.image}
                        alt={chemical.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <chemical.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{chemical.name}</h3>
                    </div>

                    <p className="text-slate-600 mb-6 text-sm">
                      {chemical.description}
                    </p>

                    <div className="space-y-2">
                      {chemical.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <button 
                        className="w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors"
                        onClick={() => window.open(chemical.website, "_blank")} // Added onClick to open website
                      >
                        Learn More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>       
      </div>
    </section>    
  )
}