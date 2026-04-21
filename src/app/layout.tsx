import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Navbar/footer/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarah's Blog",
  description: "The best Blog to learn about me",
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
      <body className="min-h-full flex flex-col">
        {/* Main wrapper to center content */}
        <div className="container">
          <div className = 'wrapper'></div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
