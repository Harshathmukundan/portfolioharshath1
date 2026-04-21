import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Harshath Mukundan — Full Stack Developer",
  description:
    "Portfolio of Harshath Mukundan — Full Stack Developer & AI/ML Engineer at SRMIST. React, Next.js, Node.js, Express, TypeScript, AWS.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "TypeScript", "AWS", "SRMIST"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
