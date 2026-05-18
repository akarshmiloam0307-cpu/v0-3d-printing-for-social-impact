import { Factory, Printer } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section id="frameworks" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 rounded-2xl bg-secondary p-8 md:flex-row md:p-12">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl">
              Shifting Paradigms from Global to Local
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Traditional manufacturing relies heavily on centralized factories and expansive
              shipping networks. 3D printing introduces a decentralized alternative where design
              files travel digitally, and physical production happens instantly on-site. This
              drastically reduces carbon footprints and empowers communities to be self-reliant.
            </p>
          </div>
          <div className="flex min-h-[250px] flex-1 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50 p-8">
            <div className="flex flex-col items-center gap-6 text-center text-muted-foreground">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Factory className="h-12 w-12 text-muted-foreground/60" />
                  <span className="text-sm font-medium">Centralized</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl">→</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Printer className="h-12 w-12 text-primary" />
                  <span className="text-sm font-medium">Decentralized</span>
                </div>
              </div>
              <p className="text-sm font-medium">Infographic: Centralized vs. Decentralized Production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
