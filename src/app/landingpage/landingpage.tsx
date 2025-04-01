'use client'
import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight} from 'lucide-react'
import WhyFellowship from './whyfellowship'
import KnowMore from './knowmore'
import PersonalitiesFrame from './personalities'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function InnovationFellowship() {
 




  const currentYear = new Date().getFullYear()

  return (  
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-slate-900 via-slate-900 to-transparent">
        {/* Background Image - Now positioned on the right */}
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/3">
          <Image 
            src="/paint-bg.webp"
            alt="Paint Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-blue-500 font-medium">Premium Paint Solutions</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  Transform Your Space With Premium Paints
                </h1>

                <p className="text-lg text-gray-300 max-w-xl">
                  We are an established paints and building materials apply and supply company, 
                  providing expert services with absolute ownership on every task.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex flex-wrap gap-4">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                    >
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-400 text-black hover:bg-white/10 px-8 py-6 text-lg"
                    >
                      About Us
                    </Button>
                  </Link>
                </div>

                {/* Quick Info Cards */}
              

                {/* Locations */}
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        
         
          <PersonalitiesFrame />
          <KnowMore />
         
          
         
          
          <WhyFellowship />

          
           
           
          
            
          
        </main>

        <footer className="py-4 border-t border-zinc-800 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-xs text-black-400 font-light">© {currentYear} ProPaint. All rights reserved. Phone: +91 98480 16428, +91 78010 16428 Location: 8-1-284/OU/521/6/9 shutter no:3 Shaikpet OU Colony Hyd-500008</p>
              </div>
             
              <div className="flex justify-center md:justify-end space-x-4">
                
              </div>
            </div>
          </div>
        </footer>

      </div>
    
  )
}
