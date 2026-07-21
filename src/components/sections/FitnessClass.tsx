import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import {
  fitnessClassContent,
  fitnessTabs,
  type FitnessTab,
} from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';
import { Tabs } from '../ui/Tabs';

export function FitnessClass() {
  const [activeTab, setActiveTab] = useState<FitnessTab>('Mind & Body');
  const content = fitnessClassContent[activeTab];
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-[100px]">
      <Container>
        <h2 className="mb-8 font-heading text-fluid-2xl uppercase tracking-wide text-white md:mb-10">
          Fitness Class With Us
        </h2>

        <Tabs
          tabs={fitnessTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-10 md:mb-14"
        />

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14"
          role="tabpanel"
          id={`panel-${activeTab.replace(/\s+/g, '-').toLowerCase()}`}
          aria-labelledby={`tab-${activeTab.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {/* Left: Content card */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between rounded-[40px] bg-card-light p-8 md:p-10 lg:min-h-[500px]"
          >
            <div>
              <h3 className="font-heading text-fluid-xl uppercase tracking-wide text-text-dark md:text-fluid-2xl">
                {content.title}
              </h3>
              <p className="mt-4 max-w-sm text-fluid-sm leading-relaxed text-text-gray">
                {content.description}
              </p>
            </div>

            {/* Trainer avatars */}
            <div className="mt-8 flex items-center">
              {content.trainers.map((trainer, i) => (
                <div
                  key={trainer}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-card-light md:h-14 md:w-14"
                  style={{ marginLeft: i > 0 ? '-14px' : 0, zIndex: content.trainers.length - i }}
                >
                  <img
                    src={trainer}
                    alt={`Trainer ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <span className="ml-3 text-fluid-xs uppercase tracking-wider text-text-gray">
                Expert Trainers
              </span>
            </div>
          </motion.div>

          {/* Right: Image with vertical tag and arrow */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden rounded-[32px]">
              <motion.img
                key={content.image}
                src={content.image}
                alt={`${content.pillLabel} fitness class`}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-[3/4] w-full object-cover md:aspect-[4/5]"
              />
            </div>

            {/* Vertical pill label on right edge */}
            <div
              className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-card-dark px-2.5 py-10 md:block"
              aria-hidden
            >
              <span
                className="font-heading text-xs uppercase tracking-[0.25em] text-white"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                {content.pillLabel}
              </span>
            </div>

            {/* Red circular arrow button at bottom-left of image */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 md:h-20 md:w-20"
              aria-label="View class details"
            >
              <ArrowUpRight size={28} strokeWidth={3} />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
