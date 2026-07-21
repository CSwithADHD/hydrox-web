import clsx from 'clsx';
import { useCountUp } from '../../hooks/useCountUp';

interface StatsCardProps {
  value: number;
  suffix?: string;
  label: string;
  enabled?: boolean;
  className?: string;
  dark?: boolean;
}

export function StatsCard({
  value,
  suffix = '',
  label,
  enabled = true,
  className,
  dark = false,
}: StatsCardProps) {
  const count = useCountUp({ end: value, enabled });

  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <span
        className={clsx(
          'font-heading text-fluid-2xl tracking-wide leading-none',
          dark ? 'text-white' : 'text-text-dark',
        )}
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <span
        className={clsx(
          'text-fluid-xs uppercase tracking-wider',
          dark ? 'text-text-gray-light' : 'text-text-gray',
        )}
      >
        {label}
      </span>
    </div>
  );
}
