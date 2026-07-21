export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

export const heroContent = {
  line1: 'FIND YOUR INNER',
  line2: 'POWER WORKOUT',
  description:
    'Transform your body and mind with world-class trainers, cutting-edge equipment, and a community that pushes you to become your strongest self.',
  image:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop',
  stats: [
    { value: 689, suffix: 'K', label: 'Happy Customers' },
    { value: 120, suffix: '', label: 'Online Class' },
  ],
  badgeText: 'Register\nNow',
} as const;

export const fitnessTabs = [
  'All',
  'Signature Class',
  'Mind & Body',
  'Cardio',
  'Meditation',
] as const;

export type FitnessTab = (typeof fitnessTabs)[number];

export const fitnessClassContent: Record<
  FitnessTab,
  {
    title: string;
    description: string;
    image: string;
    trainers: string[];
    pillLabel: string;
  }
> = {
  All: {
    title: 'Fitness Journey',
    description:
      'Explore our full range of classes designed to meet every fitness goal — from strength building to mindfulness.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&auto=format&fit=crop',
    trainers: [
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=120&q=80&auto=format&fit=crop',
    ],
    pillLabel: 'All Classes',
  },
  'Signature Class': {
    title: 'Fitness Journey',
    description:
      'Our signature classes combine HIIT, strength, and mobility for a complete workout experience.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80&auto=format&fit=crop',
    trainers: [
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=120&q=80&auto=format&fit=crop',
    ],
    pillLabel: 'Signature',
  },
  'Mind & Body': {
    title: 'Fitness Journey',
    description:
      'Reconnect with your body through yoga, pilates, and mindful movement. Build strength, flexibility, and inner calm.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80&auto=format&fit=crop',
    trainers: [
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=120&q=80&auto=format&fit=crop',
    ],
    pillLabel: 'Mind & Body',
  },
  Cardio: {
    title: 'Fitness Journey',
    description:
      'Heart-pumping cardio workouts designed to boost stamina, burn fat, and elevate your fitness level.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80&auto=format&fit=crop',
    trainers: [
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&q=80&auto=format&fit=crop',
    ],
    pillLabel: 'Cardio',
  },
  Meditation: {
    title: 'Fitness Journey',
    description:
      'Guided meditation and breathwork sessions to reduce stress, improve focus, and restore balance.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&auto=format&fit=crop',
    trainers: [
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=120&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=120&q=80&auto=format&fit=crop',
    ],
    pillLabel: 'Meditation',
  },
};

export const trainerBannerContent = {
  title: 'Professional Trainer',
  image:
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80&auto=format&fit=crop',
  description:
    'Our certified trainers bring years of experience and personalized attention to every session.',
} as const;

export const featureListItems = [
  {
    id: 'management',
    label: 'Good Management',
    description:
      'Seamless scheduling, member support, and facility management so you can focus entirely on your workout.',
  },
  {
    id: 'videos',
    label: 'Practice Videos',
    description:
      'Access our library of on-demand workout videos to train anytime, anywhere.',
  },
  {
    id: 'progress',
    label: 'Progress Report',
    description:
      'Track your fitness journey with detailed progress reports and personalized recommendations.',
  },
] as const;

export const classCards = [
  {
    title: 'Body Building',
    time: '06:00 - 08:00',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Fitness Challenge',
    time: '08:00 - 10:00',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Full Body Workout',
    time: '10:00 - 12:00',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Weight Lifting',
    time: '12:00 - 14:00',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop',
  },
] as const;

export const helpCards = [
  {
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your goals with certified experts who track your progress.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&auto=format&fit=crop',
    cta: 'Start Now',
  },
  {
    title: 'Nutrition Plans',
    description: 'Custom meal plans and nutrition coaching to fuel your workouts and maximize results.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop',
    cta: 'Learn More',
  },
] as const;

export const pricingPlans = {
  daily: {
    name: 'Daily Pass',
    price: 15,
    period: '/day',
    features: ['Full gym access', '1 group class', 'Locker room', 'Free WiFi', 'Guest pass'],
  },
  weekly: {
    name: 'Weekly Plan',
    price: 35,
    period: '/week',
  },
  monthly: {
    name: 'Monthly Plan',
    price: 99,
    period: '/month',
  },
  yearly: {
    name: 'Yearly Membership',
    price: 799,
    period: '/year',
  },
} as const;

export const socialLinks = [
  { platform: 'Instagram', handle: '@dhog.hydroxy', href: 'https://instagram.com' },
  { platform: 'Twitter', handle: '@dhoghydroxy', href: 'https://twitter.com' },
  { platform: 'Facebook', handle: 'D.HOG Hydroxy Gym', href: 'https://facebook.com' },
  { platform: 'LinkedIn', handle: 'D.HOG Hydroxy Gym', href: 'https://linkedin.com' },
] as const;

export const footerInfo = {
  phone: '+1 (555) 123-4567',
  email: 'hello@hydroxgym.com',
  address: '123 Fitness Avenue, New York, NY 10001',
} as const;
