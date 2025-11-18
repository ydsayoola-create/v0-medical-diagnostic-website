"use client"

import { useState } from "react"
import { X } from 'lucide-react'
import { useFormStore } from "@/hooks/use-forms"

export default function ContactInquiryForm() {
  const { showContactForm, setShowContactForm } = useFormStore()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const inquiryTypes = [
    "General Inquiry",
    "Provider Relations",
    "Research Collaboration",
    "Medical Consultancy",
    "Partnership Opportunity",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setShowContactForm(false)
      setIsSubmitted(false)
    }, 2000)
  }

  if (!showContactForm) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg p-8 max-w-md w-full text-center space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-primary text-2xl">✓</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground">Message Sent</h3>
          <p className="text-foreground/80 font-body">
            Thank you for reaching out. We'll get back to you shortly with more information.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-background rounded-lg p-8 max-w-2xl w-full my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Get in Touch</h2>
          <button
            onClick={() => setShowContactForm(false)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg font-body text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg font-body text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg font-body text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                placeholder="+234 700 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-2">Inquiry Type</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg font-body text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg font-body text-foreground bg-background focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="flex-1 px-6 py-3 border border-border text-foreground rounded-lg font-body font-semibold hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
