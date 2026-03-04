
// Added React import to provide access to React.ReactNode type
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: React.ReactNode;
}