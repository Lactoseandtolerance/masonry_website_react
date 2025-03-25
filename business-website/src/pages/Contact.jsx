import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import '../styles/pages/Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: faLocationDot,
      title: t('contact.details.visit'),
      details: [
        '123 Business Street',
        'Suite 100',
        'City, State 12345',
        'United States'
      ]
    },
    {
      icon: faPhone,
      title: t('contact.details.call'),
      details: [
        'Main: (123) 456-7890',
        'Sales: (123) 456-7891',
        'Support: (123) 456-7892'
      ]
    },
    {
      icon: faEnvelope,
      title: t('contact.details.email'),
      details: [
        'info@yourbusiness.com',
        'sales@yourbusiness.com',
        'support@yourbusiness.com'
      ]
    },
    {
      icon: faClock,
      title: t('contact.details.hours'),
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];
  
  const socialMedia = [
    { icon: faFacebookF, url: 'https://facebook.com', name: 'Facebook' },
    { icon: faTwitter, url: 'https://twitter.com', name: 'Twitter' },
    { icon: faInstagram, url: 'https://instagram.com', name: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://linkedin.com', name: 'LinkedIn' }
  ];
  
  return (
    <>
      <Hero
        section="contact"
        image="/images/contact-hero.jpg"
      />
      
      <section className="contact-details py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('contact.details.title')}</h2>
              <p className="section-subtitle">
                {t('contact.details.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="contact-card h-100">
                  <Card.Body className="text-center">
                    <div className="contact-icon mb-3">
                      <FontAwesomeIcon icon={info.icon} size="2x" />
                    </div>
                    <Card.Title as="h3">{info.title}</Card.Title>
                    <ul className="list-unstyled contact-details">
                      {info.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="social-section mt-4">
            <Col className="text-center">
              <h3 className="mb-3">{t('contact.details.social.title')}</h3>
              <div className="social-icons">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="contact-form-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="form-wrapper">
                <h2 className="mb-4">{t('contact.form.title')}</h2>
                <p className="mb-4">
                  {t('contact.form.subtitle')}
                </p>
                <ContactForm />
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="map-container h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876543!3d40.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzU1LjYiTiA3M8KwNTknMTUuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="faq-cta py-5 text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="mb-4">{t('contact.faq.title')}</h2>
              <p className="lead mb-4">
                {t('contact.faq.description')}
              </p>
              <a href="/services#faq" className="btn btn-primary">
                {t('contact.faq.button')}
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;