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
import '../styles/Footer.css';

const Footer = () => {
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
                We provide top-quality services tailored to meet your needs. 
                Our commitment to excellence and customer satisfaction sets us apart.
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
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <div className="footer-services">
              <h5>Our Services</h5>
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
              <h5>Contact Info</h5>
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
                <h6>Subscribe to Our Newsletter</h6>
                <form className="d-flex">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    required 
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center py-3 copyright">
            <p>© {currentYear} Your Business. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;