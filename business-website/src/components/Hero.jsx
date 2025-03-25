import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Home.css';

const Hero = ({ section, overlay = true, image }) => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && <div className="overlay"></div>}
      <Container>
        <Row className="align-items-center min-vh-80">
          <Col lg={8} md={10} className="mx-auto text-center text-white">
            <h1 className="display-4 fw-bold mb-3">{t(`${section}.hero.title`)}</h1>
            <h2 className="h3 mb-4">{t(`${section}.hero.subtitle`)}</h2>
            <p className="lead mb-5">{t(`${section}.hero.description`)}</p>
            {section === 'home' && (
              <Link to="/contact">
                <Button size="lg" className="primary-btn">
                  {t('home.hero.cta')}
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