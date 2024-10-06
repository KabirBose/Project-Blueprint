import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";

const generalSans = localFont({
  src: "../fonts/general-sans.ttf",
  variable: "--font-general",
});

export const metadata: Metadata = {
  title: "Project Blueprint",
  description: "The modern schedule builder for colleges and universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} font-general`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
