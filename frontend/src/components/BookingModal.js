'use client';

import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'General Consultation',
    date: '',
    time: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  if (!isOpen) return null;

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
      const response = await fetch(`${apiUrl}/appointments`, {
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
          message: 'Your appointment request has been submitted successfully! We will contact you shortly to confirm.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'General Consultation',
          date: '',
          time: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please check your inputs and try again.'
        });
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect to the server. Please check your internet connection or try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Book an Appointment</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          {status && status.type === 'success' ? (
            <div className="text-center" style={{ padding: '20px 0' }}>
              <div style={{ color: 'var(--color-secondary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <CheckCircle2 size={64} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--color-text-main)' }}>Appointment Requested!</h4>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>{status.message}</p>
              <button className="btn btn-primary" onClick={onClose}>Close Window</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status && status.type === 'error' && (
                <div className="alert alert-error">{status.message}</div>
              )}

              <div className="form-group">
                <label htmlFor="modal-name">Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><User size={18} /></span>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    className="form-input"
                    style={{ paddingLeft: '44px' }}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><Phone size={18} /></span>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      className="form-input"
                      style={{ paddingLeft: '44px' }}
                      placeholder="e.g. 03377633555"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Email Address *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><Mail size={18} /></span>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      className="form-input"
                      style={{ paddingLeft: '44px' }}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-service">Select Service *</label>
                <select
                  id="modal-service"
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="General Consultation">General Consultation (PKR 1500)</option>
                  <option value="Dental Care">Dental Care (PKR 3000 - 8000)</option>
                  <option value="Skin Treatments">Skin Treatments (PKR 5000 - 15000)</option>
                  <option value="Aesthetic Procedures">Aesthetic Procedures (PKR 8000 - 25000)</option>
                </select>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="modal-date">Preferred Date *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><Calendar size={18} /></span>
                    <input
                      type="date"
                      id="modal-date"
                      name="date"
                      className="form-input"
                      style={{ paddingLeft: '44px' }}
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-time">Preferred Time *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><Clock size={18} /></span>
                    <select
                      id="modal-time"
                      name="time"
                      className="form-input"
                      style={{ paddingLeft: '44px' }}
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose time slot</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                      <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                      <option value="08:00 PM - 10:00 PM">08:00 PM - 10:00 PM</option>
                      <option value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Special Notes / Symptoms (Optional)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--color-text-light)' }}><FileText size={18} /></span>
                  <textarea
                    id="modal-message"
                    name="message"
                    className="form-input"
                    style={{ paddingLeft: '44px' }}
                    placeholder="Provide details about your symptoms or request"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={loading}
              >
                {loading ? 'Submitting Request...' : 'Confirm Appointment Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
