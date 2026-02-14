"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  {
    src: "/images/gallery-1.jpeg",
    alt: "Portrait photograph with natural light and warm tones",
    title: "Golden Hour Portrait",
    category: "Portrait",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Minimalist architecture with dramatic shadows",
    title: "Urban Geometry",
    category: "Architecture",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Macro nature photography of morning dew",
    title: "Morning Dew",
    category: "Nature",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Moody street photography with neon reflections",
    title: "City Nights",
    category: "Street",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Aerial landscape of autumn forest with winding river",
    title: "Autumn From Above",
    category: "Landscape",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Long exposure ocean seascape at sunset",
    title: "Eternal Tide",
    category: "Seascape",
  },
]

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      )
    }
  }

  return (
    <section id="work" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl text-balance">
            A curated collection
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-12 flex items-center justify-start gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <button
              key={`${photo.src}-${photo.title}-${index}`}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/5] overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`View ${photo.title}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                  {photo.category}
                </p>
                <p className="mt-1 font-serif text-lg text-primary-foreground">
                  {photo.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50">
              {filteredPhotos[lightboxIndex].category}
            </p>
            <p className="mt-1 font-serif text-lg text-primary-foreground">
              {filteredPhotos[lightboxIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
