import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import logoImage from '@/assets/Auraxis_logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LogoProps {
  className?: string;
  /** Round container that blends with dark backgrounds (e.g. navbar over hero) */
  roundBlend?: boolean;
}

/**
 * The Logo component uses the official Auraxis logo image for brand accuracy.
 */
export const Logo: React.FC<LogoProps> = ({ className = "h-12", roundBlend = false }) => {
  if (roundBlend) {
    return (
      <img
        src={logoImage}
        alt="Auraxis Technologies"
        className={cn(
          "object-contain object-left rounded-xl opacity-95",
          className
        )}
      />
    );
  }

  return (
    <img
      src={logoImage}
      alt="Auraxis Technologies"
      className={cn("object-contain object-left", className)}
    />
  );
};
