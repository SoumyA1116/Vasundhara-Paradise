import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import { 
  HOTEL_NAME, 
  TAGLINE, 
  ROOMS, 
  PHONE_NUMBER, 
  WHATSAPP_NUMBER, 
  FULL_AMENITIES_DETAILED, 
  CLOSEST_LANDMARKS, 
  GALLERY_IMAGES,
  MAP_EMBED_URL,
  LOCATION_DESC,
  ABOUT_STORY,
  PROPERTY_POLICIES,
  HELPFUL_FACTS
} from './constants';
import { Room } from './types';

const LandmarkIcon = ({ type }: { type: string }) => {
  const props = { width: "16", height: "16", strokeWidth: "2", className: "text-[#e67e00]" };
  switch (type) {
    case 'temple': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 22h16M7 11v8m10-8v8M3 11h18M12 2v3m-5 6l5-6 5 6"/></svg>;
    case 'event': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m12-16a4 4 0 11-8 0 4 4 0 018 0z"/></svg>;
    default: return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  }
};

const PolicyIcon = ({ type }: { type: string }) => {
  const props = { width: "18", height: "18", strokeWidth: "1.5", className: "text-gray-500" };
  switch (type) {
    case 'clock': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'clock-out': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8V4m0 4h4m-4 0l4 4"/><circle cx="12" cy="12" r="10"/></svg>;
    case 'bell': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
    case 'stairs': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 21h12M9 17h6M12 13h0"/></svg>;
    case 'bolt': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case 'key': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777z"/></svg>;
    case 'no-smoking': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M18 12H6m-3-9l18 18"/></svg>;
    default: return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
  }
};

const AmenityIcon = ({ name }: { name: string }) => {
  const props = { width: "16", height: "16", strokeWidth: "2", className: "opacity-60" };
  switch (name) {
    case 'wifi': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0"/></svg>;
    case 'monitor': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case 'check': return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500"><path d="M20 6L9 17l-5-5"/></svg>;
    case 'car': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="10" width="20" height="8" rx="2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
    default: return <span className="text-xs">✨</span>;
  }
};

