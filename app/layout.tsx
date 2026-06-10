import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { HashScroll } from "@/components/hash-scroll";
import { SITE_URL } from "@/lib/site";

// Match the Replai dashboard's typeface (Geist) for a single brand voice
// across the marketing site and the product.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Replai — AI customer support & sales for South African businesses",
  description:
    "Replai is one AI agent that lives on your WhatsApp Business number and as a chat widget on your site. It books, sells, qualifies and escalates — 24/7.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <div className="min-h-screen flex flex-col bg-brand-mesh">
          <HashScroll />
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
