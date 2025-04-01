'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet, Brush, Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

const companies = [
  {
    type: "Berger Paints",
    description: "Whether you're looking for home painting services or expert room colour recommendations, Berger Paints is your one-stop destination! As an exclusive Berger paint store at Shaikpet, we offer comprehensive painting solutions.",
    services: [
      "Interior & Exterior Painting",
      "Waterproofing Solutions",
      "Wood Coatings",
      "Metal Coatings"
    ],
    products: [
      "WeatherCoat All Guard",
      "Luxol Hi-Gloss",
      "Easy Clean",
      "Silk Breathe Easy"
    ],
    icon: Droplet,
    image: "/berger-logo.png",
    color: "from-blue-600 to-blue-700",
    website: "https://www.bergerpaints.com" // Added website link
  },
  {
    type: "Birla Paints",
    description: "Birla Paints offers premium quality paints with excellent coverage and finish. Our range includes innovative solutions for both residential and commercial projects.",
    services: [
      "Professional Paint Application",
      "Color Consultation",
      "Surface Preparation",
      "Post-painting Care"
    ],
    products: [
      "Ultima Exterior Emulsion",
      "Perfect Interior Emulsion",
      "Waterproof Putty",
      "Premium Primers"
    ],
    icon: Brush,
    image: "/birla-logo.jpg",
    color: "from-green-600 to-green-700",
    website: "https://www.birlaopus.com/" // Added website link
  },
  {
    type: "Indigo Paints",
    description: "Indigo Paints brings innovative solutions with unique properties. Known for their cutting-edge technology and superior quality, we offer a wide range of specialized paints.",
    services: [
      "Specialized Paint Solutions",
      "Industrial Coatings",
      "Decorative Finishes",
      "Technical Support"
    ],
    products: [
      "Acrylic Laminate",
      "Floor Coat Paint",
      "Metal Coat",
      "Designer Finishes"
    ],
    icon: Palette,
    image: "/indigo-logo.png",
    color: "from-purple-600 to-purple-700",
    website: "https://www.indigopaints.com" // Added website link
  },
  {
    type: "JSW Paints",
    description: "At JSW Paints, we believe true beauty is not just looking good, but also in thinking and doing good. That is why we venture beyond the superficial to explore the beauty and potential in everything around us. Our growing pan-India presence, fully automated manufacturing facilities and consistent focus on innovation help us cater to the changing and growing aspirations of our country, with precision and efficiency.",
    services: [
      "Interior & Exterior Painting",
      "Color Consultation",
      "Surface Preparation",
      "Post-painting Care"
    ],
    products: [
      "JSW Paints Interior Emulsion",
      "JSW Paints Exterior Emulsion",
      "JSW Paints Waterproofing Solutions",
      "JSW Paints Wood Coatings"
    ],
    icon: Droplet,
    image: "/jsw-paints.jpg",
    color: "from-red-600 to-red-700",
    website: "https://www.jswpaints.in/" // Added website link
  }
]


export default function CompaniesFrame() {
  const [activeCompany, setActiveCompany] = useState(companies[0])
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Premium Paint Brands
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {companies.map((company) => (
            <Button
              key={company.type}
              variant={activeCompany.type === company.type ? "default" : "outline"}
              onClick={() => setActiveCompany(company)}
              className="text-sm font-medium"
            >
              <company.icon className="w-4 h-4 mr-2" />
              {company.type}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCompany.type}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={activeCompany.image}
                      alt={activeCompany.type}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <activeCompany.icon className="w-5 h-5 mr-2 text-blue-600" />
                      {activeCompany.type}
                    </h3>
                    <p className="text-slate-600">
                      {activeCompany.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-600">Services Offered</h4>
                    <ul className="grid gap-2">
                      {activeCompany.services.map((service) => (
                        <li key={service} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-600">Popular Products</h4>
                    <ul className="grid gap-2">
                      {activeCompany.products.map((product) => (
                        <li key={product} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" onClick={() => window.open(activeCompany.website, "_blank")}>
                    View more about {activeCompany.type}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}