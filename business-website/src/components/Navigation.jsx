import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`main-nav ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/images/logo.png" 
            alt="Business Logo" 
            height="40" 
            className="d-inline-block align-top"
          />
          <span className="brand-name">Your Business</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            
            <Nav.Link 
              href="#" 
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.contact-form') && 
                document.querySelector('.contact-form').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get a Quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;