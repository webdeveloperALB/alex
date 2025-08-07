"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-b from-[#FF7A7A] via-[#FF9B9B] to-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/Artboard 11.png"
            alt="MIXCRYPT Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white font-medium hover:text-black/80 transition-colors"
          >
            About MixCrypt
          </Link>
          <Link
            href="/how-it-works"
            className="text-white font-medium hover:text-black/80 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/benefits"
            className="text-white font-medium hover:text-black/80 transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/faqs"
            className="text-white font-medium hover:text-black/80 transition-colors"
          >
            FAQs
          </Link>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          className="bg-transparent border-2 border-black text-white font-semibold px-6 py-2 hover:bg-black hover:text-white transition-colors"
        >
          Start Mixing
        </Button>
      </div>
    </nav>
  );
}
