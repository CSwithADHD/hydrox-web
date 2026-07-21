import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { featureListItems } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';

export function AccordionFeatures() {
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-[100px]">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-3 md:gap-4"
        >
          {featureListItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ backgroundColor: '#222' }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between rounded-full bg-card-dark px-7 py-5 md:px-10 md:py-6"
            >
              <div>
                <h3 className="font-heading text-fluid-lg uppercase tracking-wide text-white">
                  {item.label}
                </h3>
                <p className="mt-0.5 max-w-lg text-fluid-xs text-text-gray-light">
                  {item.description}
                </p>
              </div>

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/25">
                <ArrowUpRight size={20} strokeWidth={3} aria-hidden />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
