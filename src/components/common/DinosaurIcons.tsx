'use client';

import type { SVGProps } from 'react';
import { Ghost, Bug, Rocket } from 'lucide-react';

export type DinoType = 'trex' | 'bronto' | 'ptero';

export const DinosaurIcon = ({ type, ...props }: { type: DinoType } & SVGProps<SVGSVGElement>) => {
  switch (type) {
    case 'trex':
      return <Ghost {...props} />;
    case 'bronto':
      return <Bug {...props} />;
    case 'ptero':
      return <Rocket {...props} />;
    default:
      return <Ghost {...props} />;
  }
};
