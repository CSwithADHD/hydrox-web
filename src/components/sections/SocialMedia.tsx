import { motion } from 'framer-motion';
import { socialLinks } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SocialLinks } from '../ui/SocialLinks';

export function SocialMedia() {
  const { ref, inView, staggerVariants, itemVariants } = useScrollReveal();

  return (
    <section id="gallery" className="py-20 md:py-[100px]">
      <Container>
        <SectionTitle light>FOLLOW US ON SOCIAL MEDIA</SectionTitle>

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&auto=format&fit=crop"
              alt="Hydrox Gym trainer"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks links={socialLinks} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
