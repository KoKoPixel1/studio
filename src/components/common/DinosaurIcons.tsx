'use client';

import type { SVGProps } from 'react';

export type DinoType = 'trex' | 'bronto' | 'ptero';

const TRex = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.73 19.33H9.27V17.55h1.22v-2.7h-1.6V13.07h1.6V10.74H9.27V9H13.5v3.1h1.23V15h-1.23v1.85h1.23Z" />
    <path d="M19.9 6.77L17.38 8.25v2h-1.3V9.58L13.5 8.12V5.41h2.64v.92h1.3V5.41H20Z" />
  </svg>
);

const Bronto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 18H5V16h2Zm2 0V16h2v2Zm2 0V16h2v2Zm10-2h2V9a2 2 0 0 0-2-2H17.22A5.32 5.32 0 0 0 12.5 2H11.77a4.26 4.26 0 0 0-3 1.37A6.13 6.13 0 0 0 6.9 8.2a7.34 7.34 0 0 0-3 14v2H5V14a5.3 5.3 0 0 1 3.23-4.85A4.14 4.14 0 0 1 11.77 4h.73a3.32 3.32 0 0 1 3.28 3H19Z" />
  </svg>
);

const Ptero = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.61 11.13L12.8 4.86a1 1 0 0 0-1.6 .8v3.25L3.83 3.33a1 1 0 0 0-1.33 1.47l8.1 7.2H3.39a1 1 0 1 0 0 2h7.21l-8.1 7.2a1 1 0 0 0 1.33 1.47l7.37-5.58v3.25a1 1 0 0 0 1.6 .8L21.61 12.87A1 1 0 0 0 21.61 11.13Z" />
  </svg>
);

export const DinosaurIcon = ({ type, ...props }: { type: DinoType } & SVGProps<SVGSVGElement>) => {
  switch (type) {
    case 'trex':
      return <TRex {...props} />;
    case 'bronto':
      return <Bronto {...props} />;
    case 'ptero':
      return <Ptero {...props} />;
    default:
      return <TRex {...props} />;
  }
};
