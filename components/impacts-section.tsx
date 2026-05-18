import { Stethoscope, Globe, Scale } from "lucide-react"
import { ImpactCard } from "@/components/impact-card"

const impacts = [
  {
    icon: Stethoscope,
    title: "Healthcare & Prosthetics",
    description:
      "Revolutionizing patient care through low-cost, custom-fit medical devices and patient-specific anatomical models, bringing personalized medicine to underserved communities.",
  },
  {
    icon: Globe,
    title: "Humanitarian Relief",
    description:
      "Enabling real-time, localized production of critical supplies and infrastructure in crisis zones, bypassing traditional, fragile supply chains during disasters.",
  },
  {
    icon: Scale,
    title: "Legal & Ethical Frameworks",
    description:
      "Examining the necessary evolution of intellectual property laws, safety certifications, and accountability protocols as manufacturing becomes fully decentralized.",
  },
]

export function ImpactsSection() {
  return (
    <section id="impacts" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Key Pillars of Social Impact
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact) => (
            <ImpactCard
              key={impact.title}
              icon={impact.icon}
              title={impact.title}
              description={impact.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
