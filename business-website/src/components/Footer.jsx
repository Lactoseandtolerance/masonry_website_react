import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="main-footer">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-about">
              <img 
                src="/images/logo-white.png" 
                alt="Business Logo" 
                height="50" 
                className="mb-3"
              />
              <h5>Your Business</h5>
              <p>
                {t('footer.about.description')}
              </p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <div className="footer-links">
              <h5>{t('footer.links')}</h5>
              <ul className="list-unstyled">
                <li><Link to="/">{t('navigation.home')}</Link></li>
                <li><Link to="/about">{t('navigation.about')}</Link></li>
                <li><Link to="/services">{t('navigation.services')}</Link></li>
                <li><Link to="/contact">{t('navigation.contact')}</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <div className="footer-services">
              <h5>{t('footer.services')}</h5>
              <ul className="list-unstyled">
                <li><a href="/services#service1">Service One</a></li>
                <li><a href="/services#service2">Service Two</a></li>
                <li><a href="/services#service3">Service Three</a></li>
                <li><a href="/services#service4">Service Four</a></li>
                <li><a href="/services#service5">Service Five</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <div className="footer-contact">
              <h5>{t('footer.contact')}</h5>
              <ul className="list-unstyled contact-info">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>123 Business St, City, State 12345</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>(123) 456-7890</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@yourbusiness.com</span>
                </li>
              </ul>
              <div className="newsletter">
                <h6>{t('footer.newsletter.title')}</h6>
                <form className="d-flex">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder={t('footer.newsletter.placeholder')} 
                    required 
                  />
                  <button type="submit" className="btn btn-primary">
                    {t('footer.newsletter.button')}
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center py-3 copyright">
            <p>{t('footer.copyright', { year: currentYear })}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;