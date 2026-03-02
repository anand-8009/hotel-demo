import { Calendar, MapPin, Users, Search } from 'lucide-react';

export default function BookingWidget() {
  return (
    <section id="booking-widget" className="relative z-20 -mt-24 max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between border border-fern-sand">
        
        {/* Destination */}
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-fern-sand pb-4 md:pb-0 md:pr-8">
          <label className="text-xs uppercase tracking-widest text-fern-charcoal/60 font-semibold mb-2 block">
            Destination / Hotel
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <MapPin size={20} className="text-fern-gold" />
            <select className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer appearance-none">
              <option>Select Destination</option>
              <option>Mumbai</option>
              <option>Goa</option>
              <option>Jaipur</option>
              <option>Pune</option>
            </select>
          </div>
        </div>

        {/* Check In / Out */}
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-fern-sand pb-4 md:pb-0 md:pr-8">
          <label className="text-xs uppercase tracking-widest text-fern-charcoal/60 font-semibold mb-2 block">
            Check In - Check Out
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <Calendar size={20} className="text-fern-gold" />
            <input 
              type="text" 
              placeholder="Select Dates" 
              className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer"
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 w-full pb-4 md:pb-0">
          <label className="text-xs uppercase tracking-widest text-fern-charcoal/60 font-semibold mb-2 block">
            Guests & Rooms
          </label>
          <div className="flex items-center gap-3 text-fern-navy">
            <Users size={20} className="text-fern-gold" />
            <select className="w-full bg-transparent text-lg font-serif outline-none cursor-pointer appearance-none">
              <option>1 Room, 2 Adults</option>
              <option>1 Room, 1 Adult</option>
              <option>2 Rooms, 4 Adults</option>
              <option>More Options...</option>
            </select>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto px-10 py-5 bg-fern-navy text-white text-sm uppercase tracking-widest hover:bg-fern-gold transition-colors rounded-sm flex items-center justify-center gap-2">
            <Search size={18} />
            <span>Check Availability</span>
          </button>
        </div>

      </div>
    </section>
  );
}
