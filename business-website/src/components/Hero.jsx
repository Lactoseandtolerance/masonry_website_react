import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

const Hero = ({ title, subtitle, description, ctaText, ctaLink, image, overlay = true }) => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && <div className="overlay"></div>}
      <Container>
        <Row className="align-items-center min-vh-80">
          <Col lg={8} md={10} className="mx-auto text-center text-white">
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            <h2 className="h3 mb-4">{subtitle}</h2>
            <p className="lead mb-5">{description}</p>
            {ctaText && ctaLink && (
              <Link to={ctaLink}>
                <Button size="lg" className="primary-btn">
                  {ctaText}
                </Button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;