const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');

// @route   POST /api/appointments
// @desc    Book a new appointment
// @access  Public
router.post('/appointments', async (req, res) => {
  try {
    const { name, phone, email, service, date, time, message } = req.body;

    // Simple validation
    if (!name || !phone || !email || !service || !date || !time) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields' });
    }

    const appointmentData = {
      name,
      phone,
      email,
      service,
      date,
      time,
      message,
      createdAt: new Date()
    };

    if (global.dbConnected) {
      const appointment = new Appointment(appointmentData);
      await appointment.save();
      console.log('Saved appointment to MongoDB:', appointment._id);
    } else {
      console.log('\n--- [MOCK DB SUBMISSION] ---');
      console.log('Appointment Details:');
      console.log(JSON.stringify(appointmentData, null, 2));
      console.log('----------------------------\n');
    }

    res.status(201).json({
      success: true,
      message: global.dbConnected 
        ? 'Appointment booked successfully!' 
        : 'Appointment booked successfully! (Running in demo mode, logged to console)',
      data: appointmentData
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error. Please try again later.'
    });
  }
});

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/contact', async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields' });
    }

    const contactData = {
      name,
      phone,
      email,
      subject,
      message,
      createdAt: new Date()
    };

    if (global.dbConnected) {
      const contactMsg = new Contact(contactData);
      await contactMsg.save();
      console.log('Saved contact message to MongoDB:', contactMsg._id);
    } else {
      console.log('\n--- [MOCK DB SUBMISSION] ---');
      console.log('Contact Message Details:');
      console.log(JSON.stringify(contactData, null, 2));
      console.log('----------------------------\n');
    }

    res.status(201).json({
      success: true,
      message: global.dbConnected 
        ? 'Message sent successfully! We will get back to you soon.' 
        : 'Message sent successfully! (Running in demo mode, logged to console)',
      data: contactData
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error. Please try again later.'
    });
  }
});

module.exports = router;
