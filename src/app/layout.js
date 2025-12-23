import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

export const metadata = {
  title: "ZTAS",
  description: "Zero Touch Authorization System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth w-full bg-zink-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} antialiased w-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
