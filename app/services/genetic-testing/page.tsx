import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Genetic Testing | Dynasty Global Medical",
  description:
    "Advanced molecular diagnostics including carrier screening, pharmacogenomics, cancer risk assessment, and prenatal testing.",
}

export default function GeneticTestingPage() {
  const details = [
    "Carrier Screening - Identify genetic disease risks",
    "Pharmacogenomics - Personalized medication guidance",
    "Cancer Risk Assessment - Family history analysis",
    "Non-invasive Prenatal Testing - Safe fetal screening",
    "Hereditary Disease Detection - Comprehensive genetic profiling",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">Genetic Testing</h1>
          </div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl">
            Unlock the power of personalized medicine with Dynasty's advanced genetic and molecular diagnostic services. From inherited disease screening to pharmacogenomics, we help you understand your genetic blueprint for better health outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Genetic Testing Services</h2>
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
            <h3 className="text-xl font-display font-bold text-foreground">Privacy & Confidentiality</h3>
            <ul className="space-y-3 font-body text-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Strict adherence to genetic privacy regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Secure data storage and encryption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Genetic counseling support for all tests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Detailed interpretation reports from specialists</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>Follow-up consultation options available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 space-y-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground">Begin Your Genetic Testing Journey</h3>
          <p className="font-body text-muted-foreground">
            Our genetic counselors are here to guide you through the process.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
