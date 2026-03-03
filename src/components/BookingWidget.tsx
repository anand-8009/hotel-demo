import { Calendar, MapPin, Users, Search } from 'lucide-react';

interface BookingWidgetProps {
  onBookNow: () => void;
}

export default function BookingWidget({ onBookNow }: BookingWidgetProps) {
  return (
    <section id="booking-widget" className="relative z-20 max-w-6xl mx-auto px-6 w-full">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 justify-between border border-fern-sand/50 backdrop-blur-md">
        
        {/* Destination */}
        <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-fern-sand pb-4 lg:pb-0 lg:pr-8 group">
          <label className="text-xs uppercase tracking-widest text-fern-gold font-bold mb-2 block group-hover:text-fern-navy transition-colors">
            Destination / Hotel
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <MapPin size={20} className="text-fern-gold group-hover:scale-110 transition-transform" />
            <select className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer appearance-none border-b border-transparent focus:border-fern-gold transition-colors py-1">
              <option>Select Destination</option>
              <option>Mumbai</option>
              <option>Goa</option>
              <option>Jaipur</option>
              <option>Pune</option>
            </select>
          </div>
        </div>

        {/* Check In */}
        <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-fern-sand pb-4 lg:pb-0 lg:pr-8 group">
          <label className="text-xs uppercase tracking-widest text-fern-gold font-bold mb-2 block group-hover:text-fern-navy transition-colors">
            Check In
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <Calendar size={20} className="text-fern-gold group-hover:scale-110 transition-transform" />
            <input 
              type="text" 
              placeholder="Add Date" 
              className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer border-b border-transparent focus:border-fern-gold transition-colors py-1 placeholder:text-fern-charcoal/40"
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex-1 w-full border-b lg:border-b-0 lg:border-r border-fern-sand pb-4 lg:pb-0 lg:pr-8 group">
          <label className="text-xs uppercase tracking-widest text-fern-gold font-bold mb-2 block group-hover:text-fern-navy transition-colors">
            Check Out
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <Calendar size={20} className="text-fern-gold group-hover:scale-110 transition-transform" />
            <input 
              type="text" 
              placeholder="Add Date" 
              className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer border-b border-transparent focus:border-fern-gold transition-colors py-1 placeholder:text-fern-charcoal/40"
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 w-full pb-4 lg:pb-0 group">
          <label className="text-xs uppercase tracking-widest text-fern-gold font-bold mb-2 block group-hover:text-fern-navy transition-colors">
            Guests
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <Users size={20} className="text-fern-gold group-hover:scale-110 transition-transform" />
            <select className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer appearance-none border-b border-transparent focus:border-fern-gold transition-colors py-1">
              <option>2 Adults, 0 Children</option>
              <option>1 Adult, 0 Children</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>More Options...</option>
            </select>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <button 
            onClick={onBookNow}
            className="w-full lg:w-auto px-8 py-4 bg-fern-navy text-white text-sm uppercase tracking-widest hover:bg-fern-gold transition-all duration-300 rounded-sm flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Search size={18} />
            <span className="font-semibold">Check Availability</span>
          </button>
        </div>

      </div>
    </section>
  );
}
