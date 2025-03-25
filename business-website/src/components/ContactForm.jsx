import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Contact.css';

const ContactForm = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Simulate API call
    setSubmitted(true);
    
    // In a real app, you would send the form data to your backend
  };
  
  if (submitted) {
    return (
      <Alert variant="success" className="text-center p-5">
        <h4>{t('contact.form.success.title')}</h4>
        <p>{t('contact.form.success.message')}</p>
        <Button 
          variant="outline-success" 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
            });
            setValidated(false);
          }}
        >
          {t('contact.form.success.button')}
        </Button>
      </Alert>
    );
  }
  
  return (
    <div className="contact-form">
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>{t('contact.form.fields.name')}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form.fields.placeholders.name')}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t('contact.form.fields.validation.name')}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>{t('contact.form.fields.email')}</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.fields.placeholders.email')}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t('contact.form.fields.validation.email')}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>{t('contact.form.fields.phone')}</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('contact.form.fields.placeholders.phone')}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>{t('contact.form.fields.subject')}</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contact.form.fields.placeholders.subject')}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t('contact.form.fields.validation.subject')}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>{t('contact.form.fields.message')}</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form.fields.placeholders.message')}
            rows={5}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t('contact.form.fields.validation.message')}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">
          {t('contact.form.fields.submit')}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;