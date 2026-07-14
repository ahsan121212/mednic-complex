import { MapPin, Star, ExternalLink } from 'lucide-react';

export default function Map() {
  const rating = 4.7;
  const reviewCount = 84; // Mock review count, representing high patient satisfaction

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="badge">Find Us</span>
          <h2 className="section-title">Our Clinic Location</h2>
          <p className="section-subtitle">
            Mednic Complex is centrally located in Johar Town, Lahore. Find directions below and visit us.
          </p>
        </div>

        <div className="map-container-grid">
          {/* Card Info */}
          <div className="map-info-card">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--color-text-main)' }}>MEDNIC COMPLEX</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
              <span style={{ color: 'var(--color-primary)', marginTop: '4px' }}><MapPin size={20} /></span>
              <p>Block G-3, Johar Town, Lahore, Punjab, Pakistan</p>
            </div>

            <div className="map-rating-flex">
              <span className="map-rating-number">{rating}</span>
              <div>
                <div className="map-stars">
                  <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                  <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                  <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                  <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                  <Star size={18} fill="rgba(251, 191, 36, 0.3)" stroke="#fbbf24" />
                </div>
                <span className="map-reviews-count">{reviewCount} Patient Reviews on Google</span>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Providing aesthetic clinical services, dental implants, laser skin tightening, and primary diagnostics to the Johar Town community and beyond.
            </p>

            <a 
              href="https://www.google.com/maps/place/MEDNIC+COMPLEX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ alignSelf: 'flex-start' }}
            >
              Get Directions
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="map-embed-wrapper">
            <iframe 
              className="map-iframe"
              src="https://maps.google.com/maps?q=MEDNIC%20COMPLEX%20Johar%20Town%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mednic Complex Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
