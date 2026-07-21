import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import { Footer } from '../layout/Footer';

export function CtaFooter() {
  const { ref, inView, variants } = useScrollReveal();

  return (
    <section id="contact" className="pb-0 pt-10 md:pt-16">
      <Container>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-[40px] bg-card-light px-6 py-12 md:px-14 md:py-16"
        >
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-lg">
              <h2 className="font-heading uppercase text-text-dark text-fluid-2xl md:text-fluid-3xl leading-[0.95]">
                Start Your
                <br />
                Fitness Journey
              </h2>
              <p className="mt-4 text-fluid-sm text-text-gray">
                Subscribe to our newsletter and be the first to know about exclusive deals,
                new classes, and fitness tips.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-fluid-sm text-text-dark outline-none focus:border-accent md:min-w-[260px]"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>

            <div className="shrink-0">
              <span className="font-heading text-8xl text-accent md:text-9xl" aria-hidden="true">
                ✦
              </span>
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="mt-10 md:mt-14">
        <Footer />
      </div>
    </section>
  );
}
