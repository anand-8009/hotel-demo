import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Business Traveler",
      text: "The perfect blend of luxury and sustainability. The staff went above and beyond to ensure my stay was flawless. The eco-friendly initiatives are truly commendable.",
      rating: 5
    },
    {
      name: "Michael & Emma",
      role: "Honeymoon Couple",
      text: "Our stay at The Fern was magical. From the floating breakfast to the serene spa treatments, every moment felt bespoke and tailored to us. We will definitely return.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Family Vacation",
      text: "Exceptional service and beautiful accommodations. The kids loved the pool, and we appreciated the spacious family suite. A true 5-star experience.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-fern-sand relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fern-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fern-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fern-gold text-sm uppercase tracking-[0.2em] font-semibold block mb-4"
          >
            Guest Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-fern-navy leading-tight"
          >
            Words from Our <span className="italic font-light text-fern-gold">Guests</span>
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-fern-beige hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote size={48} className="text-fern-gold/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-fern-gold fill-fern-gold" />
                ))}
              </div>
              
              <p className="text-fern-charcoal/80 font-light text-lg leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-fern-navy/10 flex items-center justify-center text-fern-navy font-serif text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-fern-navy text-lg">{review.name}</h4>
                  <span className="text-xs uppercase tracking-widest text-fern-charcoal/50 font-semibold">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
