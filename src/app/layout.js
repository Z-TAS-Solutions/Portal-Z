import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import MainWrapper from "./Main.jsx";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  preload: false,
});

export const metadata = {
  title: "ZTAS",
  description: "Zero Touch Authorization System",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth w-full bg-zink-950 overflow-x-hidden"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} antialiased w-full`}
      >
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
