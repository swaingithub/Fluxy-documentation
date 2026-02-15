'use client';

import { useId, type SVGProps } from 'react';

export function FluxyLogo(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  const gradientId = `fluxy-logo-gradient-${id.replace(/:/g, '')}`;

  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect
        width="512"
        height="512"
        rx="100"
        fill="#3B82F6"
        style={{ fill: `url(#${gradientId})` }}
      />
      <path
        d="M165 130H347C363.569 130 377 143.431 377 160V190C377 206.569 363.569 220 347 220H225V245H325C341.569 245 355 258.431 355 275V305C355 321.569 341.569 335 325 335H225V420C225 436.569 211.569 450 195 450H165C148.431 450 135 436.569 135 420V160C135 143.431 148.431 130 165 130Z"
        fill="white"
      />
    </svg>
  );
}
