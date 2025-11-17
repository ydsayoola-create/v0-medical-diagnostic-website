import Hero from "@/components/hero"
import About from "@/components/about"
import Technology from "@/components/technology"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      {/* Services section removed - now on individual service pages */}
      <About />
      <Technology />
      <CTA />
      <Footer />
    </main>
  )
}
