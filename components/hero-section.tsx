import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { Animated3DPrinter } from "./animated-3d-printer"

export function HeroSection() {
  return (
    <header
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.15_0.02_250)] to-[oklch(0.22_0.03_250)] px-6 py-24 text-white md:py-32"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              3D Printing: How It Impacts Society
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 md:text-xl lg:mx-0">
              Exploring how 3D printing and additive manufacturing reshapes healthcare, updates legal
              and ethical paradigms, and drives localized humanitarian aid across the globe.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#impacts" className="inline-flex items-center gap-2">
                Explore the Impact
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Animated3DPrinter />
          </div>
        </div>
      </div>
    </header>
  )
}
