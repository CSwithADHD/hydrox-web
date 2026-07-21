import { motion } from 'framer-motion';
import { classCards } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';

export function Classes() {
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section id="gallery" className="py-20 md:py-[100px]">
      <Container>
        <h2 className="mb-10 font-heading text-fluid-2xl uppercase tracking-wide text-white glow-text-sm md:mb-14">
          Classes
        </h2>

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {classCards.map((card) => (
            <motion.article
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <h3 className="font-heading text-fluid-base uppercase tracking-wide text-white">
                    {card.title}
                  </h3>
                  <p className="text-fluid-xs text-text-gray-light">{card.time}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark text-text-gray-light transition-colors group-hover:bg-accent group-hover:text-black">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
