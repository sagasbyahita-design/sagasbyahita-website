import Image from "next/image"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Dramatic landscape photograph at golden hour"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
          sagasbyahita.eu
        </p>
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-7xl lg:text-8xl text-balance">
          Sagas by Ahita
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Every photo tells a saga.
        </p>
        <p className="mt-2 text-sm text-primary-foreground/60">
          Copenhagen, poland
        </p>
      </div>

      <Link
        href="#work"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        aria-label="Scroll to work section"
      >
        <ArrowDown className="h-6 w-6" />
      </Link>
    </section>
  )
}
