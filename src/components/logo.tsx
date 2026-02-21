'use client';

import { type SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * FluxyLogo - A professional, minimal geometric design representing 
 * Structure (the stem) and Flow (the offset horizontal bars).
 */
export function FluxyLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("inline-block", className)}
      {...props}
    >
      {/* Professional Slate Background */}
      <rect
        width="512"
        height="512"
        rx="128"
        fill="#0F172A"
      />
      
      {/* 
          Architectural 'F' Design
          The design uses three precise geometric elements to create an 'F' 
          that feels modern and structured.
      */}
      
      {/* Vertical Stem - Represents Stability/Core */}
      <rect
        x="128"
        y="128"
        width="64"
        height="256"
        rx="8"
        fill="white"
      />
      
      {/* Top Bar - Representing Extension/Growth */}
      <rect
        x="128"
        y="128"
        width="224"
        height="64"
        rx="8"
        fill="white"
      />
      
      {/* 
          Middle Bar - Representing 'Flux' (Flow)
          Offset slightly to imply motion and highlighted with a professional 
          Sky Blue accent.
      */}
      <rect
        x="160"
        y="224"
        width="160"
        height="56"
        rx="8"
        fill="#38BDF8"
      />

      {/* Subtle Bottom 'Dot' - Representing Atomic State/Signals */}
      <circle
        cx="160"
        cy="352"
        r="28"
        fill="#38BDF8"
        fillOpacity="0.5"
      />
    </svg>
  );
}
