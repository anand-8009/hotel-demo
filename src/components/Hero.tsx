import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import BookingWidget from './BookingWidget';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.fernhotels.com/_next/image?url=https%3A%2F%2Fwww.fernhotels.com%2Fapi%2Fuploads%2Fimages%2F510---07.png&w=3840&q=75"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="https://res.cloudinary.com/deqgmfcwa/video/upload/v1772474094/Ultrarealistic_cinematic_4k_1080p_2026021620_dlwyo4.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-fern-navy/60 via-fern-navy/30 to-fern-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-20 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-fern-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6"
        >
          India's Leading Environmentally Sensitive Hotels
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-tight mb-8"
        >
          Sanctuary of <br className="hidden md:block" />
          <span className="italic font-light">Serenity & Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Experience the perfect harmony of nature's embrace and refined elegance. Your journey to tranquility begins here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full"
        >
          <BookingWidget />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 cursor-pointer hover:text-white transition-colors"
        onClick={() => {
          document.getElementById('sustainability')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
