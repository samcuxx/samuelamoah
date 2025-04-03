import Image from "next/image";
import Logo from "@/public/logo.png";

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" 
      className="lg:w-[450px] w-full h-full"
    >
      {/* Modern gradient definition */}
      <defs>
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27b173" />
          <stop offset="100%" stopColor="#2ecc71" />
        </linearGradient>
      </defs>

      {/* Main outer border with clean animation */}
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="transparent"
        stroke="url(#borderGradient)"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,1131;1131,0"
          dur="2s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.25 0.1 0.25 1"
        />
      </circle>

      {/* Inner border with minimal delay */}
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="transparent"
        stroke="#27b173"
        strokeWidth="1"
        opacity="0.7"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,1005;1005,0"
          dur="2s"
          begin="0.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.25 0.1 0.25 1"
        />
      </circle>

      {/* Subtle rotating accent */}
      <circle
        cx="200"
        cy="200"
        r="190"
        fill="transparent"
        stroke="url(#borderGradient)"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="3,15"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="40s"
          repeatCount="indefinite"
          additive="sum"
        />
      </circle>

      {/* Clipping path for rounded image */}
      <defs>
        <clipPath id="circleClip">
          <circle cx="200" cy="200" r="160" />
        </clipPath>
      </defs>

      {/* Profile image with smooth fade-in */}
      <image
        href={Logo.src}
        x="20"
        y="20"
        width="360"
        height="360"
        clipPath="url(#circleClip)"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;1"
          dur="1s"
          begin="0.8s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.25 0.1 0.25 1"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          from="0.98 0.98"
          to="1 1"
          additive="sum"
          dur="1.2s"
          begin="0.8s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.25 0.1 0.25 1"
        />
      </image>
    </svg>
  );
}
