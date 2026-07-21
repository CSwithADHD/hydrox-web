import clsx from 'clsx';
import type { FitnessTab } from '../../data/content';

interface TabsProps {
  tabs: readonly FitnessTab[];
  activeTab: FitnessTab;
  onTabChange: (tab: FitnessTab) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div
      className={clsx('flex flex-wrap gap-6 md:gap-8', className)}
      role="tablist"
      aria-label="Fitness class categories"
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.replace(/\s+/g, '-').toLowerCase()}`}
            id={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => onTabChange(tab)}
            className={clsx(
              'relative pb-1.5 text-fluid-xs font-semibold uppercase tracking-wider transition-colors duration-200',
              isActive
                ? 'text-white'
                : 'text-text-gray hover:text-white/80',
            )}
          >
            {tab}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent" />
            )}
          </button>
        );
      })}
    </div>
  );
}
