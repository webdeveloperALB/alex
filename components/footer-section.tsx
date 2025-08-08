// components/FooterSection.tsx

"use client";

export default function FooterSection() {
  return (
    <section id="start-mixing" className="relative bg-black py-20 w-full">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <circle
            cx="200"
            cy="150"
            r="80"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="150"
            r="120"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
          <polygon
            points="300,100 350,150 300,200 250,150"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />

          <circle
            cx="800"
            cy="200"
            r="60"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="800"
            cy="200"
            r="100"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
          <polygon
            points="900,150 950,200 900,250 850,200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />

          <line
            x1="280"
            y1="150"
            x2="720"
            y2="200"
            stroke="white"
            strokeWidth="0.3"
          />
          <line
            x1="350"
            y1="100"
            x2="850"
            y2="150"
            stroke="white"
            strokeWidth="0.3"
          />
          <line
            x1="200"
            y1="270"
            x2="800"
            y2="300"
            stroke="white"
            strokeWidth="0.3"
          />

          <rect
            x="500"
            y="300"
            width="80"
            height="80"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="540"
            cy="340"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full px-6 text-center pt-24 pb-24">
        {/* Main content */}
        <div className="mb-20 relative flex items-center justify-center">
          {/* Background SVG centered */}
          <img
            src="images/Artboard 15.svg"
            alt="Artboard Background"
            className="absolute w-3/4 max-w-sm opacity-100 z-0"
          />

          {/* Foreground content */}
          <div className="relative z-10 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to start MixCRYPT?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Email our anonymous MixCrypt team below with your requirements
            </p>
            <a
              href="mailto:support@mixcrypt.com"
              className="text-3xl lg:text-4xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              support@mixcrypt.com
            </a>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-600 mb-8"></div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-lg">
            <span className="text-red-500">© 2025</span>{" "}
            <span className="text-white">MixCRYPT</span>{" "}
            <span className="text-red-500">All Rights Reserved</span>
          </p>
        </div>
      </div>
    </section>
  );
}
