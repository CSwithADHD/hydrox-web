import { Mail, MapPin, Phone } from 'lucide-react';
import { footerInfo } from '../../data/content';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-alt py-8" aria-label="Site footer">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
          <a
            href={`tel:${footerInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-fluid-xs text-text-gray-light transition-colors hover:text-white"
          >
            <Phone size={14} aria-hidden />
            {footerInfo.phone}
          </a>

          <a
            href={`mailto:${footerInfo.email}`}
            className="flex items-center gap-2 text-fluid-xs text-text-gray-light transition-colors hover:text-white"
          >
            <Mail size={14} aria-hidden />
            {footerInfo.email}
          </a>

          <span
            className="font-heading text-lg tracking-[0.15em] text-white"
            aria-label="Fitness Club"
          >
            FITNESS CLUB
          </span>

          <address className="flex items-center gap-2 not-italic text-fluid-xs text-text-gray-light">
            <MapPin size={14} aria-hidden className="shrink-0" />
            {footerInfo.address}
          </address>
        </div>
      </Container>
    </footer>
  );
}
