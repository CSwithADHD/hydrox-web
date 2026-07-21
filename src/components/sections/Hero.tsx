import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { heroContent } from '../../data/content';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { StatsCard } from '../ui/StatsCard';
import { Container } from '../layout/Container';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-36">
      <Container className="!max-w-[96vw] !px-2 md:!px-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-[48px] bg-card-light px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-20"
        >
          {/* Top content row */}
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Left: Headline + description */}
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants}>
                <h1 className="font-heading uppercase text-text-dark text-fluid-hero leading-[0.85]">
                  {heroContent.line1}
                  <br />
                  <span className="relative inline-block">
                    {heroContent.line2}
                    <span
                      className="absolute -right-6 -top-2 text-accent md:-right-10 md:-top-4 md:text-2xl"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="max-w-lg text-fluid-sm leading-relaxed text-text-gray"
              >
                {heroContent.description}
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button variant="primary" size="lg" showIcon>
                  Book Now
                </Button>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-10 md:gap-14 lg:flex-col lg:gap-8"
            >
              {heroContent.stats.map((stat) => (
                <StatsCard
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom image with badge */}
          <motion.div variants={itemVariants} className="relative mt-10 md:mt-12">
            <div className="overflow-hidden rounded-[32px] md:rounded-[40px]">
              <img
                src={heroContent.image}
                alt="Athletes training at Fitness Club"
                loading="lazy"
                className="h-56 w-full object-cover md:h-80 lg:h-96"
              />
            </div>

            {/* Register Now badge overlapping bottom-right */}
            <div className="absolute -bottom-6 right-4 md:-bottom-8 md:right-8">
              <Badge size="md">
                <span className="text-center leading-tight">
                  Register
                  <br />
                  Now
                </span>
              </Badge>
            </div>

            {/* Arrow circle button on bottom-left of image */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 md:h-16 md:w-16"
              aria-label="Get started"
            >
              <ArrowUpRight size={24} strokeWidth={3} />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
