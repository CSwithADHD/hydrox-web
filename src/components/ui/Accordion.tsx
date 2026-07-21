import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: readonly AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    items.find((item) => item.defaultOpen)?.id ?? null,
  );

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;

        return (
          <div
            key={item.id}
            className={clsx(
              'overflow-hidden rounded-[28px] transition-colors duration-300',
              isOpen ? 'bg-accent' : 'bg-card-dark',
            )}
          >
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
            >
              <span
                className={clsx(
                  'font-heading text-fluid-lg uppercase tracking-wide',
                  isOpen ? 'text-white' : 'text-white',
                )}
              >
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={clsx(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                  isOpen ? 'bg-white/20 text-white' : 'bg-white/10 text-white',
                )}
              >
                <ChevronDown size={20} aria-hidden />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-5 px-6 pb-6 md:flex-row md:items-end md:gap-8 md:px-8 md:pb-8">
                    <p className="flex-1 text-fluid-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                    {item.image && (
                      <div className="h-36 w-full shrink-0 overflow-hidden rounded-2xl md:h-44 md:w-44">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
