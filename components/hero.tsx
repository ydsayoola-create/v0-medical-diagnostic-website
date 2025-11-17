export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">
            Premium Diagnostic Excellence
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight text-balance-custom">
            Precision in Every Diagnosis

          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Advanced diagnostic services and medical consultancy you can trust. From imaging to genetics, we deliver the clarity healthcare decisions demand.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors">
            Book Appointment
          </button>
          
        </div>

        <div className="pt-12">
          <img
            src="/modern-medical-diagnostic-facility-with-advanced-i.jpg"
            alt="Dynasty Global Medical Facility"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
