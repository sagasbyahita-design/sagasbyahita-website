import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="font-serif text-lg tracking-tight text-foreground">
          Sagas by Ahita
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="#work"
                className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/sagasbyahita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1P4gttKrN6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Facebook
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Sagas by Ahita. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
