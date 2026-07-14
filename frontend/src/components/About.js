import { Award, HeartPulse, Activity, Smile } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image 
                src="/images/clinic_hero.jpg" // reuse hero image styled slightly differently or cropped
                alt="Mednic Complex Staff and Equipment"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scaleX(-1)' }} // flip for visual variation
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(15, 118, 110, 0.4), transparent)'
              }} />
            </div>
          </div>

          <div className="about-content">
            <span className="badge">About Our Clinic</span>
            <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
              We Are Committed To Your Health & Beauty
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Located in the heart of Johar Town, Lahore, <strong>Mednic Complex</strong> is a state-of-the-art medical and aesthetic center. We offer a comprehensive suite of dental, dermatological, aesthetic, and general healthcare solutions designed to cater to our patients&apos; specific needs.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              Our team consists of highly experienced specialists dedicated to rendering patient-first care with maximum professionalism. We utilize international standard sterilizations, cutting-edge devices, and trusted clinical methodologies.
            </p>

            <div className="about-features">
              <div className="about-feat-item">
                <div className="about-feat-icon">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="about-feat-title">Expert Specialist Doctors</h4>
                  <p className="about-feat-desc">Consult with experienced practitioners committed to clinical excellence.</p>
                </div>
              </div>

              <div className="about-feat-item">
                <div className="about-feat-icon">
                  <HeartPulse size={20} />
                </div>
                <div>
                  <h4 className="about-feat-title">Patient-First Care</h4>
                  <p className="about-feat-desc">Your comfort, privacy, and satisfaction are our top priorities.</p>
                </div>
              </div>

              <div className="about-feat-item">
                <div className="about-feat-icon">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="about-feat-title">Modern Treatment</h4>
                  <p className="about-feat-desc">Equipped with state-of-the-art dental lasers, skin, and body devices.</p>
                </div>
              </div>

              <div className="about-feat-item">
                <div className="about-feat-icon">
                  <Smile size={20} />
                </div>
                <div>
                  <h4 className="about-feat-title">Welcoming Environment</h4>
                  <p className="about-feat-desc">Relaxing aesthetic space with professional, helpful clinical staff.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
