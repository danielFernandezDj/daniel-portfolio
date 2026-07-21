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
const title = "Daniel Fernandez | Full-Stack Developer"
const description =
  "Production-focused portfolio for Daniel Fernandez, a full-stack developer building software that solves real problems."

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
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
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
        alt: "Daniel Fernandez portfolio preview",
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
