import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Services.css';

const Testimonial = ({ 
  name, nameKey,
  position, positionKey,
  company, companyKey,
  rating,
  text, textKey,
  image 
}) => {
  const { t } = useTranslation();
  
  // Support both direct content and translation keys
  const displayName = nameKey ? t(nameKey) : name;
  const displayPosition = positionKey ? t(positionKey) : position;
  const displayCompany = companyKey ? t(companyKey) : company;
  const displayText = textKey ? t(textKey) : text;
  
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
        
        <Card.Text className="testimonial-text mb-4">{displayText}</Card.Text>
        
        <div className="testimonial-author d-flex align-items-center">
          <img 
            src={image} 
            alt={displayName} 
            className="rounded-circle me-3" 
            width="60" 
            height="60" 
          />
          <div>
            <h5 className="mb-0">{displayName}</h5>
            <p className="text-muted mb-0">
              {displayPosition}{displayCompany ? `, ${displayCompany}` : ''}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;