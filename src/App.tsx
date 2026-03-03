import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-fern-beige font-sans text-fern-charcoal selection:bg-fern-gold selection:text-white">
      <Header onBookNow={openBookingModal} />
      <main>
        <Hero onBookNow={openBookingModal} />
        <About />
        <Rooms />
        <Experiences />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}
