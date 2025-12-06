"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between py-24 px-16 font-sans"
      style={{
        background: `
          radial-gradient(ellipse at 50% 100%, rgba(30, 90, 150, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(20, 70, 130, 0.3) 0%, transparent 40%),
          linear-gradient(to bottom, #000000 0%, #0E2235 40%, #0E4477 100%)
        `,
      }}
    >
      {/* Logo - positioned in the dark upper area */}
      <div className="flex-1 flex items-center">
        <Image
          src="/hobeltech-logo-2x.png"
          alt="Hobeltech Logo"
          width={150}
          height={50}
          priority
        />
      </div>

      {/* Main Message with Lottie animation - centered */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-white">In the workshop</h1>
      </div>

      {/* GitHub Link - in the blue lower area */}
      <div className="flex-1 flex items-center">
        <a
          href="https://github.com/hobeltech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-colors border border-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-medium">GitHub</span>
        </a>
      </div>
    </div>
  );
}
