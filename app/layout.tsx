import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Invicttus - Where Vision Meets Innovation",
  description:
    "Transform ideas into reality together with premium-quality solutions",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-black text-white min-h-screen relative overflow-x-hidden`}
      >
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
