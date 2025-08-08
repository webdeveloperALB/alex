// components/HeroSection.tsx

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="about-mixcrypt"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/Artboard 13.svg"
        alt="Background Decoration"
        className="absolute inset-0 w-[90%] h-[90%] object-cover opacity-30 z-0 m-auto"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="/images/Artboard 12.svg"
            alt="MixCrypto Logo"
            className="h-44 w-auto mx-auto"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 max-w-4xl leading-tight">
          Private. Secure. Effortless Bitcoin Mixing.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-3xl leading-relaxed">
          MixCrypto is built with privacy at its core. Backed by the Bitcoin
          community, our mission is to help you stay anonymous while keeping
          your funds safe and trace-free.
        </p>

        {/* CTA Button */}
        <Link href="#start-mixing">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-16 py-8 text-2xl font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Start Mixing Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
