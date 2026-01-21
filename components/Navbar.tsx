
import React, { useState, useEffect } from 'react';
import { HOTEL_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Suites', href: '#rooms' },
    { name: 'Services', href: '#amenities' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 mx-auto w-full nav-float ${
          isScrolled 
          ? 'liquid-glass mt-3 md:mt-6 w-[92%] md:w-[90%] rounded-full shadow-2xl' 
          : 'bg-transparent py-6 md:py-10'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
          <div className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            {HOTEL_NAME.split(' ')[0]} <span className="font-light opacity-60">{HOTEL_NAME.split(' ')[1]}</span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-all hover:opacity-50 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className={`px-10 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all shadow-sm active:scale-95 ${
                isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
            >
              Reserve
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full active:scale-90 transition-transform ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* App-Style Liquid Glass Menu */}
      <div className={`fixed inset-0 z-[110] transition-all duration-700 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="h-full bg-white flex flex-col items-center justify-center gap-10 p-10">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-4">
             <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif text-gray-900 uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={() => setIsMenuOpen(false)} className="mt-8 bg-gray-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-2xl active:scale-95">
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
