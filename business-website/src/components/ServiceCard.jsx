import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/pages/Services.css';

const ServiceCard = ({ id, title, description, icon, price, features, link }) => {
  return (
    <Card className="service-card h-100">
      <Card.Body className="d-flex flex-column">
        <div className="icon-container mb-4">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        
        <Card.Title as="h3">{title}</Card.Title>
        
        {price && (
          <div className="price-container my-3">
            <span className="price">${price}</span>
            {price.includes('/') ? null : <span className="period">/service</span>}
          </div>
        )}
        
        <Card.Text>{description}</Card.Text>
        
        {features && features.length > 0 && (
          <ul className="features-list mt-3">
            {features.map((feature, index) => (
              <li key={index}>
                <FontAwesomeIcon icon="check" className="text-success me-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-3">
          <Link to={link || `/services#${id}`}>
            <Button variant="outline-primary" className="w-100">
              Learn More
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;