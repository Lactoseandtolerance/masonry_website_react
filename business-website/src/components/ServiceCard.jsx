import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Services.css';

// This version of ServiceCard works with both approaches:
// 1. Directly using translated content passed as props
// 2. Using translation keys and t function internally

const ServiceCard = ({ 
  id, 
  title, 
  titleKey,
  description, 
  descriptionKey,
  icon, 
  price, 
  features,
  link 
}) => {
  const { t } = useTranslation();
  
  // Support both direct content and translation keys
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;
  
  // For features, check if they're keys or direct strings
  const renderFeature = (feature) => {
    // If feature starts with services.items, it's likely a translation key
    if (typeof feature === 'string' && feature.startsWith('services.items')) {
      return t(feature);
    }
    return feature;
  };
  
  return (
    <Card className="service-card h-100">
      <Card.Body className="d-flex flex-column">
        <div className="icon-container mb-4">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        
        <Card.Title as="h3">{displayTitle}</Card.Title>
        
        {price && (
          <div className="price-container my-3">
            <span className="price">${price}</span>
            {price.includes('/') ? null : <span className="period">{t('services.pricing.packages.month')}</span>}
          </div>
        )}
        
        <Card.Text>{displayDescription}</Card.Text>
        
        {features && features.length > 0 && (
          <ul className="features-list mt-3">
            {features.map((feature, index) => (
              <li key={index}>
                <FontAwesomeIcon icon="check" className="text-success me-2" />
                {renderFeature(feature)}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-3">
          <Link to={link || `/services#${id}`}>
            <Button variant="outline-primary" className="w-100">
              {t('services.pricing.packages.getStarted')}
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;