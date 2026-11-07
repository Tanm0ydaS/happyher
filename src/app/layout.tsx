
import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Caveat,
} from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Little Birthday Surprise ❤️",
  description:
    "A beautiful birthday surprise made with love, filled with memories, heartfelt wishes, and little moments worth remembering.",

  applicationName: "A Little Birthday Surprise",

  openGraph: {
    title: "A Little Birthday Surprise ❤️",
    description: "A special birthday surprise made with love.",
    type: "website",
    siteName: "A Little Birthday Surprise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A Little Birthday Surprise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "A Little Birthday Surprise ❤️",
    description: "A special birthday surprise, made with love.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF8FC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
