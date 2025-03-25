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
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import '../styles/pages/Home.css';

const Home = () => {
  // Get 3 featured services to display on homepage
  const featuredServices = services.slice(0, 3);
  
  // Get 2 featured testimonials
  const featuredTestimonials = testimonials.slice(0, 2);
  
  return (
    <>
      <Hero
        title="Your Trusted Business Partner"
        subtitle="Professional Services Tailored to Your Needs"
        description="We provide top-quality solutions that help your business grow and thrive in today's competitive market."
        ctaText="Get Started"
        ctaLink="/contact"
        image="/images/hero-bg.jpg"
      />
      
      <section className="features-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                Discover what sets our services apart from the competition
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
                  <Card.Title>Quality Service</Card.Title>
                  <Card.Text>
                    We pride ourselves on delivering exceptional quality in every project we undertake.
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
                  <Card.Title>Expert Team</Card.Title>
                  <Card.Text>
                    Our team of professionals has the expertise to tackle even the most complex challenges.
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
                  <Card.Title>Timely Delivery</Card.Title>
                  <Card.Text>
                    We understand the value of your time and always deliver our services on schedule.
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
                  <Card.Title>Customer Satisfaction</Card.Title>
                  <Card.Text>
                    Your satisfaction is our top priority, and we go above and beyond to ensure it.
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
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Explore our range of professional services designed to meet your business needs
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
                  View All Services
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
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Contact us today for a free consultation and discover how our services
                can help your business succeed.
              </p>
              <Link to="/contact">
                <Button variant="light" size="lg" className="me-3">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-light" size="lg">
                  Learn More
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
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Don't just take our word for it - hear from our satisfied clients
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
                  View More Testimonials
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