'use client'

import { CheckCircle2, Users, Zap, TrendingUp, Award, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ForProvidersPage() {
  const scrollToBooking = () => {
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const whyPartner = [
    {
      icon: Award,
      title: 'Reliability You Can Trust',
      description: 'Consistent accuracy, quality control, and timely reporting that your practice depends on.',
    },
    {
      icon: Zap,
      title: 'Comprehensive Service Menu',
      description: 'From routine labs to specialized molecular diagnostics—reduce referrals by accessing all diagnostic services through one trusted partner.',
    },
    {
      icon: Users,
      title: 'Expert Consultation Available',
      description: 'Direct access to our specialist physicians for case discussion, result interpretation, and diagnostic guidance.',
    },
    {
      icon: TrendingUp,
      title: 'Seamless Integration',
      description: 'Easy ordering systems, digital result delivery, and efficient communication protocols that fit your workflow.',
    },
  ]

  const services = [
    'Complete laboratory testing with rapid turnaround',
    'Advanced imaging with expert radiologist interpretation',
    'Genetic testing with counseling support',
    'Specialized pathology with detailed reporting',
    'Cardiology diagnostics with comprehensive assessment',
    'Custom testing panels for specific patient populations',
    'Research collaboration opportunities',
    'Bulk testing arrangements for screening programs',
  ]

  const gettingStarted = [
    {
      number: '1',
      title: 'Register Your Practice',
      description: 'Simple onboarding process to set up your account and ordering privileges.',
    },
    {
      number: '2',
      title: 'Refer Your Patients',
      description: 'Multiple referral options: online portal, phone, fax, or have patients book directly with your referral.',
    },
    {
      number: '3',
      title: 'Receive Results',
      description: 'Secure, digital result delivery directly to your practice with alert notifications for critical values.',
    },
    {
      number: '4',
      title: 'Consult When Needed',
      description: 'Direct line to our specialists for case discussion and diagnostic consultation.',
    },
  ]

  const resources = [
    'Downloadable referral forms',
    'Test catalog with specimen requirements',
    'Continuing medical education materials',
    'Clinical case studies',
    'Industry updates and newsletters',
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
            Partnership with Healthcare Providers
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            Dynasty Global Medical is committed to being your trusted diagnostic partner. We support your clinical decisions with accurate, timely results and expert consultation—allowing you to focus on what you do best: caring for patients.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Why Partner with Dynasty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartner.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex gap-4 p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <IconComponent className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services for Providers */}
      <section className="w-full bg-muted/40 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Our Services for Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 className="flex-shrink-0 text-accent mt-1" size={20} />
                <p className="text-foreground font-body">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Getting Started
          </h2>
          <div className="space-y-8">
            {gettingStarted.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground font-display font-bold text-lg">
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

      {/* Provider Resources */}
      <section className="w-full bg-muted/40 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-balance">
            Provider Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 className="flex-shrink-0 text-primary" size={20} />
                <p className="text-foreground font-body">
                  {resource}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
              Register Your Practice
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition-colors">
              Download Test Catalog
            </button>
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary/5 transition-colors"
            >
              Contact Provider Relations
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24" id="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who trust Dynasty Global Medical for their diagnostic needs. Let's work together to deliver better patient outcomes.
          </p>
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}
