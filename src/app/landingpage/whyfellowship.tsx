'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Star, Award, Users, Trophy, School, Factory, Briefcase } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    name: "JAYINSHU INFRA",
    description: "Major infrastructure development projects",
    icon: Building2,
    type: "Infrastructure"
  },
  {
    name: "SWARGASEEMA SANDAL WOOD FARMS PVT LTD",
    description: "Premium agricultural and commercial developments",
    icon: Star,
    type: "Commercial"
  },
  {
    name: "SAI PRASANNA CONSTRUCTIONS",
    description: "Residential and commercial construction experts",
    icon: Award,
    type: "Construction"
  },
  {
    name: "JOY POOLS AND ACCESSORIES",
    description: "Specialized recreational facility construction",
    icon: Users,
    type: "Recreational"
  },
  {
    name: "SIKHARA PROJECTS PVT LTD",
    description: "Premium real estate development projects",
    icon: Trophy,
    type: "Real Estate"
  },
  {
    name: "V PACK AUTOMATION PVT LTD",
    description: "Advanced industrial automation solutions",
    icon: Factory,
    type: "Industrial"
  },
  {
    name: "SRIKAR ENGINEERING INDIA SOLUTIONS PVT LTD",
    description: "Comprehensive engineering solutions provider",
    icon: Building2,
    type: "Engineering"
  },
  {
    name: "MOTHER THERISSA COLLEGE OF PHARMACY",
    description: "Leading pharmaceutical education institution",
    icon: School,
    type: "Education"
  },
  {
    name: "ADMINISTRATIVE STAFF COLLEGE OF INDIA",
    description: "Premier management development institution",
    icon: Briefcase,
    type: "Institution"
  },
]

export default function ClientShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Trusted by Industry Leaders</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Esteemed Clients
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Proud to serve leading organizations across various sectors with our premium paint and construction chemical solutions
          </motion.p>
        </div>

        {/* Client Cards with Horizontal Scroll */}
        <div className="relative -mx-4 px-4">
          <div className="overflow-x-auto pb-6 scrollbar-none">
            <div className="flex space-x-6 pl-[1px]">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[350px] flex-shrink-0"
                >
                  <Card className="group h-full bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                          <client.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="inline-flex items-center">
                            <h3 className="text-base font-semibold text-slate-900 mb-1">{client.name}</h3>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                              {client.type}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{client.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Additional Clients Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-slate-600">And Many More Esteemed Clients</span>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Satisfied Clients", value: "200+" },
            { label: "Expert Team Members", value: "50+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}