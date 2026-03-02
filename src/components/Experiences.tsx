import { motion } from 'motion/react';

export default function Experiences() {
  const experiences = [
    {
      title: "Yoga & Wellness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
      description: "Rejuvenate your mind and body with yoga amidst serene surroundings."
    },
    {
      title: "Floating Breakfast",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
      description: "Start your day with a luxurious floating breakfast in your private pool."
    },
    {
      title: "Candlelight Dinner",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      description: "Intimate dining experiences curated for unforgettable moments."
    },
    {
      title: "Spa & Rejuvenation",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      description: "Indulge in holistic therapies designed to restore balance and vitality."
    }
  ];

  return (
    <section id="experiences" className="py-24 md:py-32 bg-fern-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fern-gold text-sm uppercase tracking-[0.2em] font-semibold block mb-4"
            >
              Curated Experiences
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
            >
              Moments <span className="italic font-light text-fern-gold">Beyond</span> Ordinary
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#all-experiences"
            className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-widest text-sm hover:text-fern-gold transition-colors group whitespace-nowrap"
          >
            View All Experiences
            <span className="block w-12 h-[1px] bg-white group-hover:bg-fern-gold transition-colors ml-2"></span>
          </motion.a>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] snap-center group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {exp.title}
                </h3>
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
