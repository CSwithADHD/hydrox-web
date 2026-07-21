import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const variantStyles = {
  primary: 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]',
  secondary: 'bg-accent text-white hover:bg-accent-alt',
  outline: 'border-2 border-[#1a1a1a]/20 text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white',
};

const sizeStyles = {
  sm: 'px-5 py-2 text-xs gap-2',
  md: 'px-7 py-3 text-sm gap-2.5',
  lg: 'px-9 py-4 text-sm gap-3',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  showIcon = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent md:h-8 md:w-8">
          <ArrowUpRight size={16} strokeWidth={3} />
        </span>
      )}
    </motion.button>
  );
}
