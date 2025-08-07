"use client";

export default function PrivacySection() {
  return (
    <section className="relative pt-4 pb-8 bg-white overflow-hidden w-full">
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-center w-full">
          {/* Left side – Illustration flush to the left */}
          <div className="relative flex justify-start items-center h-[650px] w-full">
            <img
              src="/images/Artboard 100@2x.png"
              alt="Privacy Illustration"
              className="relative z-20 w-auto h-[700px] object-contain ml-0"
            />
          </div>

          {/* Right side – Content, text pushed left and text left-aligned on large screens */}
          <div className="space-y-8 w-full text-center lg:text-left lg:pl-16 lg:pr-8">
            <div>
              <h2 className="text-8xl lg:text-7xl font-bold text-black mb-4">
                Total privacy.
              </h2>
              <h3 className="text-6xl lg:text-6xl font-bold text-rose-600 mb-8">
                No compromise.
              </h3>
            </div>

            <p className="text-xl lg:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We are 100% committed to our zero-logs policy — we never log the
              activities of our users to ensure their ultimate privacy and
              security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
