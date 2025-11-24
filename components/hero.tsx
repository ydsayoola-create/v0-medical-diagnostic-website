"use client"

import { useState, useEffect } from "react"
import { useFormStore } from "@/hooks/use-forms"

export default function Hero() {
  const { setShowAppointmentForm } = useFormStore()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        {/* Molecular network background */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Floating particle elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-particle-float-1 gpu-accelerate"></div>
        <div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-particle-float-2 gpu-accelerate"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-particle-float-3 gpu-accelerate"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Parallax background element */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <div className="absolute top-40 left-20 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider animate-fade-up inline-block">
            Premium Diagnostic Excellence
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-balance-custom animate-fade-up stagger-1"
            style={{ animationDelay: "0.15s" }}
          >
            Precision in Every Diagnosis
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto animate-fade-up stagger-2"
            style={{ animationDelay: "0.3s" }}
          >
            Advanced diagnostic services and medical consultancy you can trust. From imaging to genetics, we deliver the
            clarity healthcare decisions demand.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up stagger-3"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => setShowAppointmentForm(true)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform btn-pulse relative overflow-hidden"
          >
            Book Your Appointment
          </button>
        </div>

        <div className="pt-12 animate-fade-up stagger-4" style={{ animationDelay: "0.6s" }}>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/images/marcel-scholte-lpurjnihmqi-unsplash.jpg"
              alt="Dynasty Global Medical Facility"
              className="w-full h-auto group-hover:animate-ken-burns transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
