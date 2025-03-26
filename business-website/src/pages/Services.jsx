import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import { services, getTranslatedServices } from '../data/services';
import { testimonials, getTranslatedTestimonials } from '../data/testimonials';
import '../styles/pages/Services.css';

const Services = () => {
  const { t } = useTranslation();

  // Get translated services using our helper function
  const translatedServices = getTranslatedServices(t);
  
  const processes = [
    {
      step: 1,
      title: t('services.process.steps.consultation.title'),
      description: t('services.process.steps.consultation.description')
    },
    {
      step: 2,
      title: t('services.process.steps.proposal.title'),
      description: t('services.process.steps.proposal.description')
    },
    {
      step: 3,
      title: t('services.process.steps.delivery.title'),
      description: t('services.process.steps.delivery.description')
    },
    {
      step: 4,
      title: t('services.process.steps.review.title'),
      description: t('services.process.steps.review.description')
    }
  ];
  
  return (
    <>
      <Hero
        section="services"
        image="/images/services-hero.jpg"
      />
      
      <section className="services-overview py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('services.overview.title')}</h2>
              <p className="section-subtitle">
                {t('services.overview.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {translatedServices.map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <ServiceCard {...service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="process-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('services.process.title')}</h2>
              <p className="section-subtitle">
                {t('services.process.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {processes.map((process) => (
              <Col md={3} className="mb-4" key={process.step}>
                <div className="process-card text-center h-100">
                  <div className="process-step">
                    <span>{process.step}</span>
                  </div>
                  <h3 className="process-title">{process.title}</h3>
                  <p className="process-description">{process.description}</p>
                  
                  {process.step < processes.length && (
                    <div className="process-arrow d-none d-md-block">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="pricing-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('services.pricing.title')}</h2>
              <p className="section-subtitle">
                {t('services.pricing.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">{t('services.pricing.packages.basic')}</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">299</span>
                    <span className="period">{t('services.pricing.packages.month')}</span>
                  </div>
                  
                  <ul className="pricing-features">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li className="unavailable">Feature 4</li>
                    <li className="unavailable">Feature 5</li>
                  </ul>
                  
                  <div className="mt-auto text-center">
                    <Link to="/contact">
                      <Button variant="outline-primary" className="w-100">
                        {t('services.pricing.packages.getStarted')}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card featured h-100">
                <div className="popular-badge">{t('services.pricing.packages.popular')}</div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">{t('services.pricing.packages.premium')}</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">599</span>
                    <span className="period">{t('services.pricing.packages.month')}</span>
                  </div>
                  
                  <ul className="pricing-features">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                  </ul>
                  
                  <div className="mt-auto text-center">
                    <Link to="/contact">
                      <Button variant="primary" className="w-100">
                        {t('services.pricing.packages.getStarted')}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">{t('services.pricing.packages.enterprise')}</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">999</span>
                    <span className="period">{t('services.pricing.packages.month')}</span>
                  </div>
                  
                  <ul className="pricing-features">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                    <li>Feature 6</li>
                  </ul>
                  
                  <div className="mt-auto text-center">
                    <Link to="/contact">
                      <Button variant="outline-primary" className="w-100">
                        {t('services.pricing.packages.getStarted')}
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-4 text-center">
            <Col>
              <p>{t('services.pricing.packages.custom')}</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section id="testimonials" className="testimonials-section py-5 bg-light">
        <Container>
            <Row className="text-center mb-5">
            <Col>
                <h2 className="section-title">{t('services.testimonials.title')}</h2>
                <p className="section-subtitle">
                {t('services.testimonials.subtitle')}
                </p>
            </Col>
            </Row>
            
            <Row>
            {getTranslatedTestimonials(t).map((testimonial, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                <Testimonial {...testimonial} />
                </Col>
            ))}
            </Row>
        </Container>
      </section>

      <section className="faq-section py-5">
       <Container>
        <Row className="text-center mb-5">
        <Col>
            <h2 className="section-title">{t('services.faq.title')}</h2>
            <p className="section-subtitle">
            {t('services.faq.subtitle')}
            </p>
        </Col>
        </Row>
        
        <Row className="justify-content-center">
        <Col lg={8}>
            <FAQ />
        </Col>
        </Row>
        
        <Row className="mt-5 text-center">
        <Col>
            <p className="mb-4">
            {t('services.faq.notFound')}
            </p>
            <Link to="/contact">
            <Button variant="primary">
                {t('services.faq.askButton')}
            </Button>
            </Link>
        </Col>
        </Row>
       </Container>
      </section>
    </>
  );
};

export default Services;