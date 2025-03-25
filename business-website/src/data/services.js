import { 
    faChartLine, 
    faLaptopCode, 
    faBullhorn, 
    faUsers, 
    faShieldAlt, 
    faChartPie 
  } from '@fortawesome/free-solid-svg-icons';
  
  export const services = [
    {
      id: 'service1',
      title: 'Business Consulting',
      description: 'Strategic advice to help your business grow and overcome challenges.',
      icon: faChartLine,
      price: '299',
      features: [
        'Business analysis',
        'Strategic planning',
        'Process improvement',
        'Growth strategies',
        'Performance metrics'
      ],
      link: '/services#service1'
    },
    {
      id: 'service2',
      title: 'Web Development',
      description: 'Custom website solutions designed to meet your business needs and goals.',
      icon: faLaptopCode,
      price: '499',
      features: [
        'Responsive design',
        'E-commerce solutions',
        'Content management',
        'Web applications',
        'Maintenance support'
      ],
      link: '/services#service2'
    },
    {
      id: 'service3',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      icon: faBullhorn,
      price: '399',
      features: [
        'SEO optimization',
        'Content marketing',
        'Social media management',
        'Email campaigns',
        'Analytics and reporting'
      ],
      link: '/services#service3'
    },
    {
      id: 'service4',
      title: 'HR Services',
      description: 'Professional human resources solutions to manage and develop your workforce.',
      icon: faUsers,
      price: '349',
      features: [
        'Recruitment and staffing',
        'Employee training',
        'Performance management',
        'Policy development',
        'Compliance consulting'
      ],
      link: '/services#service4'
    },
    {
      id: 'service5',
      title: 'IT Security',
      description: 'Protect your business with cutting-edge cybersecurity solutions.',
      icon: faShieldAlt,
      price: '599',
      features: [
        'Security assessments',
        'Network protection',
        'Data encryption',
        'Incident response',
        'Employee training'
      ],
      link: '/services#service5'
    },
    {
      id: 'service6',
      title: 'Data Analytics',
      description: 'Harness the power of your data to make informed business decisions.',
      icon: faChartPie,
      price: '449',
      features: [
        'Data visualization',
        'Business intelligence',
        'Predictive analytics',
        'Custom reporting',
        'Data integration'
      ],
      link: '/services#service6'
    }
  ];