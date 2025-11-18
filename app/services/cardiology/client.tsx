"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useFormStore } from "@/hooks/use-forms"

export default function CardiologyPageClient() {
  const { setShowAppointmentForm } = useFormStore()

  const details = [
    "ECG/EKG - Electrocardiogram for heart rhythm analysis",
    "Echocardiography - Ultrasound imaging of the heart",
    "Holter Monitoring - 24-hour heart rhythm recording",
    "Stress Testing - Cardiac function under physical stress",
    "Coronary Imaging - Advanced cardiovascular assessment",
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
              Cardiology Diagnostics
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl">
            Your heart health deserves expert attention. Dynasty's specialized cardiology diagnostic services provide comprehensive cardiovascular assessment using advanced technology and interpreted by experienced cardiac specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Diagnostic Services</h2>
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
            <h3 className="text-xl font-display font-bold text-foreground">Cardiovascular Health</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Early detection and prevention of heart disease</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Board-certified cardiologists and technicians</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>State-of-the-art cardiac imaging equipment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Risk stratification and personalized recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Coordination with your healthcare providers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 space-y-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground">Prioritize Your Heart Health</h3>
          <p className="font-body text-muted-foreground">Schedule your cardiology diagnostic evaluation today.</p>
          <button 
            onClick={() => setShowAppointmentForm(true)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            Book Cardiology Test
          </button>
        </div>
      </div>
    </div>
  )
}
