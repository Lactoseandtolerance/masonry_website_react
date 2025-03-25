import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faEye, 
  faHandshake, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../components/Hero';
import TeamMember from '../components/TeamMember';
import { team } from '../data/team';
import '../styles/pages/About.css';

const About = () => {
  const skills = [
    { name: 'Customer Service', percentage: 95 },
    { name: 'Industry Knowledge', percentage: 90 },
    { name: 'Innovation', percentage: 85 },
    { name: 'Project Management', percentage: 92 }
  ];
  
  const values = [
    {
      icon: faBullseye,
      title: 'Mission',
      description: 'To provide exceptional services that exceed client expectations and deliver measurable results for their business.'
    },
    {
      icon: faEye,
      title: 'Vision',
      description: 'To be the leading service provider in our industry, recognized for excellence, innovation, and customer satisfaction.'
    },
    {
      icon: faHandshake,
      title: 'Values',
      description: 'Integrity, excellence, accountability, innovation, and customer focus drive everything we do.'
    },
    {
      icon: faChartLine,
      title: 'Growth',
      description: 'We are committed to continuous growth, both for our clients\' businesses and for our own professional development.'
    }
  ];
  
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Our company was founded with a vision to provide top-quality services to businesses of all sizes.'
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'We expanded our service offerings and opened our second office location to serve more clients.'
    },
    {
      year: '2016',
      title: 'Industry Recognition',
      description: 'We received our first industry award for excellence in service and customer satisfaction.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'We embraced digital technologies and launched our innovative online service platform.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'We began serving international clients and established partnerships with global industry leaders.'
    }
  ];
  
  return (
    <>
      <Hero
        title="About Our Company"
        subtitle="Learn More About Who We Are"
        description="Discover our story, mission, values, and the dedicated team behind our success."
        image="/images/about-hero.jpg"
      />
      
      <section className="about-intro py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="/images/about-image.jpg" 
                alt="About Our Company" 
                className="img-fluid rounded shadow-lg" 
              />
            </Col>
            
            <Col lg={6}>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4">
                Founded in 2010, our company has grown from a small startup to a leading 
                service provider in the industry. We began with a simple mission: to deliver 
                high-quality services that help businesses succeed.
              </p>
              <p className="mb-4">
                Over the years, we've expanded our team and service offerings while 
                maintaining our commitment to excellence and customer satisfaction. 
                Our journey has been marked by continuous learning, innovation, and 
                adaptation to the evolving needs of our clients.
              </p>
              <p>
                Today, we serve a diverse range of clients across various industries, 
                bringing our expertise and dedication to every project we undertake. 
                We're proud of our achievements and excited about the future as we 
                continue to grow and evolve.
              </p>
              
              <div className="d-flex justify-content-between mt-4">
                <div className="stat-box text-center">
                  <h3 className="stat-number">10+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
                
                <div className="stat-box text-center">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Clients Served</p>
                </div>
                
                <div className="stat-box text-center">
                  <h3 className="stat-number">1000+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
                
                <div className="stat-box text-center">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Industry Awards</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="values-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Our Mission & Values</h2>
              <p className="section-subtitle">
                The principles that guide our business and define who we are
              </p>
            </Col>
          </Row>
          
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="value-card text-center h-100">
                  <div className="value-icon">
                    <FontAwesomeIcon icon={value.icon} size="2x" />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="expertise-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">Our Expertise</h2>
              <p className="mb-4">
                With years of experience in the industry, we've developed a comprehensive 
                set of skills and expertise that enable us to deliver exceptional results 
                for our clients.
              </p>
              
              {skills.map((skill, index) => (
                <div className="skill-item mb-4" key={index}>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.percentage} 
                    variant="primary" 
                    className="skill-bar" 
                  />
                </div>
              ))}
              
              <Link to="/services">
                <Button variant="primary" className="mt-3">
                  Explore Our Services
                </Button>
              </Link>
            </Col>
            
            <Col lg={6}>
              <div className="timeline">
                <h3 className="mb-4">Our Journey</h3>
                
                {milestones.map((milestone, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-badge">
                      <span>{milestone.year}</span>
                    </div>
                    <div className="timeline-content">
                      <h4>{milestone.title}</h4>
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="team-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">
                The dedicated professionals behind our success
              </p>
            </Col>
          </Row>
          
          <Row>
            {team.map((member, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <TeamMember {...member} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="cta-section py-5 text-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="mb-4">Ready to Work With Us?</h2>
              <p className="lead mb-4">
                Contact our team today to discuss your project and discover how 
                we can help you achieve your business goals.
              </p>
              <Link to="/contact">
                <Button variant="light" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;