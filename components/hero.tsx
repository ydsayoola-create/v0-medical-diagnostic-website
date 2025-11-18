"use client"

import { useState } from "react"
import { useFormStore } from "@/hooks/use-forms"

export default function Hero() {
  const { setShowAppointmentForm } = useFormStore()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-blob-reverse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-shimmer" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider animate-slide-in-up">
            Premium Diagnostic Excellence
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-balance-custom animate-slide-in-up-1">
            Precision in Every Diagnosis
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto animate-slide-in-up-2">
            Advanced diagnostic services and medical consultancy you can trust. From imaging to genetics, we deliver the clarity healthcare decisions demand.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-in-up-3">
          <button 
            onClick={() => setShowAppointmentForm(true)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform"
          >
            Book Appointment
          </button>
        </div>

        <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <img
            src="/modern-medical-diagnostic-facility-with-advanced-i.jpg"
            alt="Dynasty Global Medical Facility"
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  )
}
