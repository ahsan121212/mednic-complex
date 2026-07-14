import { Stethoscope, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-column">
            <a href="#home" className="footer-about-logo" onClick={(e) => handleLinkClick(e, 'home')}>
              MEDNIC <span>COMPLEX</span>
            </a>
            <p style={{ margin: '16px 0 24px 0', lineHeight: '1.7' }}>
              Premium clinical and aesthetic care center in Johar Town, Lahore. We provide advanced skincare, dental implant solutions, aesthetic fillers, and family healthcare diagnostics.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Our Services</a></li>
              <li><a href="#doctors" onClick={(e) => handleLinkClick(e, 'doctors')}>Our Doctors</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Services Offered</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>General Consultation</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Dental Care Solutions</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Dermatological & Skin</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Aesthetic Procedures</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-light)' }}><Phone size={18} /></span>
                <a href="tel:+923377633555" style={{ color: 'inherit' }}>+92 337 7633555</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-light)' }}><MapPin size={18} /></span>
                <span>G-3 Block, Johar Town, Lahore, Pakistan</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-light)' }}><Clock size={18} /></span>
                <span>12:00 PM – 11:00 PM (Daily)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mednic Complex. All Rights Reserved. Designed with clinical care.</p>
        </div>
      </div>
    </footer>
  );
}
