import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Phạm Huỳnh Hữu Tiến - Portfolio",
  description: "My personal portfolio built with Next.js 15",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto p-8 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
