
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, ROOMS } from '../constants';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [form, setForm] = useState<BookingFormData>({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1 Adult',
    children: '0 Children',
    rooms: '1 Room',
    roomType: ROOMS[0].name
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Luxury Enquiry for Vasundhara Paradise:\n\nGuest: ${form.name}\nWhatsApp: ${form.phone}\nStay: ${form.checkIn} to ${form.checkOut}\nOccupancy: ${form.guests}, ${form.children}\nRooms: ${form.rooms}\nSelected Suite: ${form.roomType}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const labelStyles = "block text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 mb-2";
  const inputBase = "w-full bg-gray-50 border-none px-4 py-3 rounded-full text-gray-900 text-xs font-medium placeholder-gray-300 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none cursor-pointer";

  return (
    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl max-w-lg mx-auto border border-gray-50">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-serif text-gray-900 mb-2">Check Availability</h3>
        <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em]">Direct Concierge Access</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={labelStyles}>Full Name</label>
          <input required type="text" placeholder="John Doe" className={inputBase} onChange={e => setForm({...form, name: e.target.value})} />
        </div>

        <div>
          <label className={labelStyles}>WhatsApp Phone</label>
          <input required type="tel" placeholder="+91" className={inputBase} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className={labelStyles}>Arrival</label>
            <input 
              required 
              type="date" 
              className={`${inputBase} date-input-custom`} 
              onChange={e => setForm({...form, checkIn: e.target.value})} 
            />
            <style>{`
              .date-input-custom::-webkit-calendar-picker-indicator {
                background: transparent;
                bottom: 0;
                color: transparent;
                cursor: pointer;
                height: auto;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: auto;
              }
              .date-input-custom {
                position: relative;
              }
              .date-input-custom::after {
                content: '';
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                width: 14px;
                height: 14px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="lightgray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>') no-repeat center center;
                pointer-events: none;
              }
            `}</style>
          </div>
          <div className="relative">
            <label className={labelStyles}>Departure</label>
            <input 
              required 
              type="date" 
              className={`${inputBase} date-input-custom`} 
              onChange={e => setForm({...form, checkOut: e.target.value})} 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className={labelStyles}>Adults</label>
            <select className={inputBase} onChange={e => setForm({...form, guests: e.target.value})}>
              {['1 Adult', '2 Adults', '3 Adults', '4 Adults', 'Group (5+)'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="absolute right-4 top-[38px] pointer-events-none text-gray-400">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div className="relative">
            <label className={labelStyles}>Children</label>
            <select className={inputBase} onChange={e => setForm({...form, children: e.target.value})}>
              {['0 Children', '1 Child', '2 Children', '3 Children', '4+ Children'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="absolute right-4 top-[38px] pointer-events-none text-gray-400">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className={labelStyles}>Rooms</label>
            <select className={inputBase} onChange={e => setForm({...form, rooms: e.target.value})}>
              {['1 Room', '2 Rooms', '3 Rooms', '4 Rooms', '5+ Rooms'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="absolute right-4 top-[38px] pointer-events-none text-gray-400">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div className="relative">
            <label className={labelStyles}>Suite Type</label>
            <select className={inputBase} onChange={e => setForm({...form, roomType: e.target.value})}>
              {ROOMS.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
            </select>
            <div className="absolute right-4 top-[38px] pointer-events-none text-gray-400">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#e67e00] text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-[11px] uppercase tracking-[0.15em] shadow-xl shadow-orange-500/20"
        >
          Enquire via WhatsApp
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
