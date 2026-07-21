import { motion } from 'framer-motion';
import { trainerBannerContent } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';

export function TrainerBanner() {
  const { ref, inView, variants } = useScrollReveal();

  return (
    <section className="py-10 md:py-14">
      <Container>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative flex items-center gap-6 overflow-hidden rounded-full bg-accent px-8 py-5 md:px-12 md:py-7"
        >
          {/* Sparkle icon */}
          <span className="font-heading text-2xl text-black/70 md:text-3xl" aria-hidden="true">
            ✦
          </span>

          {/* Text */}
          <div className="flex-1">
            <h2 className="font-heading text-fluid-xl uppercase tracking-wide text-black md:text-fluid-2xl">
              {trainerBannerContent.title}
            </h2>
            <p className="mt-1 max-w-md text-fluid-xs text-black/70">
              {trainerBannerContent.description}
            </p>
          </div>

          {/* Circular photo on right */}
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-[3px] border-white/30 md:h-20 md:w-20">
            <img
              src={trainerBannerContent.image}
              alt="Professional trainer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
