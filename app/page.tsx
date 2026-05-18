import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ImpactsSection } from "@/components/impacts-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ImpactsSection />
        <ShowcaseSection />
      </main>
      <Footer />
    </div>
  )
}
