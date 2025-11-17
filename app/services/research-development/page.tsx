import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ResearchDevelopment() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8 font-body">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Research & Development
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Collaborative partnerships advancing the future of diagnostic medicine
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-display font-bold text-foreground">Service Overview</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Dynasty Global Medical Limited is committed to advancing diagnostic medicine through innovation and research. We collaborate with medical institutions, pharmaceutical companies, and research organizations to develop next-generation diagnostic solutions and evidence-based medical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">Key Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Clinical Research",
                description: "Diagnostic validation studies and clinical trial support",
              },
              {
                title: "Innovation Partnership",
                description: "Collaboration on new diagnostic technology development",
              },
              {
                title: "Professional Training",
                description: "Advanced training programs for diagnostic professionals",
              },
              {
                title: "Data Analysis",
                description: "Statistical analysis and epidemiological research support",
              },
              {
                title: "Medical Publications",
                description: "Support for peer-reviewed research publications",
              },
              {
                title: "Technology Transfer",
                description: "Implementation of cutting-edge diagnostic methodologies",
              },
            ].map((feature, index) => (
              <div key={index} className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-display font-bold text-foreground">Interested in Partnership or Research Collaboration?</h2>
          <p className="text-lg text-muted-foreground font-body">Let's discuss how we can advance diagnostic medicine together</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
            Contact Our Research Team
          </button>
        </div>
      </section>
    </main>
  )
}