const RoomCard = ({ room }: { room: Room }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full group hover:shadow-xl transition-all duration-500">
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
          {room.images.map((img, i) => (
            <img key={i} src={img} alt={`${room.name} ${i}`} className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] font-black tracking-widest shadow-xl">
            {currentIdx + 1} / {room.images.length}
          </div>
        </div>
        {room.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <button onClick={prevImage} className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-lg flex items-center justify-center text-white hover:bg-black/50 transition-all border border-white/10 shadow-lg active:scale-90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg></button>
            <button onClick={nextImage} className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-lg flex items-center justify-center text-white hover:bg-black/50 transition-all border border-white/10 shadow-lg active:scale-90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg></button>
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2.5 text-white/90 text-[9px] font-bold uppercase tracking-widest border border-white/10 shadow-xl">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            ROOM PHOTOGRAPHY
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4 gap-2">
            <h3 className="text-xl font-serif text-gray-900 font-bold leading-tight min-h-[3rem]">{room.name}</h3>
            <div className="bg-orange-50/80 text-[#e67e00] px-2.5 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest border border-orange-100 whitespace-nowrap mt-1">{room.idealFor}</div>
          </div>
          <div className="space-y-3 mb-5">
             <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
               <div className="w-7 h-7 rounded-lg border border-orange-100 bg-orange-50/50 flex items-center justify-center flex-shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#e67e00]"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg></div>
               <span>Room size: <span className="text-gray-900 font-bold">{room.size || "Standard"}</span></span>
             </div>
             <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
               <div className="w-7 h-7 rounded-lg border border-orange-100 bg-orange-50/50 flex items-center justify-center flex-shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#e67e00]"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/></svg></div>
               <span>Bedding: <span className="text-gray-900 font-bold">{room.bedType}</span></span>
             </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
             {room.amenities.map((a, i) => (
               <span key={i} className="text-[9px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2.5 py-1.5 rounded-lg flex items-center gap-2 border border-gray-100/50"><span className="w-1 h-1 rounded-full bg-[#e67e00]"></span> {a}</span>
             ))}
          </div>
        </div>
        <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-gray-900">{room.price}</div>
            <div className="text-[8px] text-gray-400 font-black uppercase tracking-widest">Per Night</div>
          </div>
          <a href="#booking" className="bg-[#4a90e2] hover:bg-[#357abd] text-white px-7 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">Reserve</a>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?cd5da8d63553118ba856a187900';
    script.defer = true;
    script.onload = () => { setTimeout(() => setIsLoadingReviews(false), 2000); };
    if (widgetContainerRef.current) widgetContainerRef.current.appendChild(script);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfaf8] pb-32 md:pb-0">
      <Navbar />

      <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover animate-zoom" />
        </div>
        <div className="relative z-20 text-center px-8 w-full max-w-4xl">
          <div className="mb-6"><span className="text-white text-[10px] md:text-sm uppercase tracking-[0.5em] font-bold block drop-shadow-md">EST. 1998 • PURI</span></div>
          <h1 className="text-5xl md:text-9xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">{HOTEL_NAME.split(' ')[0]}<br/>{HOTEL_NAME.split(' ')[1]}</h1>
          <p className="text-[10px] md:text-xl text-white/90 font-light tracking-[0.4em] uppercase mb-12 italic leading-relaxed">{TAGLINE}</p>
          <div className="flex flex-col gap-4 max-w-[280px] mx-auto md:flex-row md:max-w-none md:justify-center">
            <a href="#rooms" className="bg-white text-gray-900 py-4 px-12 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase active:scale-95 transition-all shadow-xl">Explore Suites</a>
            <a href={`tel:${PHONE_NUMBER}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-12 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase active:scale-95 transition-all">Concierge</a>
          </div>
        </div>
      </section>

      {/* UPDATED DISCOVERY SECTION WITH CORNER IMAGE */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Discovery</h4>
              <h2 className="text-4xl md:text-7xl font-serif text-gray-900 mb-8 leading-tight">{ABOUT_STORY.title}</h2>
              <p className="text-gray-500 leading-[1.8] mb-12 text-sm md:text-xl max-w-xl">{ABOUT_STORY.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {ABOUT_STORY.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-900">
                    <div className="w-2 h-2 rounded-full bg-[#e67e00] shadow-[0_0_10px_rgba(230,126,0,0.5)]"></div> 
                    {h}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* MAIN IMAGE CONTAINER */}
              <div className="relative aspect-square md:aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl z-10 border border-gray-100">
                <img src={ABOUT_STORY.images.main} className="w-full h-full object-cover" alt="Luxury Suite" />
              </div>
              
              {/* OVERLAPPING CORNER IMAGE - "ye wala corner image" */}
              <div className="absolute -bottom-10 -left-10 z-20 hidden md:block w-72 h-72 p-4 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-50">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
                   <img src={ABOUT_STORY.images.corner} className="w-full h-full object-cover" alt="Pool Ambience" />
                </div>
              </div>
              
              {/* MOBILE VERSION OF OVERLAPPING IMAGE */}
              <div className="absolute -bottom-6 -left-4 z-20 md:hidden w-32 h-32 p-1.5 bg-white rounded-[1.5rem] shadow-xl border border-gray-50">
                <div className="w-full h-full rounded-[1rem] overflow-hidden">
                   <img src={ABOUT_STORY.images.corner} className="w-full h-full object-cover" alt="Pool Ambience" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 md:py-32 bg-gray-50/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-12 text-center">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-3">Accommodations</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">Suites & Residences</h2>
            <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]">Luxury redefined for every guest</p>
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 gap-6 pb-8">
            {ROOMS.map(room => (
              <div key={room.id} className="min-w-[85vw] md:min-w-full snap-center h-full"><RoomCard room={room} /></div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Perspective</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Experience the Ambience</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-[2rem] shadow-sm transition-all duration-700 hover:shadow-2xl ${
                  idx % 3 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-20 bg-[#F9F9F9] border-t border-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-3">Hospitality</h4>
              <h2 className="text-4xl font-serif text-gray-900">Amenities and facilities</h2>
            </div>
            <div className="text-right">
              <div className="text-[#4a90e2] font-black text-xl">Good 6.5</div>
              <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Facilities Rating</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {FULL_AMENITIES_DETAILED.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900 border-b border-gray-100 pb-3 mb-6">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className={`flex items-center gap-4 text-sm ${item.unavailable ? 'opacity-30 line-through' : 'text-gray-600'}`}>
                      {item.unavailable ? <span className="opacity-40">🚫</span> : <AmenityIcon name={item.icon} />}
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-serif text-gray-900 mb-12">Property policies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-800 mb-4">{PROPERTY_POLICIES.childrenAndBeds.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{PROPERTY_POLICIES.childrenAndBeds.content}</p>
                <p className="text-gray-900 text-sm font-bold">{PROPERTY_POLICIES.childrenAndBeds.minAge}</p>
              </div>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-800 mb-4">{PROPERTY_POLICIES.others.title}</h3>
                <ul className="space-y-3">
                  {PROPERTY_POLICIES.others.rules.map((rule, i) => (
                    <li key={i} className="flex gap-3 text-gray-500 text-sm">
                      <span className="text-[#e67e00] mt-1.5 w-1 h-1 rounded-full bg-[#e67e00] flex-shrink-0"></span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
               <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-800 mb-6">Some helpful facts</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                  <div>
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Check-in/Check-out</h4>
                    <div className="space-y-5">
                      {HELPFUL_FACTS.checkInOut.map((fact, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <PolicyIcon type={fact.icon} />
                          <div className="text-xs text-gray-600">
                            <span className="block opacity-60">{fact.label}</span>
                            <span className="font-bold text-gray-900">{fact.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">The property</h4>
                    <div className="space-y-5">
                      {HELPFUL_FACTS.theProperty.map((fact, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <PolicyIcon type={fact.icon} />
                          <div className="text-xs text-gray-600">
                            <span className="block opacity-60">{fact.label}</span>
                            <span className="font-bold text-gray-900">{fact.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
               <div className="mt-10 p-6 bg-orange-50/30 border border-orange-100/50 rounded-2xl">
                 <h4 className="text-[9px] font-black uppercase tracking-widest text-[#e67e00] mb-3">Property announcements</h4>
                 <p className="text-[11px] text-gray-500 italic leading-relaxed">{PROPERTY_POLICIES.announcement}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h4 className="text-[#e67e00] text-[11px] font-bold uppercase tracking-[0.5em] mb-4">Guest Voice</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Kind Words from Guests</h2>
          </div>
          <div className="relative min-h-[300px] w-full bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
             {isLoadingReviews && (
               <div className="flex flex-col items-center justify-center py-20 text-gray-300">
                  <svg className="w-10 h-10 mb-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  <p className="text-[9px] font-bold uppercase tracking-widest">Gathering feedback...</p>
               </div>
             )}
             <div ref={widgetContainerRef} className={`w-full transition-opacity duration-1000 ${isLoadingReviews ? 'opacity-0' : 'opacity-100'}`}></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-[#e67e00] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Explore</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Location & Reach</h2>
              <p className="text-gray-500 text-sm md:text-lg mb-8 leading-relaxed">{LOCATION_DESC}</p>
              <div className="space-y-3">
                {CLOSEST_LANDMARKS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-5 bg-gray-50 rounded-[1.5rem] border border-gray-100">
                    <div className="flex items-center gap-4">
                      <LandmarkIcon type={item.icon} />
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">{item.name}</span>
                    </div>
                    <span className="text-[9px] font-black text-[#e67e00] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative ring-1 ring-gray-100">
              <iframe src={MAP_EMBED_URL} className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 md:py-32 bg-[#121212]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">Book Your Escape</h2>
              <p className="text-white/40 leading-relaxed mb-12 text-sm md:text-lg max-w-md mx-auto lg:mx-0">Direct bookings via WhatsApp ensure priority service, early check-in preference, and the best available rates.</p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center gap-5 w-fit mx-auto lg:mx-0">
                <div className="w-12 h-12 rounded-full bg-[#e67e00] flex items-center justify-center text-white"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                <div className="text-left"><h5 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Reception</h5><p className="text-white text-xs font-bold uppercase tracking-widest mt-0.5">24/7 Global Support</p></div>
              </div>
            </div>
            <div className="w-full"><BookingForm /></div>
          </div>
        </div>
      </section>

      {isMobile && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-[92%] max-w-[420px]">
          <div className="liquid-glass p-3 rounded-[2.5rem] flex gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/40">
            <a href={`tel:${PHONE_NUMBER}`} className="flex-1 bg-[#121621] text-white h-14 rounded-full flex items-center justify-center gap-3 font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all shadow-xl">CALL</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex-1 bg-[#e67e00] text-white h-14 rounded-full flex items-center justify-center gap-3 font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-orange-500/20">CHAT</a>
          </div>
        </div>
      )}

      <footer className="bg-white py-16 border-t border-gray-100 text-center rounded-t-[3rem]">
        <div className="text-2xl font-serif font-bold tracking-tight text-gray-900 mb-3">{HOTEL_NAME}</div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-8">PURI • {new Date().getFullYear()}</p>
        <div className="pt-8 border-t border-gray-50 max-w-xs mx-auto">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Designed and Developed by <br/>
            <a 
              href="https://daswebsolutions.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#e67e00] font-black hover:opacity-70 transition-opacity mt-1 inline-block"
            >
              DAS WEB SOLUTION
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
