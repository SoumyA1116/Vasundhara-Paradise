
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import { 
  HOTEL_NAME, 
  TAGLINE, 
  ROOMS, 
  PHONE_NUMBER, 
  WHATSAPP_NUMBER, 
  POLICIES, 
  FULL_AMENITIES, 
  CLOSEST_LANDMARKS, 
  GALLERY_IMAGES,
  MAP_EMBED_URL,
  LOCATION_DESC,
  ABOUT_STORY,
  REVIEWS
} from './constants';

const LandmarkIcon = ({ type }: { type: string }) => {
  const props = { width: "18", height: "18", strokeWidth: "2", className: "text-[#e67e00]" };
  switch (type) {
    case 'beach': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20s4-1 4-3a4 4 0 018 0c0 2 4 3 4 3m0-10l-1-2-5-1-5 1-1 2m6 10V8"/></svg>;
    case 'lighthouse': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 22h6m-5-4l1-14h2l1 14m-5-11h4m-4 3h4m-2-10V2"/></svg>;
    case 'temple': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 22h16M7 11v8m10-8v8M3 11h18M12 2v3m-5 6l5-6 5 6"/></svg>;
    case 'event': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m12-16a4 4 0 11-8 0 4 4 0 018 0z"/></svg>;
    default: return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  }
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-32 md:pb-0 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/35 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000" 
            alt={HOTEL_NAME} 
            className="w-full h-full object-cover animate-zoom" 
          />
        </div>
        <div className="relative z-20 text-center px-8 w-full">
          <div className="mb-6">
             <span className="text-white text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-bold block drop-shadow-md">
               EST. 1998 • LUCKNOW
             </span>
          </div>
          <h1 className="text-[52px] md:text-9xl font-serif text-white mb-6 leading-[1.05] drop-shadow-2xl">
            {HOTEL_NAME.split(' ')[0]}<br/>{HOTEL_NAME.split(' ')[1]}
          </h1>
          <p className="text-[10px] md:text-xl text-white/90 font-light tracking-[0.4em] uppercase mb-14 italic max-w-lg mx-auto leading-relaxed">
            {TAGLINE}
          </p>
          <div className="flex flex-col gap-4 max-w-[280px] mx-auto md:flex-row md:max-w-none md:justify-center">
            <a href="#booking" className="bg-white text-gray-900 py-4 px-12 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase active:scale-95 transition-all shadow-xl">Start Reservation</a>
            <a href={`tel:${PHONE_NUMBER}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-12 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase active:scale-95 transition-all">Concierge</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white px-4 md:px-0">
        <div className="container mx-auto max-w-6xl bg-gray-50/50 rounded-[3rem] p-10 md:p-20">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">The Heritage</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">{ABOUT_STORY.title}</h2>
              <p className="text-gray-500 leading-[1.8] mb-10 text-sm md:text-lg">
                {ABOUT_STORY.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ABOUT_STORY.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gray-800">
                    <div className="w-2 h-2 rounded-full bg-[#e67e00]"></div> {h}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={GALLERY_IMAGES[2]} className="w-full h-full object-cover" alt="Luxury Lobby" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-4 rounded-[2rem] shadow-xl hidden md:block">
                 <img src={GALLERY_IMAGES[4]} className="w-full h-full object-cover rounded-[1.5rem]" alt="Luxury Room" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Explorer */}
      <section id="rooms" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Accommodation</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Suites & Residences</h2>
          </div>
          
          <div className={isMobile ? "snap-x-container -mx-6 px-6" : "grid grid-cols-1 md:grid-cols-3 gap-10"}>
            {ROOMS.map(room => (
              <div key={room.id} className={`${isMobile ? 'snap-item' : ''} group`}>
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2.5rem] shadow-xl mobile-touch">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-10">
                    <h3 className="text-2xl font-serif text-white mb-2">{room.name}</h3>
                    <p className="text-white/60 text-[9px] uppercase font-black tracking-[0.2em] mb-4">{room.idealFor}</p>
                    <div className="flex flex-wrap gap-2">
                       {room.amenities.slice(0, 2).map((a, i) => (
                         <span key={i} className="text-[8px] font-bold text-white uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">✓ {a}</span>
                       ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4">
                  <div className="text-xl font-bold text-gray-900">{room.price} <span className="text-[10px] text-gray-400 font-normal uppercase">/ Night</span></div>
                  <a href="#booking" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#e67e00] border-b border-[#e67e00]/30 pb-1">Reserve</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-[#FDFBF7] px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Elite Access</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Guest Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-3 italic">Internet</h5>
              <div className="space-y-4">
                {FULL_AMENITIES.internet.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs font-medium text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#e67e00]"></div> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-3 italic">Services</h5>
              <div className="space-y-4">
                {FULL_AMENITIES.services.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs font-medium text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e67e00" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-3 italic">Safety</h5>
              <div className="space-y-4">
                {FULL_AMENITIES.access.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs font-medium text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e67e00" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-10 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e67e00] mb-4">Verified Policy</p>
              <p className="text-2xl font-serif mb-2 italic">12:00 PM</p>
              <p className="text-[10px] font-light opacity-60 uppercase tracking-widest">Check-in time</p>
              <div className="mt-8 border-t border-white/10 pt-4">
                 <p className="text-[10px] opacity-70 leading-relaxed italic">{POLICIES.idRequired}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Gallery</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Visual Trust</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
             {GALLERY_IMAGES.map((img, i) => (
               <div key={i} className="h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-lg group">
                 <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={`Gallery ${i}`} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#FDFBF7] px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Guest Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative">
                <div className="text-[#e67e00] mb-6 text-xl tracking-tighter">★★★★★</div>
                <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mb-8">"{review.text}"</p>
                <div className="flex justify-between items-center border-t border-gray-50 pt-6">
                   <h6 className="text-[11px] font-black uppercase tracking-widest text-gray-900">{review.author}</h6>
                   <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="mb-10">
                <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Find Us</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Location & Reach</h2>
                <p className="text-gray-500 text-sm md:text-lg mb-8 leading-relaxed">{LOCATION_DESC}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {CLOSEST_LANDMARKS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-6 bg-gray-50 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-md active:scale-[0.98]">
                    <div className="flex items-center gap-4">
                      <LandmarkIcon type={item.icon} />
                      <span className="text-[11px] font-bold text-gray-800 uppercase tracking-widest">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-black text-[#e67e00] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative ring-1 ring-gray-100">
              <iframe src={MAP_EMBED_URL} className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Stays & Booking */}
      <section id="booking" className="py-24 md:py-40 bg-[#121212]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">Personalized Stays</h2>
              <p className="text-white/40 leading-relaxed mb-16 text-base md:text-xl max-w-md mx-auto lg:mx-0">
                Direct bookings via WhatsApp ensure priority service and the best available rates.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex items-center gap-6 w-fit mx-auto lg:mx-0 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#e67e00] flex items-center justify-center text-white shadow-[0_0_30px_rgba(230,126,0,0.4)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M16 12h-8m4-4l-4 4 4 4"/></svg>
                </div>
                <div className="text-left">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Reception</h5>
                  <p className="text-white text-sm font-bold uppercase tracking-widest mt-1">24/7 Support</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Tab Bar for Mobile */}
      {isMobile && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-[400px]">
          <div className="liquid-glass p-2.5 rounded-full flex gap-2.5 shadow-2xl">
            <a href={`tel:${PHONE_NUMBER}`} className="flex-1 bg-[#121621] text-white h-14 rounded-full flex items-center justify-center gap-3 font-bold text-[11px] uppercase tracking-[0.15em] active:scale-95 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex-1 bg-[#e67e00] text-white h-14 rounded-full flex items-center justify-center gap-3 font-bold text-[11px] uppercase tracking-[0.15em] active:scale-95 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M16 12h-8m4-4l-4 4 4 4"/></svg>
              Chat
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100 text-center rounded-t-[3rem]">
        <div className="text-xl font-serif font-bold tracking-tight text-gray-900 mb-4">{HOTEL_NAME}</div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
           Lucknow • {new Date().getFullYear()} • Premium Heritage Stays
        </p>
      </footer>
    </div>
  );
};

export default App;
