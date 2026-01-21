
import { Room, Review } from './types';

/**
 * CORE HOTEL CONFIGURATION
 */
export const HOTEL_NAME = "Vasundhara Paradise";
export const TAGLINE = "Where Serenity Meets Grandeur.";
export const PHONE_NUMBER = "+91 98765 43210";
export const WHATSAPP_NUMBER = "919876543210";
export const LOCATION_DESC = "Located in the premium district of Gomti Nagar, we offer seamless connectivity to major transit points and scenic landmarks.";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.467364667104!2d80.9859258!3d26.8680482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2939c878957%3A0x6a0a09b3086782c3!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

/**
 * BRAND STORY
 */
export const ABOUT_STORY = {
  title: "A Legacy of Hospitality",
  content: "For over two decades, Vasundhara Paradise has stood as a beacon of luxury in Lucknow. Our vision is to blend heritage charm with modern executive comfort, serving families, business travelers, and couples with uncompromising standards of safety and cleanliness.",
  highlights: [
    "25+ Years of Excellence",
    "Family & Corporate Friendly",
    "Highest Hygiene Standards",
    "Award Winning Concierge"
  ]
};

/**
 * POLICIES & TARIFFS
 */
export const POLICIES = {
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  childPolicy: "Children below 5 stay free",
  extraBed: "₹1,000 per night",
  idRequired: "Aadhar/Passport/License required for all guests",
  safetyBadge: "Verified Luxury Stay"
};

/**
 * ACCESSIBILITY & LANDMARKS
 */
export const CLOSEST_LANDMARKS = [
  { name: "Golden Beach", distance: "260 m", icon: "beach" },
  { name: "Puri Light House", distance: "2.1 km", icon: "lighthouse" },
  { name: "UPHC, Swargadwar", distance: "2.3 km", icon: "location" },
  { name: "Puri Rath Yatra", distance: "2.5 km", icon: "event" },
  { name: "Jagannath Temple", distance: "2.5 km", icon: "temple" }
];

/**
 * AMENITIES CATALOG
 */
export const FULL_AMENITIES = {
  internet: ["High-speed Fiber", "Public Area Wi-Fi"],
  services: ["24/7 Room Service", "Daily Housekeeping", "Laundry Service", "Elevator Access"],
  access: ["24h Security & CCTV", "Fire Safety Systems", "Power Backup", "Ample Parking"],
  leisure: ["Terrace Lounge", "Shared TV Area"]
};

/**
 * ROOMS & SUITES
 */
export const ROOMS: Room[] = [
  {
    id: 'standard',
    name: 'Royal Sanctuary',
    description: 'A masterpiece of minimalism and comfort for the discerning professional.',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000',
    capacity: '2 Guests',
    bedType: 'Queen Cloud-Bed',
    amenities: ['4K Smart TV', 'Italian Marble Bath', 'Pillow Menu', 'Concierge Access'],
    idealFor: 'Executive Solo'
  },
  {
    id: 'deluxe',
    name: 'Presidential Oasis',
    description: 'Unrivaled space and bespoke decor with panoramic garden views.',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
    capacity: '2 Adults + 2 Kids',
    bedType: 'California King',
    amenities: ['Private Balcony', 'Wine Cellar', 'Luxury Spa Kit', '24/7 Butler'],
    idealFor: 'Couples & Small Families'
  },
  {
    id: 'family',
    name: 'Heritage Villa',
    description: 'A private residential experience with multiple suites and lush surroundings.',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000',
    capacity: 'Up to 6 Guests',
    bedType: 'Grand Royal Beds',
    amenities: ['Infinity Pool View', 'Full Gourmet Kitchen', 'Home Theater', 'Direct Garden Access'],
    idealFor: 'Large Families'
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Aditya Malhotra", rating: 5, text: "The attention to detail is staggering. Truly premium experience.", date: "March 2024" },
  { id: 2, author: "Ishani Gupta", rating: 5, text: "Every corner is a photograph. Luxury redefined.", date: "Feb 2024" },
  { id: 3, author: "Vikram Seth", rating: 5, text: "Best stay in Lucknow for business trips.", date: "Jan 2024" }
];
