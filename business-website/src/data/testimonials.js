// Using translation keys for testimonials
export const testimonials = [
    {
      nameKey: 'testimonials.robert.name',
      positionKey: 'testimonials.robert.position',
      companyKey: 'testimonials.robert.company',
      rating: 5,
      textKey: 'testimonials.robert.text',
      image: '/images/testimonials/client-1.jpg'
    },
    {
      nameKey: 'testimonials.jennifer.name',
      positionKey: 'testimonials.jennifer.position',
      companyKey: 'testimonials.jennifer.company',
      rating: 5,
      textKey: 'testimonials.jennifer.text',
      image: '/images/testimonials/client-2.jpg'
    },
    {
      nameKey: 'testimonials.david.name',
      positionKey: 'testimonials.david.position',
      companyKey: 'testimonials.david.company',
      rating: 4,
      textKey: 'testimonials.david.text',
      image: '/images/testimonials/client-3.jpg'
    },
    {
      nameKey: 'testimonials.lisa.name',
      positionKey: 'testimonials.lisa.position',
      companyKey: 'testimonials.lisa.company',
      rating: 5,
      textKey: 'testimonials.lisa.text',
      image: '/images/testimonials/client-4.jpg'
    },
    {
      nameKey: 'testimonials.james.name',
      positionKey: 'testimonials.james.position',
      companyKey: 'testimonials.james.company',
      rating: 4,
      textKey: 'testimonials.james.text',
      image: '/images/testimonials/client-5.jpg'
    },
    {
      nameKey: 'testimonials.michelle.name',
      positionKey: 'testimonials.michelle.position',
      companyKey: 'testimonials.michelle.company',
      rating: 5,
      textKey: 'testimonials.michelle.text',
      image: '/images/testimonials/client-6.jpg'
    }
  ];
  
  // Helper function to get translated testimonials
  export const getTranslatedTestimonials = (t) => {
    return testimonials.map(testimonial => ({
      name: t(testimonial.nameKey),
      position: t(testimonial.positionKey),
      company: t(testimonial.companyKey),
      rating: testimonial.rating,
      text: t(testimonial.textKey),
      image: testimonial.image
    }));
  };