import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';
import { PricingCard } from '../ui/PricingCard';
import { SectionTitle } from '../ui/SectionTitle';

export function Pricing() {
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-[100px]">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle light underline="scribble">
              Member Pricing Plan
            </SectionTitle>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left column - weekly & monthly */}
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants}>
                <PricingCard
                  name={pricingPlans.weekly.name}
                  price={pricingPlans.weekly.price}
                  period={pricingPlans.weekly.period}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <PricingCard
                  name={pricingPlans.monthly.name}
                  price={pricingPlans.monthly.price}
                  period={pricingPlans.monthly.period}
                />
              </motion.div>
            </div>

            {/* Right column - featured daily */}
            <motion.div variants={itemVariants}>
              <PricingCard
                name={pricingPlans.daily.name}
                price={pricingPlans.daily.price}
                period={pricingPlans.daily.period}
                featured
                features={pricingPlans.daily.features}
                className="h-full"
              />
            </motion.div>
          </div>

          {/* Bottom yearly */}
          <motion.div variants={itemVariants} className="mt-6 md:mt-8">
            <PricingCard
              name={pricingPlans.yearly.name}
              price={pricingPlans.yearly.price}
              period={pricingPlans.yearly.period}
              fullWidth
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
