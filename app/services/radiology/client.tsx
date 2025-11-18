"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useFormStore } from "@/hooks/use-forms"

export default function RadiologyPageClient() {
  const { setShowAppointmentForm } = useFormStore()

  const details = [
    "CT Scanning - High-resolution imaging for precise diagnosis",
    "MRI Services - Advanced soft tissue imaging with zero radiation",
    "Digital X-Ray - Fast, accurate radiography with minimal exposure",
    "Ultrasound - Real-time imaging for organs and tissues",
    "Interventional Radiology - Minimally invasive treatment procedures",
  ]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mb-12 space-y-6">
          <div className="space-y-2">
            <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Advanced Radiology
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl">
            See beyond the surface with Dynasty's comprehensive imaging services. Our advanced radiology department features state-of-the-art equipment and expert radiologists who deliver the clear, detailed images healthcare providers need for accurate diagnosis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Capabilities</h2>
              <div className="space-y-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-body text-foreground font-semibold">{detail.split(" - ")[0]}</p>
                      <p className="font-body text-muted-foreground text-sm">{detail.split(" - ")[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-muted/30 p-8 rounded-lg border border-border">
            <h3 className="text-xl font-display font-bold text-foreground">Why Choose Our Radiology Services?</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Expert team of board-certified radiologists with years of experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Latest imaging technology ensuring minimal radiation exposure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Rapid turnaround on reports and imaging results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Patient-centered approach with comfortable facilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Integration with electronic health records for seamless care</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 space-y-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground">Schedule Your Radiology Service</h3>
          <p className="font-body text-muted-foreground">
            Get in touch with us today for your diagnostic imaging needs.
          </p>
          <button 
            onClick={() => setShowAppointmentForm(true)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
