import type React from "react"
import type { Metadata } from "next"
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" })

export const metadata: Metadata = {
  title: "Dynasty Global Medical | Premium Diagnostic Services Nigeria",
  description:
    "Premium diagnostic medical facility in Nigeria offering comprehensive diagnostic services including radiology, laboratory, genetic testing, and cardiology diagnostics.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${plusJakartaSans.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
