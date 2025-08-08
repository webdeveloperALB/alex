"use client";

export default function PrivacySection() {
  return (
    <section className="relative pt-4 pb-8 bg-white overflow-hidden w-full">
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-center w-full">
          {/* Left side – Illustration */}
          <div className="relative flex justify-start items-center h-[650px] w-full">
            <img
              src="/images/Artboard 100@2x.png"
              alt="Privacy Illustration"
              className="relative z-20 w-auto h-[700px] object-contain ml-0"
            />
          </div>

          {/* Right side – Content */}
          <div className="space-y-8 w-full text-center lg:text-left lg:pl-16 lg:pr-8">
            <div>
              <h2 className="text-8xl lg:text-7xl font-bold text-black mb-4">
                Unmatched Privacy.
              </h2>
              <h3 className="text-6xl lg:text-6xl font-bold text-rose-600 mb-8">
                Built for trust.
              </h3>
            </div>

            <p className="text-xl lg:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              MixCrypto is engineered with privacy as a core principle. We
              enforce a strict zero-logs policy and never collect user data or
              transaction metadata. No tracking. No storage. No compromise. Just
              secure, anonymous Bitcoin mixing — backed by transparency and
              trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
