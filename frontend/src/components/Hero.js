import Image from 'next/image';
import { Calendar, ShieldCheck } from 'lucide-react';

export default function Hero({ onBookClick }) {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-slide">
            <span className="badge">Welcome to Mednic Complex</span>
            <h1 className="hero-headline">
              Your Trusted <span>Medical & Aesthetic Care</span> in Johar Town
            </h1>
            <p className="hero-subtext">
              Professional care, modern treatments, and patient-first approach. We combine medical expertise with state-of-the-art technology to provide you with the best healthcare experience.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={onBookClick}>
                <Calendar size={18} />
                Book Appointment
              </button>
              <button className="btn btn-secondary" onClick={handleScrollToServices}>
                Explore Services
              </button>
            </div>
          </div>

          <div className="hero-image-container animate-fade">
            <div className="hero-image-wrapper">
              <Image 
                src="/images/clinic_hero.jpg"
                alt="Mednic Complex Aesthetic Clinic Interior" 
                className="hero-img"
                width={600}
                height={450}
                priority
              />
              
              <div className="hero-stats-card">
                <div style={{ color: 'var(--color-primary)', background: 'var(--color-accent-light)', padding: '10px', borderRadius: '50%' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="hero-stats-number">100%</div>
                  <div className="hero-stats-label">Certified Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
