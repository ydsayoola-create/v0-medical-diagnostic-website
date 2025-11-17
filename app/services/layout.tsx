import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-background">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
