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
              and receive cleaned BTC to a designated address
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With MixCrypt, a Trusted Bitcoin Mixer Service, even your
            grandparents can make Bitcoins untraceable! You can decide how much
            bitcoin mixer fees you want to pay and how long the mixing process
            should take. More fees and a longer mixing time also means more
            anonymity.
          </p>
        </div>
      </div>

      {/* Stronger asymmetrical wave transition */}
      <div className="relative w-full overflow-hidden leading-none -mt-44">
        <svg
          className="w-full h-[400px]"
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
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Commonly asked questions
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                What you need to know about Bitcoin Mixers, how to use them and
                why you should use one?
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
