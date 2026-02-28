import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ericmchavez.dev"),
  title: {
    default: "Eric Chavez | Software Engineer",
    template: "%s | Eric Chavez",
  },
  description:
    "Software engineer with frontend expertise and a full-stack mindset. Building design systems, UI components, and interactive web experiences.",
  openGraph: {
    title: "Eric Chavez | Software Engineer",
    description:
      "Frontend expertise. Full-stack mindset. Building software where the pieces work together.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eric Chavez - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Chavez | Software Engineer",
    description:
      "Frontend expertise. Full-stack mindset. Building software where the pieces work together.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
