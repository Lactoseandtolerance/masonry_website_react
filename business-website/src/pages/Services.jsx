import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import '../styles/pages/Services.css';

const Services = () => {
  const processes = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We start with a thorough consultation to understand your needs and objectives.'
    },
    {
      step: 2,
      title: 'Custom Proposal',
      description: 'We create a tailored proposal outlining our approach, timeline, and pricing.'
    },
    {
      step: 3,
      title: 'Service Delivery',
      description: 'Our team executes the plan with attention to detail and regular updates.'
    },
    {
      step: 4,
      title: 'Review & Feedback',
      description: 'We review the results together and collect your feedback for continuous improvement.'
    }
  ];
  
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Solutions for Your Business"
        description="Explore our range of professional services designed to help your business grow and succeed."
        image="/images/services-hero.jpg"
      />
      
      <section className="services-overview py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                Discover our comprehensive range of services tailored to meet your business needs
              </p>
            </Col>
          </Row>
          
          <Row>
            {services.map((service) => (
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
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">
                A simple, effective approach to delivering exceptional results
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
              <h2 className="section-title">Pricing</h2>
              <p className="section-subtitle">
                Transparent pricing options designed to fit your budget
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">Basic Package</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">299</span>
                    <span className="period">/month</span>
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
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card featured h-100">
                <div className="popular-badge">Most Popular</div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">Premium Package</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">599</span>
                    <span className="period">/month</span>
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
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="pricing-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3" className="text-center">Enterprise Package</Card.Title>
                  <div className="pricing-value text-center my-4">
                    <span className="currency">$</span>
                    <span className="price">999</span>
                    <span className="period">/month</span>
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
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-4 text-center">
            <Col>
              <p>Need a custom solution? <Link to="/contact">Contact us</Link> for a personalized quote.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section id="testimonials" className="testimonials-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Read testimonials from our satisfied clients
              </p>
            </Col>
          </Row>
          
          <Row>
            {testimonials.map((testimonial, index) => (
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
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common questions about our services
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <FAQ faqs={faqs} />
            </Col>
          </Row>
          
          <Row className="mt-5 text-center">
            <Col>
              <p className="mb-4">
                Don't see your question here? Contact us for more information.
              </p>
              <Link to="/contact">
                <Button variant="primary">
                  Ask a Question
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