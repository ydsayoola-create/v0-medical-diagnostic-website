"use client"

import { useEffect, useRef, useState } from "react"
import AppointmentForm from "./appointment-form"
import ContactInquiryForm from "./contact-inquiry-form"
import { useFormStore } from "@/hooks/use-forms"

export default function CTA() {
  const { setShowAppointmentForm } = useFormStore()
  const [stats, setStats] = useState([
    { number: 0, label: "Patients Served", target: 500 },
    { number: 0, label: "Accuracy Rate", target: 99.8, isPercentage: true },
    { number: 0, label: "Hours Support", target: 24 },
  ])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const intervals = stats.map((stat, idx) => {
      const target = stat.target
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervals[idx])
        }

        setStats((prev) => {
          const newStats = [...prev]
          newStats[idx].number = stat.isPercentage ? Number.parseFloat(current.toFixed(1)) : Math.floor(current)
          return newStats
        })
      }, duration / steps)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <>
      <section
        ref={sectionRef}
        id="cta-section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-particle-float-1 gpu-accelerate"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl animate-particle-float-2 gpu-accelerate"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground animate-fade-up">
              Ready for Your Diagnostic Assessment?
            </h2>
            <p
              className="text-lg text-primary-foreground/90 font-body leading-relaxed animate-fade-up stagger-1"
              style={{ animationDelay: "0.15s" }}
            >
              Schedule your appointment today and experience the Dynasty Global Medical difference. Our team is ready to
              provide you with comprehensive, accurate diagnostic services.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => setShowAppointmentForm(true)}
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-body font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Book Appointment Now
            </button>
            <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary-foreground/10 transition-all duration-300">
              Call Us: +234 703 920 1769
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${0.45 + i * 150}ms` }}>
                <p className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">
                  {stat.number}
                  {stat.isPercentage ? "%" : "+"}
                </p>
                <p className="text-primary-foreground/80 font-body text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
      <ContactInquiryForm />
    </>
  )
}
