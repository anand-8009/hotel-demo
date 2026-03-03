import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fern-gold text-sm uppercase tracking-widest font-bold"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-fern-navy mt-4 mb-6"
          >
            Contact & Location
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-fern-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-fern-beige/30 p-8 rounded-xl border border-fern-sand/50">
              <h3 className="text-2xl font-serif text-fern-navy mb-6">The Fern, Mumbai</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-fern-white p-3 rounded-full shadow-sm text-fern-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-fern-charcoal/60 mb-1">Address</h4>
                    <p className="text-fern-charcoal leading-relaxed">
                      411, Hemu Kalani Marg, Chembur East,<br />
                      Mumbai, Maharashtra 400071, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fern-white p-3 rounded-full shadow-sm text-fern-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-fern-charcoal/60 mb-1">Phone</h4>
                    <p className="text-fern-charcoal">+91 80090 76919</p>
                    <p className="text-fern-charcoal text-sm text-fern-charcoal/60 mt-1">Available 24/7 for reservations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fern-white p-3 rounded-full shadow-sm text-fern-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-fern-charcoal/60 mb-1">Email</h4>
                    <p className="text-fern-charcoal">reservations@fernhotels.com</p>
                    <p className="text-fern-charcoal">info@fernhotels.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fern-white p-3 rounded-full shadow-sm text-fern-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-fern-charcoal/60 mb-1">Check-in / Check-out</h4>
                    <p className="text-fern-charcoal">Check-in: 2:00 PM</p>
                    <p className="text-fern-charcoal">Check-out: 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-fern-sand/50 relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.468249766946!2d72.8976863149006!3d19.04314798710675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c60c55555555%3A0x1234567890abcdef!2sThe%20Fern%20Residency%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
