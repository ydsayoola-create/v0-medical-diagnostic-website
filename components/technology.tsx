"use client"

import { useEffect, useRef, useState } from "react"

export default function Technology() {
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

  const services = [
    {
      name: "Advanced Imaging & Radiology",
      description: "Crystal-clear insights through X-rays, CT scans, MRI, and specialized imaging services backed by expert radiologist consultation.",
      href: "/services/radiology",
    },
    {
      name: "Laboratory & Pathology",
      description: "Comprehensive blood tests, biopsies, and clinical diagnostics with rapid turnaround times and precision accuracy.",
      href: "/services/laboratory",
    },
    {
      name: "Genetic & Molecular Diagnostics",
      description: "Unlock the power of genomic medicine with advanced DNA testing, genetic screening, and molecular diagnostic services.",
      href: "/services/genetic-testing",
    },
    {
      name: "Cardiology Diagnostics",
      description: "Complete cardiac assessment including ECG, echocardiography, stress testing, and specialized cardiovascular diagnostics.",
      href: "/services/cardiology",
    },
    {
      name: "Medical Consultancy",
      description: "Expert diagnostic consultation services for healthcare providers, institutions, and organizations seeking specialist medical advice.",
      href: "/services/medical-consultancy",
    },
    {
      name: "Research & Development",
      description: "Collaborative partnerships advancing the future of diagnostic medicine through innovation, research, and professional training.",
      href: "/services/research-development",
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="services-showcase" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Comprehensive Diagnostic Solutions
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Explore our full range of premium diagnostic services designed to meet your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className={`border border-border bg-card rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-pointer ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-accent text-xl">→</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="text-primary text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform">Learn More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
