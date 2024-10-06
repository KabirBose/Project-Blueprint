import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
