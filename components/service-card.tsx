"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details: string[]
}

export default function ServiceCard({ title, description, icon, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${
        isExpanded ? "bg-card shadow-lg" : "bg-card hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex gap-4 items-start flex-1">
          <span className="text-4xl">{icon}</span>
          <div className="flex-1">
            <h3 className="text-xl font-display font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground font-body text-sm mt-1">{description}</p>
          </div>
        </div>
        <div className="ml-4 mt-1 flex-shrink-0">
          {isExpanded ? (
            <ChevronUp size={20} className="text-primary" />
          ) : (
            <ChevronDown size={20} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-border px-6 py-6 bg-background/50 space-y-3">
          {details.map((detail, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-accent text-lg flex-shrink-0">✓</span>
              <p className="font-body text-foreground text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
