"use client"

import AppointmentForm from "./appointment-form"
import ContactInquiryForm from "./contact-inquiry-form"
import { useFormStore } from "@/hooks/use-forms"

export default function CTA() {
  const { setShowAppointmentForm } = useFormStore()

  return (
    <>
      <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
              Ready for Your Diagnostic Assessment?
            </h2>
            <p className="text-lg text-primary-foreground/90 font-body leading-relaxed">
              Schedule your appointment today and experience the Dynasty Global Medical difference. Our team is ready to
              provide you with comprehensive, accurate diagnostic services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAppointmentForm(true)}
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-body font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Book Appointment Now
            </button>
            <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary-foreground/10 transition-colors">
              Call Us: +234 703 920 1769
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
            {[
              { number: "500+", label: "Patients Served" },
              { number: "99.8%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">{stat.number}</p>
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
