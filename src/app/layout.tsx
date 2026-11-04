import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "For My Dearest Chetanya 🎂 | Happy 20th Birthday",
  description: "A special corner of the universe celebrating Chetanya's 20th birthday — her warmth, pure heart, her IIM Ahmedabad dream, and the eternal bond of brotherhood from her Bhaiya Aditya.",
  keywords: "Chetanya, 20th Birthday, IIM Ahmedabad, Brotherhood, Sister, Bhaiya, Aditya",
  authors: [{ name: "Made with endless blessings by your Bhaiya, Aditya" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "For My Dearest Chetanya 🎂 | Happy 20th Birthday",
    description: "May you reach IIM Ahmedabad, and may every bit of effort come back to you as success that makes you smile. Happy 20th Birthday, small sis! ✨",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${caveat.variable} font-inter antialiased bg-deepBlack text-softIvory`}>
        {children}
      </body>
    </html>
  );
}
