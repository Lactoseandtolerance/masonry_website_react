// New approach with translation keys
export const faqs = [
    {
      questionKey: 'faqs.services.question',
      answerKey: 'faqs.services.answer'
    },
    {
      questionKey: 'faqs.pricing.question',
      answerKey: 'faqs.pricing.answer'
    },
    {
      questionKey: 'faqs.timeline.question',
      answerKey: 'faqs.timeline.answer'
    },
    {
      questionKey: 'faqs.support.question',
      answerKey: 'faqs.support.answer'
    },
    {
      questionKey: 'faqs.business_size.question',
      answerKey: 'faqs.business_size.answer'
    },
    {
      questionKey: 'faqs.industries.question',
      answerKey: 'faqs.industries.answer'
    },
    {
      questionKey: 'faqs.metrics.question',
      answerKey: 'faqs.metrics.answer'
    },
    {
      questionKey: 'faqs.guarantees.question',
      answerKey: 'faqs.guarantees.answer'
    },
    {
      questionKey: 'faqs.getting_started.question',
      answerKey: 'faqs.getting_started.answer'
    },
    {
      questionKey: 'faqs.customization.question',
      answerKey: 'faqs.customization.answer'
    }
  ];
  
  // Helper function to get translated FAQs
  export const getTranslatedFaqs = (t) => {
    return faqs.map(faq => ({
      question: t(faq.questionKey),
      answer: t(faq.answerKey)
    }));
  };