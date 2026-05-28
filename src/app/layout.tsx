import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Melaya Palo | Perform with Resilience",
  description:
    "Personal training, fight camp programming, and virtual nutrition coaching with Melaya Palo. Built for athletes who want structure, intensity, and real results.",
  openGraph: {
    title: "Melaya Palo | Perform with Resilience",
    description:
      "Fight camp programming, virtual nutrition coaching, and mindset training. Built for athletes who want structure, intensity, and real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
