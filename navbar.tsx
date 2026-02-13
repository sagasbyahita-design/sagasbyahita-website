"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
          Sagas by Ahita
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="#work"
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-0">
            <li>
              <Link
                href="#work"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
