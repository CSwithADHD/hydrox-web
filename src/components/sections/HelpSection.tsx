import { motion } from 'framer-motion';
import { helpCards } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export function HelpSection() {
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section className="py-20 md:py-[100px]">
      <Container>
        <SectionTitle light>How I Can Help You</SectionTitle>

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {helpCards.map((card) => (
            <motion.article
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-[32px] bg-card-dark"
            >
              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-heading text-fluid-xl uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-2 max-w-sm text-fluid-sm text-text-gray-light">
                  {card.description}
                </p>
                <div className="mt-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button variant="secondary" size="sm">
                    {card.cta}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
