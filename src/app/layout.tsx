import type { Metadata } from "next";
import { Archivo, Big_Shoulders, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  title: {
    default: "IEMS — Event Infrastructure Since 2002 | New Delhi · Jaipur · Chandigarh",
    template: "%s | IEMS",
  },
  description:
    "Inter Event Management Services — full-service event management since 2002. Conferences, exhibitions, launches and VVIP ceremonies, planned and produced in-house, with our own hangars, halls and infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable} scroll-smooth`}
    >
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-on-accent"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
