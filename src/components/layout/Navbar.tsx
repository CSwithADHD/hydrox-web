import { motion } from 'framer-motion';
import { navLinks } from '../../data/content';
import { Container } from './Container';

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 md:top-5">
      <Container>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto flex h-[56px] w-[95%] max-w-[1100px] items-center justify-between rounded-full bg-card-light px-6 shadow-lg shadow-accent/10 md:h-[64px] md:px-10 border border-accent/20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-1.5"
            aria-label="D.HOG Hydroxy Gym home"
          >
            <img
              src="/dhog_logo.svg"
              alt="D.HOG Hydroxy Gym"
              className="h-9 w-auto md:h-10"
            />
          </a>

          {/* Nav links */}
          <ul className="flex items-center gap-5 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </Container>
    </header>
  );
}
