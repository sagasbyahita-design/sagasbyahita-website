import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../theme-provider"

export const metadata: Metadata = {
  title: "Sagas by Ahita",
  description: "Every photo tells a saga.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
