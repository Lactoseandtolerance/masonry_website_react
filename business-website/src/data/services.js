import { 
  faChartLine, 
  faLaptopCode, 
  faBullhorn, 
  faUsers, 
  faShieldAlt, 
  faChartPie 
} from '@fortawesome/free-solid-svg-icons';

// Note: For translating service names and descriptions, we can either:
// 1. Keep them in the translation files and reference them by key
// 2. Or define language-specific services objects

// Using approach 1 here for simplicity - the text will come from translation files
export const services = [
  {
    id: 'service1',
    titleKey: 'services.items.consulting.title',
    descriptionKey: 'services.items.consulting.description',
    icon: faChartLine,
    price: '299',
    features: [
      'services.items.consulting.features.analysis',
      'services.items.consulting.features.strategy',
      'services.items.consulting.features.process',
      'services.items.consulting.features.growth',
      'services.items.consulting.features.metrics'
    ],
    link: '/services#service1'
  },
  {
    id: 'service2',
    titleKey: 'services.items.webdev.title',
    descriptionKey: 'services.items.webdev.description',
    icon: faLaptopCode,
    price: '499',
    features: [
      'services.items.webdev.features.responsive',
      'services.items.webdev.features.ecommerce',
      'services.items.webdev.features.cms',
      'services.items.webdev.features.applications',
      'services.items.webdev.features.maintenance'
    ],
    link: '/services#service2'
  },
  {
    id: 'service3',
    titleKey: 'services.items.marketing.title',
    descriptionKey: 'services.items.marketing.description',
    icon: faBullhorn,
    price: '399',
    features: [
      'services.items.marketing.features.seo',
      'services.items.marketing.features.content',
      'services.items.marketing.features.social',
      'services.items.marketing.features.email',
      'services.items.marketing.features.analytics'
    ],
    link: '/services#service3'
  },
  {
    id: 'service4',
    titleKey: 'services.items.hr.title',
    descriptionKey: 'services.items.hr.description',
    icon: faUsers,
    price: '349',
    features: [
      'services.items.hr.features.recruitment',
      'services.items.hr.features.training',
      'services.items.hr.features.performance',
      'services.items.hr.features.policy',
      'services.items.hr.features.compliance'
    ],
    link: '/services#service4'
  },
  {
    id: 'service5',
    titleKey: 'services.items.security.title',
    descriptionKey: 'services.items.security.description',
    icon: faShieldAlt,
    price: '599',
    features: [
      'services.items.security.features.assessment',
      'services.items.security.features.network',
      'services.items.security.features.encryption',
      'services.items.security.features.incident',
      'services.items.security.features.training'
    ],
    link: '/services#service5'
  },
  {
    id: 'service6',
    titleKey: 'services.items.analytics.title',
    descriptionKey: 'services.items.analytics.description',
    icon: faChartPie,
    price: '449',
    features: [
      'services.items.analytics.features.visualization',
      'services.items.analytics.features.intelligence',
      'services.items.analytics.features.predictive',
      'services.items.analytics.features.reporting',
      'services.items.analytics.features.integration'
    ],
    link: '/services#service6'
  }
];

// Helper function to get translated services
export const getTranslatedServices = (t) => {
  return services.map(service => ({
    ...service,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
    features: service.features.map(featureKey => t(featureKey))
  }));
};