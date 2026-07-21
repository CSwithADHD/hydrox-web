import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  platform: string;
  handle: string;
  href: string;
}

interface SocialLinksProps {
  links: readonly SocialLink[];
  className?: string;
}

const iconMap = {
  Instagram,
  Twitter,
  Facebook,
  LinkedIn: Linkedin,
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={clsx('flex flex-col gap-4', className)}>
      {links.map((link, index) => {
        const Icon = iconMap[link.platform as keyof typeof iconMap] ?? Instagram;

        return (
          <motion.li
            key={link.platform}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[20px] bg-card-dark px-6 py-5 transition-colors duration-300 hover:bg-accent"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-fluid-lg uppercase tracking-wide text-white">
                    {link.platform}
                  </p>
                  <p className="text-fluid-xs text-text-gray-light group-hover:text-white/80">
                    {link.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-text-gray-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden
              />
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}
