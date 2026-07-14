'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openBookingModal = (service = '') => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setPreselectedService('');
  };

  return (
    <>
      <Header onBookClick={() => openBookingModal()} />
      <main style={{ marginTop: '80px' }}>
        <Hero onBookClick={() => openBookingModal()} />
        <About />
        <Services onBookClick={openBookingModal} />
        <Doctors />
        <Map />
        <Contact />
      </main>
      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={closeBookingModal} 
        preselectedService={preselectedService} 
      />
    </>
  );
}
