import Header from './components/Header';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import About from './components/About';
import Rooms from './components/Rooms';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-fern-beige font-sans text-fern-charcoal selection:bg-fern-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <About />
        <Rooms />
        <Experiences />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
