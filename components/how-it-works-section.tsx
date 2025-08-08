"use client";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
            How <span className="text-red-500">MixCrypt</span> Works
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            MixCrypt makes your Bitcoin transactions completely untraceable
            through a secure and automated process. We never store logs,
            transaction data, or IP addresses. Once your mix is complete, the
            order is deleted—automatically or by you.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/ddress.png"
                alt="Enter Addresses Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Submit Output Addresses
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Provide up to five BTC addresses where you want to receive your
              mixed coins. Then send your Bitcoin to the unique address we
              generate. Just one network confirmation is required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/anonymous.png"
                alt="Anonymous Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Anonymization Process
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your Bitcoin is mixed through a secure process that breaks the
              link to its origin. We do not log your data, track your IP
              address, or retain any order information.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="mb-6">
              <img
                src="/images/receive.png"
                alt="Receive Icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Receive Clean Bitcoin
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Once mixing is complete, clean BTC is automatically sent to your
              selected addresses with a time delay of your choosing—enhancing
              privacy and reducing traceability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
