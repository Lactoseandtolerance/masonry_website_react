import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Get current language
  const currentLanguage = i18n.language;

  return (
    <Dropdown className="language-selector">
      <Dropdown.Toggle variant="link" id="dropdown-language" className="nav-link language-toggle">
        <FontAwesomeIcon icon={faGlobe} className="me-1" />
        <span className="d-none d-md-inline">{currentLanguage === 'es' ? 'ES' : 'EN'}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item 
          onClick={() => changeLanguage('en')} 
          active={currentLanguage === 'en'}
        >
          {t('languageSelector.english')}
        </Dropdown.Item>
        <Dropdown.Item 
          onClick={() => changeLanguage('es')} 
          active={currentLanguage === 'es'}
        >
          {t('languageSelector.spanish')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;