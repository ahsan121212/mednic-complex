'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you shortly.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please check your inputs and try again.'
        });
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect to the server. Please check your network connection or try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="contact-grid">
          {/* Details */}
          <div>
            <span className="badge">Get in Touch</span>
            <h2 className="section-title" style={{ display: 'block', marginBottom: '24px' }}>We Are Here To Assist You</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>
              Have questions about our skin care routines, dental procedures, aesthetic packages, or general health issues? Send us a message or call our reception desk directly.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="contact-info-title">Phone Number</h4>
                  <a href="tel:+923377633555" className="contact-info-value" style={{ fontWeight: '600', color: 'var(--color-primary)' }}>
                    +92 337 7633555
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="contact-info-title">Location Address</h4>
                  <p className="contact-info-value">
                    G-3 Block, Johar Town, Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="contact-info-title">Opening Hours</h4>
                  <p className="contact-info-value" style={{ fontWeight: '500' }}>
                    12:00 PM – 11:00 PM (Daily)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--color-text-main)' }}>Send A Message</h3>
            
            {status && status.type === 'success' ? (
              <div className="text-center" style={{ padding: '40px 0' }}>
                <div style={{ color: 'var(--color-secondary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircle2 size={56} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Thank You!</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>{status.message}</p>
                <button 
                  className="btn btn-secondary" 
                  style={{ marginTop: '24px' }}
                  onClick={() => setStatus(null)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status && status.type === 'error' && (
                  <div className="alert alert-error">{status.message}</div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="form-input"
                      placeholder="e.g. 03377633555"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject *</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    className="form-input"
                    placeholder="General Inquiry, Service feedback, etc."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-input"
                    placeholder="Write your message details here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
