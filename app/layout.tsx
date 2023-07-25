import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
