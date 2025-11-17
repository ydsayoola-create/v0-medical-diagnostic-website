export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">
                About Dynasty Global Medical
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Excellence in Diagnostic Care
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Founded with a commitment to elevate healthcare standards in Nigeria, Dynasty Global Medical Limited stands as a beacon of diagnostic excellence. We combine international best practices with local expertise to deliver unparalleled diagnostic services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To provide accurate, timely, and compassionate diagnostic services that empower patients and healthcare
                providers with the insights needed for optimal health outcomes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">Our Values</h3>
              <ul className="space-y-3">
                {[
                  "Expert specialists with international credentials",
                  "Latest diagnostic technology and equipment",
                  "Patient-centric care approach",
                  "Rapid turnaround on results",
                  "Competitive pricing without compromising quality",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent text-lg flex-shrink-0">✓</span>
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <img src="/professional-medical-team-in-diagnostic-laboratory.jpg" alt="Medical Team" className="w-full h-auto rounded-lg shadow-lg" />
            <img
              src="/advanced-medical-diagnostic-equipment-and-technolo.jpg"
              alt="Diagnostic Equipment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
