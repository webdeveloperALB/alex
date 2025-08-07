// components/HowItWorksSection.tsx

"use client";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
            How <span className="text-red-500">MIxCRYPT</span> works
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mix your BTCs and make them untraceable. MIxCrypt send you clean
            coins automatically after mixing. We do not store any logs or data
            from you and after mixing, you can delete your order self or we will
            delete it automatically.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Enter Addresses */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/ddress.png"
                alt="Enter Addresses Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Enter Addresses
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Enter up to five BTC addresses and send the coins you want to mix
              to the newly generated address. Only one confirmation is needed.
            </p>
          </div>

          {/* Card 2 - 100% Anonymous */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/anonymous.png"
                alt="Anonymous Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              100% Anonymous
            </h3>
            <p className="text-gray-300 leading-relaxed">
              MIxCRYPT shuffles your coins and makes them untraceable. We don't
              save any logs from you even not your IP Address. All orders are
              deleted.
            </p>
          </div>

          {/* Card 3 - Receive Clean BTC */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/receive.png"
                alt="Receive Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Receive Clean BTC
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Once the mixing process is complete, MIxCrypt will send you new,
              clean BTCs, with the delay you choose, to your addresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
