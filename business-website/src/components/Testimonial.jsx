import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/Services.css';

const Testimonial = ({ name, position, company, rating, text, image }) => {
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i < rating ? "text-warning" : "text-muted"} 
        />
      );
    }
    return stars;
  };

  return (
    <Card className="testimonial-card h-100">
      <Card.Body>
        <div className="quote-icon mb-3">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
        </div>
        
        <div className="testimonial-rating mb-3">
          {renderStars(rating)}
        </div>
        
        <Card.Text className="testimonial-text mb-4">{text}</Card.Text>
        
        <div className="testimonial-author d-flex align-items-center">
          <img 
            src={image} 
            alt={name} 
            className="rounded-circle me-3" 
            width="60" 
            height="60" 
          />
          <div>
            <h5 className="mb-0">{name}</h5>
            <p className="text-muted mb-0">
              {position}{company ? `, ${company}` : ''}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;