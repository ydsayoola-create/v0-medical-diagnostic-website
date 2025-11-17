"use client"
import ServiceCard from "./service-card"

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-body text-sm font-semibold uppercase tracking-wider">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Comprehensive Diagnostic Solutions
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            We offer a full spectrum of diagnostic services delivered by highly trained specialists using
            state-of-the-art equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Advanced Radiology"
            description="State-of-the-art imaging services"
            icon="📸"
            details={[
              "CT Scanning - High-resolution imaging for precise diagnosis",
              "MRI Services - Advanced soft tissue imaging with zero radiation",
              "Digital X-Ray - Fast, accurate radiography with minimal exposure",
              "Ultrasound - Real-time imaging for organs and tissues",
              "Interventional Radiology - Minimally invasive treatment procedures",
            ]}
          />
          <ServiceCard
            title="Laboratory Services"
            description="Comprehensive blood and tissue analysis"
            icon="🧬"
            details={[
              "Hematology - Complete blood count and analysis",
              "Biochemistry - Blood chemistry and organ function tests",
              "Immunology - Allergy and immune system testing",
              "Serology - Infectious disease antibody detection",
              "Urinalysis - Comprehensive urine analysis",
            ]}
          />
          <ServiceCard
            title="Genetic Testing"
            description="Advanced molecular diagnostics"
            icon="🧪"
            details={[
              "Carrier Screening - Identify genetic disease risks",
              "Pharmacogenomics - Personalized medication guidance",
              "Cancer Risk Assessment - Family history analysis",
              "Non-invasive Prenatal Testing - Safe fetal screening",
              "Hereditary Disease Detection - Comprehensive genetic profiling",
            ]}
          />
          <ServiceCard
            title="Cardiology Diagnostics"
            description="Heart and vascular assessment"
            icon="❤️"
            details={[
              "ECG/EKG - Electrocardiogram for heart rhythm analysis",
              "Echocardiography - Ultrasound imaging of the heart",
              "Holter Monitoring - 24-hour heart rhythm recording",
              "Stress Testing - Cardiac function under physical stress",
              "Coronary Imaging - Advanced cardiovascular assessment",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
