import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pilcrowRounded = localFont({
  src: "../fonts/pilcrow-rounded.ttf",
  variable: "--font-pilcrow-rounded",
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
      <body className={`${pilcrowRounded.variable} font-pilcrow`}>
        {children}
      </body>
    </html>
  );
}
