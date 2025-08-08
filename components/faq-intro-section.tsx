"use client";

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative min-h-screen w-full flex flex-col"
    >
      {/* Top section - white background */}
      <div className="bg-white pt-20 flex-grow w-full">
        <div className="w-full px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-red-500">Blend your BTC</span>{" "}
            <span className="text-black">
              and receive anonymized coins to your chosen addresses
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            MixCrypt is a trusted Bitcoin mixer that puts privacy in your hands.
            You control the fee and time delay for each transaction—giving you
            full flexibility over how your coins are anonymized. Higher fees and
            longer delays increase the strength of the mixing process, providing
            enhanced protection against blockchain analysis.
          </p>
        </div>
      </div>

      {/* Stronger asymmetrical wave transition */}
      <div className="relative w-full overflow-hidden leading-none -mt-80">
        <svg
          className="w-full h-[600px]"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,260 C360,380 1080,80 1440,180 L1440,300 L0,300 Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Bottom section - black background */}
      <div className="bg-black py-20 w-full">
        <div className="w-full px-4 h-full">
          <div className="grid grid-cols-[auto_auto] justify-center items-center gap-24 h-full">
            {/* Left side - Content */}
            <div>
              <h3 className="text-7xl font-bold text-white mb-6 max-w-2xl">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-300 text-2xl max-w-2xl leading-relaxed">
                Learn how Bitcoin mixers work, why MixCrypt prioritizes your
                anonymity, and how to securely use our platform.
              </p>
            </div>

            {/* Right side - Logo */}
            <div className="flex justify-center">
              <div className="w-auto h-0 flex items-center justify-center bg-black">
                <img
                  src="/images/Artboard 14.svg"
                  alt="MixCrypt Symbol"
                  className="w-auto h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
