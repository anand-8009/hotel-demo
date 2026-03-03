import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, MapPin, ChevronDown } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 0 Children',
    roomType: 'Deluxe Room',
    specialRequests: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Booking Request*
    
*Guest Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Stay Details:*
Destination: ${formData.destination || 'Not Selected'}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}
Room Type: ${formData.roomType}

*Special Requests:*
${formData.specialRequests || 'None'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '918009076919';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl pointer-events-auto flex flex-col">
              
              {/* Header */}
              <div className="sticky top-0 bg-fern-navy text-white px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-xl md:text-2xl font-serif tracking-wide">Reserve Your Stay</h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-fern-gold text-sm uppercase tracking-widest font-bold border-b border-fern-sand pb-2">Guest Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                {/* Stay Details */}
                <div className="space-y-4">
                  <h3 className="text-fern-gold text-sm uppercase tracking-widest font-bold border-b border-fern-sand pb-2">Stay Details</h3>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Destination / Hotel</label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-gold" />
                      <select
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">Select Destination</option>
                        <option value="Mumbai">The Fern, Mumbai</option>
                        <option value="Goa">The Fern Kadamba, Goa</option>
                        <option value="Jaipur">The Fern Residency, Jaipur</option>
                        <option value="Pune">The Fern, Pune</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-fern-charcoal/50 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Check In</label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-gold" />
                        <input
                          type="date"
                          name="checkIn"
                          required
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Check Out</label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-gold" />
                        <input
                          type="date"
                          name="checkOut"
                          required
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Guests</label>
                      <div className="relative">
                        <Users size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-gold" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors appearance-none bg-white"
                        >
                          <option>2 Adults, 0 Children</option>
                          <option>1 Adult, 0 Children</option>
                          <option>2 Adults, 1 Child</option>
                          <option>2 Adults, 2 Children</option>
                          <option>More Options...</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-fern-charcoal/50 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Room Type</label>
                      <div className="relative">
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full p-3 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors appearance-none bg-white"
                        >
                          <option>Deluxe Room</option>
                          <option>Club Suite</option>
                          <option>Presidential Suite</option>
                          <option>Garden View Room</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-fern-charcoal/50 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-fern-charcoal/70 uppercase">Special Requests (Optional)</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-fern-sand rounded-sm focus:border-fern-gold outline-none transition-colors resize-none"
                    placeholder="Airport pickup, dietary restrictions, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-fern-navy text-white text-sm uppercase tracking-widest hover:bg-fern-gold transition-all duration-300 rounded-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Confirm Booking Request
                </button>

              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
