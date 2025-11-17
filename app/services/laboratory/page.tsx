import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Laboratory Services | Dynasty Global Medical",
  description:
    "Comprehensive blood and tissue analysis including hematology, biochemistry, immunology, serology, and urinalysis.",
}

export default function LaboratoryPage() {
  const details = [
    "Hematology - Complete blood count and analysis",
    "Biochemistry - Blood chemistry and organ function tests",
    "Immunology - Allergy and immune system testing",
    "Serology - Infectious disease antibody detection",
    "Urinalysis - Comprehensive urine analysis",
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
              Laboratory Services
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl">
            Precision laboratory diagnostics that healthcare providers and patients can trust. Our comprehensive pathology services combine advanced testing technology with meticulous quality control and expert interpretation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Services</h2>
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
            <h3 className="text-xl font-display font-bold text-foreground">Quality Assurance</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>ISO 15189 certified laboratory standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Rigorous quality control protocols</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Regular staff training and competency assessments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Reference laboratory partnerships for specialized tests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Same-day results for most common tests</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 space-y-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground">Order Laboratory Tests Today</h3>
          <p className="font-body text-muted-foreground">
            Contact our laboratory team for corporate packages and individual testing.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
            Request Lab Services
          </button>
        </div>
      </div>
    </div>
  )
}
