import { Inter as FontSans } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster"

interface RootLayoutProps {
  children: ReactNode
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
