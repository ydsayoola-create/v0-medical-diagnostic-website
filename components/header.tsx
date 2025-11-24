"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHidden(true)
      } else {
        // Scrolling up - show header
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    const throttle = (func, limit) => {
      let inThrottle
      return function () {
        if (!inThrottle) {
          func.apply(this)
          inThrottle = true
          setTimeout(() => (inThrottle = false), limit)
        }
      }
    }

    window.addEventListener("scroll", throttle(handleScroll, 100))
    return () => window.removeEventListener("scroll", throttle(handleScroll, 100))
  }, [lastScrollY])

  const services = [
    { name: "Advanced Imaging & Radiology", href: "/services/radiology" },
    { name: "Laboratory & Pathology", href: "/services/laboratory" },
    { name: "Genetic & Molecular Diagnostics", href: "/services/genetic-testing" },
    { name: "Cardiology Diagnostics", href: "/services/cardiology" },
    { name: "Medical Consultancy", href: "/services/medical-consultancy" },
    { name: "Research & Development", href: "/services/research-development" },
  ]

  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section")
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Dynasty Global Medical" width={40} height={40} className="w-10 h-10" />
          <span className="font-display font-bold text-lg text-foreground hidden sm:inline">DGML</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`absolute md:relative top-full md:top-auto left-0 right-0 md:flex gap-8 bg-background md:bg-transparent border-b md:border-0 border-border md:items-center ${isOpen ? "block" : "hidden md:flex"} px-4 md:px-0 py-4 md:py-0`}
        >
          <div className="relative group">
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm">
              Services
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors font-body text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#about"
            className="block md:inline text-foreground hover:text-primary transition-colors font-body text-sm"
          >
            About
          </Link>

          <Link
            href="/for-patients"
            onClick={() => setIsOpen(false)}
            className="block md:inline text-foreground hover:text-primary transition-colors font-body text-sm"
          >
            For Patients
          </Link>

          <Link
            href="/for-providers"
            onClick={() => setIsOpen(false)}
            className="block md:inline text-foreground hover:text-primary transition-colors font-body text-sm"
          >
            For Providers
          </Link>

          <button
            onClick={scrollToCTA}
            className="block md:inline mt-4 md:mt-0 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-body text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  )
}
