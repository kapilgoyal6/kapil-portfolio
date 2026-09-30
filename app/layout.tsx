import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapil Goyal | Senior Full Stack & AI Engineer",
  description:
    "Senior Full Stack Engineer specializing in Ruby on Rails, React, Next.js, AWS, PostgreSQL and AI/LLM integrations.",
  keywords: [
    "Kapil Goyal",
    "Ruby on Rails",
    "React",
    "Next.js",
    "AI Engineer",
    "Full Stack Engineer",
    "AWS",
    "PostgreSQL"
  ],
  openGraph: {
    title: "Kapil Goyal | Senior Full Stack & AI Engineer",
    description:
      "Building scalable SaaS products, AI-powered workflows and production-grade web applications.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}