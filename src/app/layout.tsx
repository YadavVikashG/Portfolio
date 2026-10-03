import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikash Yadav | Full-Stack Developer",
  description:
    "The portfolio of Vikash Gajraj Yadav, a computer science graduate focused on full-stack software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}