"use client"

import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { useFormStore } from '@/hooks/use-forms'

export default function ForPatientsPage() {
  const { setShowAppointmentForm } = useFormStore()

  const steps = [
    {
      number: '1',
      title: 'Schedule Your Test',
      description: 'Book online, call us, or visit our facility. Bring your doctor\'s referral if you have one, or speak with our team about the tests you need.',
    },
    {
      number: '2',
      title: 'Visit Our Facility',
      description: 'Our friendly staff will guide you through the process. Most tests are quick, comfortable, and our team ensures you understand what to expect.',
    },
    {
      number: '3',
      title: 'We Process Your Samples/Images',
      description: 'Our expert technicians and specialists use advanced technology and rigorous quality control to ensure accurate results.',
    },
    {
      number: '4',
      title: 'Receive Your Results',
      description: 'Access your results securely online or receive them via your preferred method. Results are also shared with your referring physician.',
    },
    {
      number: '5',
      title: 'Understand Your Results',
      description: 'Have questions? Our medical consultants are available to explain your results and next steps.',
    },
  ]

  const commonTests = [
    'Health Screening Packages',
    'Pre-Employment Medicals',
    'Executive Health Check-ups',
    'Pregnancy Monitoring',
    'Chronic Disease Management',
    'Cancer Screening',
  ]

  const preparations = [
    { title: 'Fasting Tests', description: 'No food or drink (except water) for 8-12 hours' },
    { title: 'Imaging Studies', description: 'Follow specific preparation instructions provided' },
    { title: 'Bring', description: 'Valid ID, doctor\'s referral (if applicable), previous results' },
    { title: 'Medications', description: 'Take regular medications unless specifically instructed otherwise' },
  ]

  return (
    <main className="pt-24">
      <div className="fixed top-20 left-0 right-0 z-40 bg-background/95 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-body text-sm font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground text-balance mb-4">
            Diagnostic Services for Patients
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            Your health matters. Whether you're here for routine screening, following up on symptoms, or seeking answers about your health, Dynasty Global Medical provides the diagnostic clarity you need with the care you deserve.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            How It Works
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Tests */}
      <section className="w-full bg-muted/40 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Common Tests & Screenings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonTests.map((test, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
                <CheckCircle2 className="flex-shrink-0 text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {test}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Comprehensive diagnostic evaluation tailored to your needs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Preparing for Your Test
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Different tests require different preparation. When you book, we'll provide specific instructions, but here are common guidelines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparations.map((prep, index) => (
              <div key={index} className="p-6 border border-border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {prep.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {prep.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="w-full bg-muted/40 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-balance">
            Insurance & Payment
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            We work with major insurance providers and offer flexible payment options. Contact us to verify coverage and discuss payment plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowAppointmentForm(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Your Test Now
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition-colors">
              View Health Packages
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition-colors">
              FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24" id="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Phone className="text-accent mb-3" size={32} />
              <h3 className="font-display font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground font-body">+234 (0) XXX XXX XXXX</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Mail className="text-accent mb-3" size={32} />
              <h3 className="font-display font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground font-body">info@dynastyglobal.ng</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <MapPin className="text-accent mb-3" size={32} />
              <h3 className="font-display font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground font-body">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
