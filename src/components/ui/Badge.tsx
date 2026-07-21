import clsx from 'clsx';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-16 w-16 text-[0.6rem]',
  md: 'h-24 w-24 text-xs',
  lg: 'h-32 w-32 text-sm',
};

export function Badge({ children, className, size = 'md' }: BadgeProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-full bg-accent text-white font-heading uppercase tracking-wider leading-tight shadow-lg shadow-accent/25',
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
