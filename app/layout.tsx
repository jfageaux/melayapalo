import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const DESCRIPTION =
  "Personal training, fight camp programming, and virtual nutrition coaching with Melaya Palo. Built for athletes who want structure, intensity, and real results.";

export const metadata: Metadata = {
  metadataBase: new URL("https://melayapalo.vercel.app"),
  title: "Melaya Palo | Perform with Resilience",
  description: DESCRIPTION,
  openGraph: {
    title: "Melaya Palo | Perform with Resilience",
    description: DESCRIPTION,
    type: "website",
    images: ["/hero-boxing.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} font-sans`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <div className="grain" aria-hidden />
        <Nav />
        {children}
      </body>
    </html>
  );
}
