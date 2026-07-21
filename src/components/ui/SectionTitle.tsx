import clsx from 'clsx';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  light?: boolean;
  underline?: 'sketch' | 'scribble' | 'none';
  align?: 'left' | 'center';
}

export function SectionTitle({
  children,
  subtitle,
  className,
  light = false,
  underline = 'none',
  align = 'left',
}: SectionTitleProps) {
  const underlineClass =
    underline === 'sketch'
      ? 'sketch-underline'
      : underline === 'scribble'
        ? 'scribble-underline'
        : '';

  return (
    <div
      className={clsx(
        'mb-10 md:mb-14',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2
        className={clsx(
          'font-heading uppercase tracking-wide text-fluid-2xl md:text-fluid-3xl',
          light ? 'text-white' : 'text-white',
        )}
      >
        <span className={underlineClass}>{children}</span>
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 max-w-xl text-fluid-sm leading-relaxed',
            light ? 'text-text-gray-light' : 'text-text-gray',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
