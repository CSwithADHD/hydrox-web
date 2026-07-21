import { motion } from 'framer-motion';

export function Starburst({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      aria-hidden
    >
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="40"
          y1="40"
          x2="40"
          y2="8"
          stroke="#E64B36"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${i * 30} 40 40)`}
          opacity={0.6}
        />
      ))}
    </motion.svg>
  );
}

export function ScribbleLine({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    >
      <path
        d="M5 25 Q40 5 80 22 T160 18 T195 28"
        stroke="#E64B36"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity={0.7}
      />
    </motion.svg>
  );
}

export function DecorativeShapes() {
  return (
    <>
      <Starburst className="pointer-events-none absolute -right-4 top-8 h-16 w-16 opacity-80 md:-right-8 md:top-12 md:h-24 md:w-24" />
      <ScribbleLine className="pointer-events-none absolute bottom-24 left-4 h-8 w-32 opacity-70 md:bottom-32 md:left-12 md:w-48" />
    </>
  );
}
