import { Geist, Geist_Mono, Inter, Urbanist } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { NavBar } from "@/components/NavBar"

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sinfonía Café",
  description: "Los mejores cafés de la región de Lengupá",
  openGraph: {
    title: "Sinfonía Café",
    description: "Los mejores cafés de la región de Lengupá",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        urbanist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
