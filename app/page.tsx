import { Navbar } from "../navbar"
import { Hero } from "../hero"
import { Gallery } from "../gallery"
import { About } from "../about"
import { Contact } from "../contact"
import { Footer } from "../footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
