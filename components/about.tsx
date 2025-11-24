"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">
                About Dynasty Global Medical
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Excellence in Diagnostic Care
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Founded with a commitment to elevate healthcare standards in Nigeria, Dynasty Global Medical Limited stands as a beacon of diagnostic excellence. We combine international best practices with local expertise to deliver unparalleled diagnostic services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To provide accurate, timely, and compassionate diagnostic services that empower patients and healthcare
                providers with the insights needed for optimal health outcomes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">Our Values</h3>
              <ul className="space-y-3">
                {[
                  "Expert specialists with international credentials",
                  "Latest diagnostic technology and equipment",
                  "Patient-centric care approach",
                  "Rapid turnaround on results",
                  "Competitive pricing without compromising quality",
                ].map((item, i) => (
                  <li 
                    key={i} 
                    className="flex gap-3 items-start transition-all duration-700"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-accent text-lg flex-shrink-0">✓</span>
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezebunwo-omachi-aWDmVbKd3w0-unsplash-KNaBw6DI8t8c66EA7tdtax4YjP1noe.jpg" 
              alt="Medical Team" 
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accuray-QTP8UKW_PgI-unsplash-vkHAt6eYXgPiaSvHR04bOKZK2sfBBD.jpg"
              alt="Diagnostic Equipment"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
