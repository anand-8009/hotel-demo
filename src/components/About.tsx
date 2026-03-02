import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Leaf size={32} className="text-fern-gold mb-4" />,
      title: "Eco-Sensitive",
      description: "Pioneering green hospitality with energy conservation and waste reduction."
    },
    {
      icon: <ShieldCheck size={32} className="text-fern-gold mb-4" />,
      title: "Best Rate Guarantee",
      description: "Enjoy exclusive benefits and the best rates when you book directly."
    },
    {
      icon: <Award size={32} className="text-fern-gold mb-4" />,
      title: "Award-Winning",
      description: "Recognized globally for sublime hospitality and faultless service."
    },
    {
      icon: <HeartHandshake size={32} className="text-fern-gold mb-4" />,
      title: "Community Support",
      description: "Committed to uplifting local communities and sustainable travel."
    }
  ];

  return (
    <section id="sustainability" className="py-24 md:py-32 px-6 max-w-7xl mx-auto bg-fern-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-fern-gold text-sm uppercase tracking-[0.2em] font-semibold">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-fern-navy leading-tight">
            A Legacy of <span className="italic font-light text-fern-gold">Responsible</span> Luxury
          </h2>
          <p className="text-lg text-fern-charcoal/80 font-light leading-relaxed">
            The Fern Hotels & Resorts prioritizes eco-friendly practices like energy and water conservation, waste reduction, and local community support, offering a responsible and sustainable travel experience without compromising on unmatched comfort.
          </p>
          <p className="text-lg text-fern-charcoal/80 font-light leading-relaxed">
            Be it a leisure getaway, a business trip, or a grand event, our wide array of properties helps you create truly unforgettable experiences, bespoke and tailored to your unique needs.
          </p>
          
          <div className="pt-6">
            <a
              href="#sustainability-details"
              className="inline-flex items-center gap-2 text-fern-navy font-semibold uppercase tracking-widest text-sm hover:text-fern-gold transition-colors group"
            >
              Discover Our Green Initiatives
              <span className="block w-8 h-[1px] bg-fern-navy group-hover:bg-fern-gold transition-colors ml-2"></span>
            </a>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-fern-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-serif text-fern-navy mb-3">{feature.title}</h3>
              <p className="text-fern-charcoal/70 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
