import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { getTranslatedFaqs } from '../data/faqs';
import '../styles/pages/Services.css';

const FAQ = () => {
  const { t } = useTranslation();
  
  // Get translated FAQs
  const translatedFaqs = getTranslatedFaqs(t);
  
  return (
    <div className="faq-section">
      <Accordion defaultActiveKey="0" flush>
        {translatedFaqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <span className="faq-question">{faq.question}</span>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-answer">{faq.answer}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;