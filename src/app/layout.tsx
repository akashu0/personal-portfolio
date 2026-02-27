import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/ui/noise-overlay";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashkumar.store"),
  title: "Akash Kumar | Full Stack Developer — React, Node.js, Microservices",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js & Microservices architecture. View projects and get in touch.",
  authors: [{ name: "Akash Kumar" }],
  keywords: [
    "Full Stack Developer", "React Developer", "Next.js", "Node.js",
    "Microservices", "TypeScript", "Docker", "AWS", "Kerala", "India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashkumar.store",
    siteName: "Akash Kumar — Portfolio",
    title: "Akash Kumar | Full Stack Developer — React, Node.js, Microservices",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & Microservices. Open to remote & hybrid roles.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Akash Kumar — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Kumar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & Microservices. Open to remote & hybrid roles.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://akashkumar.store",
  },
};

import CustomCursor from "@/components/ui/cursor";
import Background from "@/components/ui/background";
import SmoothScroll from "@/components/ui/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akash Kumar",
              jobTitle: "Full Stack Developer",
              url: "https://akashkumar.store",
              email: "akashdotcom123@gmail.com",
              description:
                "Full Stack Developer specializing in React, Next.js, Node.js, and Microservices architecture.",
              image: "https://akashkumar.store/og-image.webp",
              sameAs: [
                "https://github.com/akashu0",
                "https://www.linkedin.com/in/akash-kumar-609154217/",
              ],
              knowsAbout: [
                "React", "Next.js", "Node.js", "TypeScript",
                "Microservices", "Docker", "AWS", "MongoDB", "PostgreSQL",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-9999 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
          >
            Skip to content
          </a>

          <SmoothScroll />
          <Background />
          <NoiseOverlay />
          <CustomCursor />
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
