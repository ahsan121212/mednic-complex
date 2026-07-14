'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'doctors', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <Stethoscope size={28} />
          MEDNIC <span>COMPLEX</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#doctors"
              className={`nav-link ${activeSection === 'doctors' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'doctors')}
            >
              Doctors
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <button className="btn btn-primary" onClick={onBookClick} style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
              Book Appointment
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#doctors"
              className={`nav-link ${activeSection === 'doctors' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'doctors')}
            >
              Doctors
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
          <li style={{ marginTop: '12px' }}>
            <button className="btn btn-primary" onClick={() => { setIsOpen(false); onBookClick(); }}>
              Book Appointment
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
