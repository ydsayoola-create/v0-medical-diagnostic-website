import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function MedicalConsultancy() {
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
              Medical Consultancy
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Expert diagnostic consultation services for healthcare providers, institutions, and organizations
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
              Dynasty Global Medical Limited provides specialized medical consultation services to healthcare facilities, institutions, and medical professionals. Our expert consultants bring years of diagnostic experience and clinical excellence to support your organization's diagnostic capabilities and medical decision-making.
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
                title: "Second Opinion Services",
                description: "Comprehensive diagnostic reviews and expert opinions on complex cases",
              },
              {
                title: "Institution Training",
                description: "Staff training and professional development programs for healthcare providers",
              },
              {
                title: "Protocol Development",
                description: "Customized diagnostic protocols for healthcare institutions",
              },
              {
                title: "Quality Assurance",
                description: "Diagnostic quality assessment and improvement recommendations",
              },
              {
                title: "Case Reviews",
                description: "Detailed analysis of diagnostic cases for clinical correlation",
              },
              {
                title: "Capacity Building",
                description: "Strategies to enhance diagnostic capabilities and resources",
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
          <h2 className="text-3xl font-display font-bold text-foreground">Ready to Enhance Your Diagnostic Services?</h2>
          <p className="text-lg text-muted-foreground font-body">Contact us to learn more about our consultancy offerings</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
}
