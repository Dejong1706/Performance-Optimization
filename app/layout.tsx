import "./globals.css";

import CategoryBar from "./components/ui/categoryBar";
import Footer from "./components/footer";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import QueryProvider from "./provider/queryProvider";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "World News",
  description: "A Service where you can access news from all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Navbar />
          <CategoryBar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
