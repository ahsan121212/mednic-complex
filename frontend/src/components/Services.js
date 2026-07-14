import { Stethoscope, Sparkles, Smile, Flame } from 'lucide-react';

export default function Services({ onBookClick }) {
  const servicesList = [
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Comprehensive checkups, medical history reviews, prescriptions, and expert diagnostics for all family members.',
      price: 'PKR 1,500',
      isFlat: true,
      icon: <Stethoscope size={32} />
    },
    {
      id: 'dental',
      title: 'Dental Care',
      description: 'From routine scaling & polishing to root canals, crowns, bridges, and advanced smile design treatments.',
      price: 'PKR 3,000 - 8,000',
      isFlat: false,
      icon: <Smile size={32} />
    },
    {
      id: 'skin',
      title: 'Skin Treatments',
      description: 'Clinical acne treatments, chemical peels, hydrafacials, hyperpigmentation solutions, and dermatological reviews.',
      price: 'PKR 5,000 - 15,000',
      isFlat: false,
      icon: <Sparkles size={32} />
    },
    {
      id: 'aesthetic',
      title: 'Aesthetic Procedures',
      description: 'Non-surgical facelifts, anti-aging therapies, dermal fillers, hair restoration, and customized skin glows.',
      price: 'PKR 8,000 - 25,000',
      isFlat: false,
      icon: <Flame size={32} />
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center">
          <span className="badge">Our Services</span>
          <h2 className="section-title">Professional Medical & Aesthetic Treatments</h2>
          <p className="section-subtitle">
            We provide a diverse range of primary healthcare and specialized aesthetic treatments designed to help you feel and look your absolute best.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-price">
                <span>{service.isFlat ? 'Flat Rate' : 'Price Range'}</span>
                {service.price}
              </div>
              
              <button 
                className="btn btn-secondary" 
                style={{ marginTop: '24px', width: '100%', padding: '10px 0' }}
                onClick={() => onBookClick(service.title)}
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
