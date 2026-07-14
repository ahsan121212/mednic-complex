import Image from 'next/image';

export default function Doctors() {
  const doctorsList = [
    {
      name: 'Dr. Sarah Ahmed',
      specialization: 'Dermatologist & Aesthetic Specialist',
      experience: '10+ Years Experience',
      image: '/images/dr_sarah_ahmed.jpg',
      bio: 'Expert in non-surgical aesthetics, laser therapies, and complex dermatological diagnoses.'
    },
    {
      name: 'Dr. Faisal Khan',
      specialization: 'Dental Surgeon & Implantologist',
      experience: '8+ Years Experience',
      image: '/images/dr_faisal_khan.jpg',
      bio: 'Specialist in dental implants, aesthetic veneers, root canal treatments, and smile correction.'
    },
    {
      name: 'Dr. Bilal Omer',
      specialization: 'Aesthetic & Anti-Aging Consultant',
      experience: '6+ Years Experience',
      image: '/images/dr_bilal_omer.jpg',
      bio: 'Expertise in skin rejuvenation, hair restoration therapies, and customized filler procedures.'
    }
  ];

  return (
    <section id="doctors" className="section-alt">
      <div className="container">
        <div className="text-center">
          <span className="badge">Our Experts</span>
          <h2 className="section-title">Meet Our Panel of Specialist Doctors</h2>
          <p className="section-subtitle">
            Our qualified medical team is dedicated to providing standard, expert diagnoses and procedures.
          </p>
        </div>

        <div className="doctors-grid">
          {doctorsList.map((doc, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image-wrapper">
                <Image 
                  src={doc.image}
                  alt={doc.name} 
                  className="doctor-img"
                  width={300}
                  height={300}
                />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doc.name}</h3>
                <div className="doctor-spec">{doc.specialization}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>{doc.bio}</p>
                <span className="doctor-exp">{doc.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
