import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"


const geistSans = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-sans",
})

const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-mono",
})

const siteUrl = "https://danielfernandez.dev"
const title = "Daniel Fernandez | Software Test Automation Engineer"
const description =
  "Software Test Automation Engineer building reliable end-to-end automation across UI, API, data, and CI/CD workflows."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Daniel Fernandez Portfolio",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Daniel Fernandez",
    "Software Test Automation Engineer",
    "SDET",
    "QA Automation Engineer",
    "Playwright",
    "TypeScript",
    "Jest",
    "API Testing",
    "PostgreSQL",
    "GitHub Actions",
    "Portfolio",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Daniel Fernandez Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Daniel Fernandez, Software Test Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-white text-black antialiased ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
