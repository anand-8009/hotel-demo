import { motion } from 'motion/react';
import { BedDouble, Wifi, Coffee, Maximize } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Winter Green Room",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      description: "Elegant accommodations designed for modern travelers seeking comfort and eco-friendly amenities.",
      size: "350 sq.ft",
      bed: "King Bed",
      price: "₹4,500"
    },
    {
      id: 2,
      title: "Fern Club Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      description: "Spacious luxury with premium services, exclusive club access, and breathtaking city views.",
      size: "550 sq.ft",
      bed: "King Bed",
      price: "₹7,200"
    },
    {
      id: 3,
      title: "Hazel Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
      description: "The epitome of luxury living, featuring a separate living area, lavish bath, and personalized service.",
      size: "800 sq.ft",
      bed: "King Bed",
      price: "₹12,000"
    }
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fern-gold text-sm uppercase tracking-[0.2em] font-semibold block mb-4"
          >
            Accommodations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-fern-navy leading-tight"
          >
            Refined <span className="italic font-light text-fern-gold">Living</span> Spaces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-fern-charcoal/70 font-light max-w-2xl mx-auto mt-6"
          >
            Revel in elegant accommodations, complimentary amenities, and unique experiences—all at exceptional rates.
          </motion.p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fern-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <a
                    href="#book"
                    className="w-full py-4 bg-fern-gold text-white text-center text-sm uppercase tracking-widest hover:bg-white hover:text-fern-navy transition-colors rounded-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-serif text-fern-navy group-hover:text-fern-gold transition-colors">
                    {room.title}
                  </h3>
                  <span className="text-sm font-medium text-fern-charcoal/60">
                    From <span className="text-fern-navy font-bold text-lg">{room.price}</span> / night
                  </span>
                </div>
                
                <p className="text-fern-charcoal/70 font-light text-sm leading-relaxed mb-6 line-clamp-2">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex items-center gap-6 text-fern-charcoal/60 text-xs uppercase tracking-wider font-medium">
                  <div className="flex items-center gap-2">
                    <Maximize size={16} className="text-fern-gold" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedDouble size={16} className="text-fern-gold" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi size={16} className="text-fern-gold" />
                    <span>Free</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="#all-rooms"
            className="inline-flex items-center gap-2 text-fern-navy font-semibold uppercase tracking-widest text-sm hover:text-fern-gold transition-colors group"
          >
            Explore All Accommodations
            <span className="block w-12 h-[1px] bg-fern-navy group-hover:bg-fern-gold transition-colors ml-2"></span>
          </a>
        </div>

      </div>
    </section>
  );
}
