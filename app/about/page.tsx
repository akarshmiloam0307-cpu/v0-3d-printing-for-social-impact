import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Globe } from "lucide-react"

export const metadata = {
  title: "About | AETHER Impact",
  description: "Learn about our mission to explore how 3D printing technology impacts society through healthcare, humanitarian aid, and ethical frameworks.",
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To research and communicate how 3D printing technology transforms communities, improves healthcare access, and creates sustainable solutions for global challenges.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "A world where additive manufacturing empowers individuals and communities to solve local problems with innovative, accessible technology.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "We are researchers, educators, and advocates passionate about the intersection of technology and social good.",
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "From prosthetics in developing nations to emergency shelter solutions, we document and promote real-world applications of 3D printing for humanity.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[oklch(0.15_0.02_250)] to-[oklch(0.22_0.03_250)] px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
              About <span className="text-violet-400">AETHER Impact</span>
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              We are dedicated to exploring and sharing how 3D printing technology creates meaningful change in society. Our research bridges the gap between cutting-edge manufacturing and real-world social impact.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              What We Stand For
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
                      <value.icon className="h-6 w-6 text-violet-500" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                AETHER Impact was founded with a simple yet powerful idea: technology should serve humanity. As 3D printing evolved from a niche prototyping tool to a transformative manufacturing method, we recognized its potential to address some of the world&apos;s most pressing challenges.
              </p>
              <p className="leading-relaxed">
                From creating affordable prosthetics for amputees in underserved regions to printing emergency shelters for disaster relief, the applications of additive manufacturing continue to expand. Our role is to document these innovations, analyze their societal implications, and advocate for responsible development.
              </p>
              <p className="leading-relaxed">
                Today, we collaborate with researchers, humanitarian organizations, and policymakers to ensure that 3D printing technology benefits everyone, not just those with access to expensive equipment and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-[oklch(0.15_0.02_250)] to-[oklch(0.22_0.03_250)] px-6 py-16 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Get Involved</h2>
            <p className="mb-8 text-slate-300">
              Interested in collaborating or learning more about our research? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:contact@aetherimpact.org"
              className="inline-flex items-center justify-center rounded-lg bg-violet-500 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-600"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
