import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Recipe Generator",
  description: "Elevate your cooking with AI-generated recipes and visuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}>
        <nav className="flex justify-start items-center px-8 py-4 bg-white shadow-md space-x-6">
          <div className="text-xl font-semibold">
            <Link href="/">AI Recipe Generator</Link>
          </div>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/create" className="hover:underline">Generate</Link>
          <Link href="/recipes" className="hover:underline">Recipes</Link>
          <Link href="/#how_it_works" className="hover:underline">How It Works</Link>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="px-8 py-4 bg-gray-100 text-center border-t">
          <p className="text-sm text-gray-600">
            Follow us on social media for updates and inspiration:
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
