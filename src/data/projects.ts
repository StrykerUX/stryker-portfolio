export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  hoverVideo?: string; // OPCIONAL: URL de YouTube para video hover (ej: 'https://youtu.be/dxUyH-GCNa0')
  year: string;
  client: string;
  description: {
    es: string;
    en: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  slug: string;
  featured: boolean;
}

export const categories = {
  es: [
    { id: 'todos', label: 'all categories', count: 15 },
    { id: 'ux-ui', label: 'desarrollo UX', count: 5 },
    { id: 'diseno-unico', label: 'diseño único', count: 4 },
    { id: 'branding', label: 'diseño web', count: 4 },
    { id: 'experiencia-3d', label: 'experiencia 3d', count: 1 },
    { id: 'motion', label: 'motion', count: 1 }
  ],
  en: [
    { id: 'todos', label: 'all categories', count: 15 },
    { id: 'ux-ui', label: 'UX development', count: 5 },
    { id: 'diseno-unico', label: 'unique design', count: 4 },
    { id: 'branding', label: 'web design', count: 4 },
    { id: 'experiencia-3d', label: '3d experience', count: 1 },
    { id: 'motion', label: 'motion', count: 1 }
  ]
};

export const projects: Project[] = [
  {
    id: 'trove-ux-ui',
    title: 'TROVE - UX/UI',
    subtitle: 'Optimización completa de la experiencia de usuario',
    category: 'ux-ui',
    tags: ['UX Research', 'UI Design', 'Conversion Optimization', 'User Testing'],
    image: 'https://storage.novalabss.app/u/Trove%20Onboarding%20Mock01.jpg',
    hoverVideo: 'https://youtu.be/dxUyH-GCNa0',
    year: '2024',
    client: 'Trove Technologies',
    description: {
      es: 'Rediseño completo de la experiencia de usuario para mejorar la conversión del 20% al 60% y reducir el tiempo de onboarding de 9 a 4 minutos.',
      en: 'Complete user experience redesign to improve conversion from 20% to 60% and reduce onboarding time from 9 to 4 minutes.'
    },
    metrics: [
      { label: 'Conversión', value: '20% → 60%' },
      { label: 'Onboarding', value: '9min → 4min' },
      { label: 'CAC', value: '$18 → $8' }
    ],
    slug: 'trove-ux-ui',
    featured: true
  },
  {
    id: 'wishpond',
    title: 'WISHPOND',
    subtitle: 'Plataforma de marketing integral',
    category: 'branding',
    tags: ['Web Design', 'Brand Identity', 'Marketing Platform'],
    image: 'https://storage.novalabss.app/u/Turn_on-01.jpg',
    year: '2024',
    client: 'Wishpond Technologies',
    description: {
      es: 'Desarrollo de una plataforma integral de marketing con enfoque en automatización y generación de leads.',
      en: 'Development of a comprehensive marketing platform focused on automation and lead generation.'
    },
    slug: 'wishpond',
    featured: true
  },
  {
    id: 'kaleido',
    title: 'KALEIDO',
    subtitle: 'Aplicación móvil de creatividad',
    category: 'ux-ui',
    tags: ['Mobile App', 'Creative Tools', 'User Interface'],
    image: 'https://storage.novalabss.app/u/Kaleido%20Mobile%20Mock010.jpg',
    year: '2023',
    client: 'Kaleido Creative',
    description: {
      es: 'Diseño de interfaz para aplicación móvil enfocada en herramientas creativas y colaboración.',
      en: 'Interface design for mobile application focused on creative tools and collaboration.'
    },
    slug: 'kaleido',
    featured: false
  },
  {
    id: 'digital-crew',
    title: 'DIGITAL CREW',
    subtitle: 'Agencia digital moderna',
    category: 'branding',
    tags: ['Agency Website', 'Portfolio Design', 'Team Showcase'],
    image: 'https://storage.novalabss.app/u/ConferenceStrees.jpg',
    year: '2023',
    client: 'Digital Crew Agency',
    description: {
      es: 'Sitio web corporativo para agencia digital con enfoque en mostrar el equipo y servicios.',
      en: 'Corporate website for digital agency focused on showcasing team and services.'
    },
    slug: 'digital-crew',
    featured: false
  },
  {
    id: 'berceau-du-monde',
    title: 'BERCEAU DU MONDE',
    subtitle: 'Experiencia visual de producto premium',
    category: 'experiencia-3d',
    tags: ['3D Rendering', 'Product Visualization', 'Premium Branding'],
    image: '/images/projects/berceau-du-monde.jpg',
    year: '2023',
    client: 'Berceau Du Monde',
    description: {
      es: 'Visualización 3D y branding para producto premium con enfoque en elegancia y sofisticación.',
      en: '3D visualization and branding for premium product focused on elegance and sophistication.'
    },
    slug: 'berceau-du-monde',
    featured: true
  },
  {
    id: 'white-linen',
    title: 'WHITE LINEN',
    subtitle: 'E-commerce de lujo minimalista',
    category: 'diseno-unico',
    tags: ['E-commerce', 'Luxury Design', 'Minimalist'],
    image: '/images/projects/white-linen.jpg',
    year: '2023',
    client: 'White Linen Co.',
    description: {
      es: 'Diseño de e-commerce para marca de lujo con enfoque minimalista y experiencia premium.',
      en: 'E-commerce design for luxury brand with minimalist approach and premium experience.'
    },
    slug: 'white-linen',
    featured: false
  },
  {
    id: 'furwagen-ecommerce',
    title: 'FURWAGEN E-COMMERCE',
    subtitle: 'Plataforma automotriz innovadora',
    category: 'ux-ui',
    tags: ['Automotive', 'E-commerce', 'Innovation'],
    image: '/images/projects/furwagen-ecommerce.jpg',
    year: '2022',
    client: 'FurWagen',
    description: {
      es: 'Plataforma e-commerce especializada en el sector automotriz con UX optimizada.',
      en: 'E-commerce platform specialized in automotive sector with optimized UX.'
    },
    slug: 'furwagen-ecommerce',
    featured: false
  },
  {
    id: 'prototipos-renders',
    title: 'PROTOTIPOS Y RENDERS PUBLICITARIOS',
    subtitle: 'Visualización creativa de conceptos',
    category: 'diseno-unico',
    tags: ['3D Rendering', 'Prototyping', 'Advertising'],
    image: '/images/projects/prototipos-renders.jpg',
    year: '2022',
    client: 'Varios clientes',
    description: {
      es: 'Creación de prototipos y renders para campañas publicitarias y presentaciones de producto.',
      en: 'Creation of prototypes and renders for advertising campaigns and product presentations.'
    },
    slug: 'prototipos-renders',
    featured: false
  },
  {
    id: 'apex-legends-concept',
    title: 'APEX LEGENDS CONCEPT',
    subtitle: 'Concepto de interfaz gaming',
    category: 'motion',
    tags: ['Gaming UI', 'Motion Design', 'Concept Art'],
    image: '/images/projects/apex-legends-concept.jpg',
    year: '2022',
    client: 'Proyecto personal',
    description: {
      es: 'Concepto de interfaz y motion graphics para videojuego con enfoque en usabilidad gaming.',
      en: 'Interface concept and motion graphics for video game focused on gaming usability.'
    },
    slug: 'apex-legends-concept',
    featured: false
  },
  {
    id: 'spotify-redesign',
    title: 'SPOTIFY REDESIGN',
    subtitle: 'Reimaginando la experiencia musical',
    category: 'ux-ui',
    tags: ['Music App', 'User Experience', 'Interface Design'],
    image: '/images/projects/spotify-redesign.jpg',
    year: '2024',
    client: 'Concepto personal',
    description: {
      es: 'Rediseño conceptual de Spotify enfocado en mejorar la descubribilidad musical y la experiencia social.',
      en: 'Conceptual redesign of Spotify focused on improving music discovery and social experience.'
    },
    slug: 'spotify-redesign',
    featured: false
  },
  {
    id: 'fintech-dashboard',
    title: 'FINTECH DASHBOARD',
    subtitle: 'Panel de control financiero',
    category: 'ux-ui',
    tags: ['Fintech', 'Dashboard', 'Data Visualization'],
    image: '/images/projects/fintech-dashboard.jpg',
    year: '2024',
    client: 'FinTech Startup',
    description: {
      es: 'Dashboard completo para gestión financiera con enfoque en visualización de datos y usabilidad.',
      en: 'Complete dashboard for financial management focused on data visualization and usability.'
    },
    slug: 'fintech-dashboard',
    featured: false
  },
  {
    id: 'luxury-hotel-brand',
    title: 'LUXURY HOTEL BRAND',
    subtitle: 'Identidad visual premium',
    category: 'branding',
    tags: ['Luxury Branding', 'Hospitality', 'Visual Identity'],
    image: '/images/projects/luxury-hotel-brand.jpg',
    year: '2023',
    client: 'Luxury Hotels Group',
    description: {
      es: 'Desarrollo de identidad visual completa para cadena hotelera de lujo con enfoque en elegancia.',
      en: 'Complete visual identity development for luxury hotel chain focused on elegance.'
    },
    slug: 'luxury-hotel-brand',
    featured: false
  },
  {
    id: 'crypto-wallet-ui',
    title: 'CRYPTO WALLET UI',
    subtitle: 'Interfaz de billetera cripto',
    category: 'diseno-unico',
    tags: ['Cryptocurrency', 'Wallet Design', 'Security'],
    image: '/images/projects/crypto-wallet-ui.jpg',
    year: '2023',
    client: 'CryptoSecure',
    description: {
      es: 'Diseño de interfaz para billetera de criptomonedas con enfoque en seguridad y simplicidad.',
      en: 'Interface design for cryptocurrency wallet focused on security and simplicity.'
    },
    slug: 'crypto-wallet-ui',
    featured: false
  },
  {
    id: 'food-delivery-app',
    title: 'FOOD DELIVERY APP',
    subtitle: 'Aplicación de entrega de comida',
    category: 'ux-ui',
    tags: ['Mobile App', 'Food Delivery', 'User Experience'],
    image: '/images/projects/food-delivery-app.jpg',
    year: '2023',
    client: 'QuickEats',
    description: {
      es: 'Aplicación móvil para delivery de comida con UX optimizada para pedidos rápidos.',
      en: 'Mobile app for food delivery with UX optimized for quick orders.'
    },
    slug: 'food-delivery-app',
    featured: false
  },
  {
    id: 'sustainable-fashion',
    title: 'SUSTAINABLE FASHION',
    subtitle: 'Moda sostenible moderna',
    category: 'branding',
    tags: ['Sustainable Fashion', 'E-commerce', 'Modern Design'],
    image: '/images/projects/sustainable-fashion.jpg',
    year: '2022',
    client: 'EcoWear',
    description: {
      es: 'Plataforma e-commerce para moda sostenible con diseño moderno y consciente.',
      en: 'E-commerce platform for sustainable fashion with modern and conscious design.'
    },
    slug: 'sustainable-fashion',
    featured: false
  }
];