import clsx from 'clsx';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
  id?: string;
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={clsx('mx-auto w-full max-w-[1200px] px-5 md:px-6', className)}
    >
      {children}
    </Tag>
  );
}
