import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import '../styles/pages/About.css';

const TeamMember = ({ name, position, bio, image, social }) => {
  return (
    <Card className="team-member h-100">
      <div className="member-image">
        <img src={image} alt={name} className="img-fluid" />
        
        {social && (
          <div className="social-links">
            {social.facebook && (
              <a 
                href={social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            )}
            
            {social.twitter && (
              <a 
                href={social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}
            
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            )}
          </div>
        )}
      </div>
      
      <Card.Body>
        <Card.Title as="h4">{name}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{position}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;