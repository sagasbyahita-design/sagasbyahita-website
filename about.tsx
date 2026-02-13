import Image from "next/image"
import { Camera, Mountain, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-secondary px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]">
          <Image
            src="/images/about.jpg"
            alt="Photographer holding a camera outdoors"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">
            About
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl text-balance">
            The story behind the lens
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {
              "I'm Ahita, a passionate photographer based in Copenhagen, Denmark. I believe every photo tells a saga \u2014 a story waiting to be seen, felt, and remembered. My lens captures the beauty in life's most meaningful moments."
            }
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {
              "From the joy of weddings and the tenderness of maternity shoots to vibrant events and stunning product imagery \u2014 I pour my heart into every frame. Let's create your saga together."
            }
          </p>

          {/* Stats / values */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-start gap-3">
              <Camera className="h-5 w-5 text-foreground" />
              <p className="font-serif text-2xl text-foreground">10+</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Years of professional photography experience
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Mountain className="h-5 w-5 text-foreground" />
              <p className="font-serif text-2xl text-foreground">30+</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Countries explored and documented through the lens
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Heart className="h-5 w-5 text-foreground" />
              <p className="font-serif text-2xl text-foreground">200+</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Happy clients and published editorial features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
