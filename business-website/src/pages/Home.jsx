import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faUsers, 
  faClock, 
  faAward 
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { getTranslatedServices } from '../data/services';
import { testimonials } from '../data/testimonials';
import '../styles/pages/Home.css';

const Home = () => {
  const { t } = useTranslation();
  
  // Get translated services
  const allServices = getTranslatedServices(t);
  
  // Get 3 featured services to display on homepage
  const featuredServices = allServices.slice(0, 3);
  
  // Get 2 featured testimonials
  const featuredTestimonials = testimonials.slice(0, 2);
  
  return (
    <>
      <Hero
        section="home"
        image="/images/hero-bg.jpg"
      />
      
      <section className="features-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('home.features.title')}</h2>
              <p className="section-subtitle">
                {t('home.features.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                  </div>
                  <Card.Title>{t('home.features.quality.title')}</Card.Title>
                  <Card.Text>
                    {t('home.features.quality.description')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                  </div>
                  <Card.Title>{t('home.features.team.title')}</Card.Title>
                  <Card.Text>
                    {t('home.features.team.description')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <FontAwesomeIcon icon={faClock} size="2x" />
                  </div>
                  <Card.Title>{t('home.features.delivery.title')}</Card.Title>
                  <Card.Text>
                    {t('home.features.delivery.description')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <FontAwesomeIcon icon={faAward} size="2x" />
                  </div>
                  <Card.Title>{t('home.features.satisfaction.title')}</Card.Title>
                  <Card.Text>
                    {t('home.features.satisfaction.description')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="services-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('home.services.title')}</h2>
              <p className="section-subtitle">
                {t('home.services.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {featuredServices.map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <ServiceCard {...service} />
              </Col>
            ))}
          </Row>
          
          <Row className="mt-4 text-center">
            <Col>
              <Link to="/services">
                <Button variant="outline-primary" size="lg">
                  {t('home.services.viewAll')}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="cta-section py-5 text-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="mb-4">{t('home.cta.title')}</h2>
              <p className="lead mb-4">
                {t('home.cta.description')}
              </p>
              <Link to="/contact">
                <Button variant="light" size="lg" className="me-3">
                  {t('home.cta.contactUs')}
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-light" size="lg">
                  {t('home.cta.learnMore')}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="testimonials-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">{t('home.testimonials.title')}</h2>
              <p className="section-subtitle">
                {t('home.testimonials.subtitle')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {featuredTestimonials.map((testimonial, index) => (
              <Col md={6} className="mb-4" key={index}>
                <Testimonial {...testimonial} />
              </Col>
            ))}
          </Row>
          
          <Row className="mt-4 text-center">
            <Col>
              <Link to="/services#testimonials">
                <Button variant="outline-primary">
                  {t('home.testimonials.viewMore')}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;