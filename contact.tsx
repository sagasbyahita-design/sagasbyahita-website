"use client"

import { useState } from "react"
import { Mail, Instagram, Send, Phone, MapPin, Facebook } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Contact
            </p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl text-balance">
              {"Let's create something together"}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {
                "Whether you have a project in mind or just want to say hello, I'd love to hear from you. Fill out the form or reach me directly."
              }
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:sagasbyahita@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                sagasbyahita@gmail.com
              </a>
              <a
                href="tel:+4591628025"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +45 91 62 80 25
              </a>
              <a
                href="https://www.instagram.com/sagasbyahita"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                @sagasbyahita
              </a>
              <a
                href="https://www.facebook.com/share/1P4gttKrN6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Copenhagen, Denmark
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-foreground">
                  <Send className="h-5 w-5 text-background" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Thank you for reaching out. I'll get back to you soon."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm tracking-widest uppercase text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 self-start bg-foreground px-8 py-3 text-xs tracking-widest uppercase text-background transition-opacity hover:opacity-80"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
