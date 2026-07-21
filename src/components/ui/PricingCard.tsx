import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  featured?: boolean;
  features?: readonly string[];
  className?: string;
  fullWidth?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  featured = false,
  features,
  className,
  fullWidth = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={clsx(
        'flex flex-col rounded-[28px] p-6 md:p-8',
        featured
          ? 'bg-card-light text-white'
          : 'bg-card-dark text-white',
        fullWidth && 'md:flex-row md:items-center md:justify-between md:gap-8',
        className,
      )}
    >
      <div className={clsx(fullWidth && 'md:flex md:items-center md:gap-8')}>
        <div>
          <p
            className={clsx(
              'text-fluid-xs font-semibold uppercase tracking-widest',
              featured ? 'text-text-gray' : 'text-text-gray-light',
            )}
          >
            {name}
          </p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="font-heading text-fluid-2xl tracking-wide">${price}</span>
            <span
              className={clsx(
                'text-fluid-sm',
                featured ? 'text-text-gray' : 'text-text-gray-light',
              )}
            >
              {period}
            </span>
          </div>
        </div>

        {fullWidth && (
          <p className="mt-3 max-w-md text-fluid-sm text-text-gray-light md:mt-0">
            Save big with our annual membership — unlimited access to all classes and facilities.
          </p>
        )}
      </div>

      {features && features.length > 0 && (
        <ul className="mt-6 flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-fluid-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-black">
                <Check size={14} aria-hidden />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Button
        variant={featured ? 'secondary' : 'primary'}
        className={clsx(
          'mt-6 w-full md:w-auto',
          !featured && 'bg-accent text-black hover:bg-accent-alt',
          fullWidth && 'md:mt-0 md:shrink-0',
        )}
      >
        {featured ? 'Join Now' : 'Choose Plan'}
      </Button>
    </motion.div>
  );
}
