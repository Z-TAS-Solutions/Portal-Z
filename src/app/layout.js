import { Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
    <html lang="en" className="scroll-smooth w-full bg-zink-950">
      <body className={`${audiowide.variable} antialiased w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
