import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-fern-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <img
              src="https://www.fernhotels.com/_next/image?url=https%3A%2F%2Fwww.fernhotels.com%2Fapi%2Fuploads%2Fimages%2F1762859690_0_The-Fern-Hotels-Resort-Logo.png&w=384&q=75"
              alt="The Fern Hotels & Resorts"
              className="h-12 brightness-0 invert"
            />
            <p className="text-white/70 font-light text-sm leading-relaxed max-w-xs">
              India's leading environmentally sensitive hotel chain, offering sublime hospitality and unmatched comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-fern-gold hover:border-fern-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-fern-gold hover:border-fern-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-fern-gold hover:border-fern-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-fern-gold hover:border-fern-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-fern-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Find Hotels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offers & Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plan an Event</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-fern-gold">Policies</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Child Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Rate Guarantee</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-fern-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-fern-gold shrink-0 mt-0.5" />
                <span>Corporate Office, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-fern-gold shrink-0" />
                <span>+91 22 6124 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-fern-gold shrink-0" />
                <span>info@fernhotels.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
          <p>&copy; {new Date().getFullYear()} The Fern Hotels & Resorts. All rights reserved.</p>
          <p>Designed for Luxury & Sustainability.</p>
        </div>

      </div>
    </footer>
  );
}
