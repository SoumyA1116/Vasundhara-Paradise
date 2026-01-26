import { Room } from './types';

/**
 * CORE HOTEL CONFIGURATION
 */
export const HOTEL_NAME = "Vasundhara Paradise";
export const TAGLINE = "Where Serenity Meets Grandeur.";
export const PHONE_NUMBER = "+91 89262 61577";
export const WHATSAPP_NUMBER = "918926261577";
export const LOCATION_DESC = "Located in the heart of Puri, Puri's most premium district, offering a perfect blend of executive luxury and traditional warmth.";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.1831570987497!2d85.7997389!3d19.7898302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c5357365f15d%3A0xd0487355c0fc8805!2sVasundhara%20Paradise!5e0!3m2!1sen!2sin!4v1769365967775!5m2!1sen!2sin";

/**
 * BRAND STORY
 */
export const ABOUT_STORY = {
  title: "A Legacy of Hospitality",
  content: "Vasundhara Paradise has been a landmark of luxury in Puri. Our vision is to provide a stay with modern executive amenities for families, business travelers, and couples with uncompromising standards of safety.",
  highlights: [
    "FAMILY & CORPORATE FRIENDLY",
    "AWARD WINNING CONCIERGE",
    "PURI PRIME LOCATION",
    "BESPOKE GUEST EXPERIENCES"
  ],
  images: {
    main: "https://i.ibb.co/b5pmVDPn/image.png?auto=format&fit=crop&q=80&w=1200",
    corner: "https://i.ibb.co/7JrcsJ5m/image.png?auto=format&fit=crop&q=80&w=600"
  }
};

/**
 * PROPERTY POLICIES
 */
export const PROPERTY_POLICIES = {
  childrenAndBeds: {
    title: "Children and extra beds",
    content: "Extra beds are dependent on the room you choose. Please check the individual room capacity for more details.",
    minAge: "Minimum age of guests is: 18 year(s)."
  },
  others: {
    title: "Others",
    rules: [
      "The property does not accept non-local guests.",
      "When booking more than 5 rooms, different policies and additional supplements may apply."
    ]
  },
  announcement: "Please note that any changes in tax structure due to government policies will result in revised taxes, which will be applicable to all reservations and will be charged additionally during check out."
};

/**
 * HELPFUL FACTS
 */
export const HELPFUL_FACTS = {
  checkInOut: [
    { label: "Check-in from", value: "09:00 AM", icon: "clock" },
    { label: "Check-out until", value: "08:00 AM", icon: "clock-out" },
    { label: "Reception open until", value: "11:00 PM", icon: "bell" },
    { label: "Check-in until", value: "12:00 PM", icon: "clock-limit" }
  ],
  theProperty: [
    { label: "Number of floors", value: "3", icon: "stairs" },
    { label: "Room voltage", value: "220V", icon: "bolt" },
    { label: "Number of rooms", value: "9", icon: "key" },
    { label: "Non-smoking rooms/floors", value: "Yes", icon: "no-smoking" }
  ]
};

/**
 * DETAILED AMENITIES (Mapped to Image Content)
 */
export const FULL_AMENITIES_DETAILED = [
  {
    category: "Languages spoken",
    items: [
      { name: "English", icon: "check" },
      { name: "Hindi", icon: "check" }
    ]
  },
  {
    category: "Internet access",
    items: [
      { name: "Free Wi-Fi in all rooms!", icon: "wifi" },
      { name: "Internet", icon: "wifi" },
      { name: "Wi-Fi in public areas", icon: "wifi" }
    ]
  },
  {
    category: "Things to do, ways to relax",
    items: [
      { name: "Ticket services", icon: "check" },
      { name: "Tours", icon: "check" }
    ]
  },
  {
    category: "Services and conveniences",
    items: [
      { name: "Daily housekeeping", icon: "check" },
      { name: "Elevator", icon: "check", unavailable: true },
      { name: "Food delivery", icon: "check" },
      { name: "Shared lounge/TV area", icon: "check" },
      { name: "Smoking area", icon: "check", unavailable: true },
      { name: "Terrace", icon: "check" }
    ]
  },
  {
    category: "Access",
    items: [
      { name: "CCTV in common areas", icon: "check" },
      { name: "Couple's room", icon: "check" },
      { name: "Fire extinguisher", icon: "check" },
      { name: "Non-smoking rooms", icon: "check" },
      { name: "Pets allowed", icon: "check", unavailable: true },
      { name: "Security [24-hour]", icon: "check" }
    ]
  },
  {
    category: "Getting around",
    items: [
      { name: "Car park [on-site]", icon: "car" }
    ]
  }
];

/**
 * LOCAL LANDMARKS
 */
export const CLOSEST_LANDMARKS = [
  { name: "Puri Beach", distance: "3.1 km", icon: "sea" },
  { name: "Swargadwar Beach", distance: "2.1 km", icon: "sea" },
  { name: "Blue Flag Beach", distance: "4.4 km", icon: "sea" }
  
];

/**
 * ROOMS & SUITES (9 Categories)
 */
export const ROOMS: Room[] = [
  {
    id: 'king-bed',
    name: 'King Bed Room',
    description: 'A spacious haven with a massive king-sized cloud bed.',
    price: '₹3,499',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '15 m² / 161 ft²',
    amenities: ['1 king bed, Private bathroom, Shower, Mirror, Toiletries, Towels, Open air bath privileges, Flat screen TV, Free Wi-Fi, Wireless internet access, Blackout curtains, Fan, Socket near the bed, Desk, Closet, Openable window, Tile or marble flooring, Daily newspaper, Wake-up service, Low floor availability, Trash cans.'],
    idealFor: 'EXECUTIVE SOLO'
  },
  {
    id: 'deluxe-triple',
    name: 'Deluxe Triple',
    description: 'Perfect for groups or small families with versatile bedding.',
    price: '₹4,999',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '3 Guests',
    bedType: '1 Single + 1 King Bed',
    size: '22 m² / 236 ft²',
    amenities: ['1 single bed and 1 king bed, Private bathroom, Shower, Mirror, Open air bath privileges, Flat screen TV, Free Wi-Fi, Wireless internet access, Air conditioning, Individual air conditioning, Fan, Blackout curtains, Sleep comfort items, Free bottled water, Desk, Socket near the bed, Openable window, Tile or marble flooring, Daily newspaper, Accessible by stairs, Trash cans.'],
    idealFor: 'SMALL GROUPS'
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    description: 'Intimate space with modern minimalist aesthetics.',
    price: '₹3,299',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a77d399a80c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '14 m² / 151 ft²',
    amenities: ['1 king bed, Private bathroom, Shower, Mirror, Open air bath privileges, Flat screen TV, Free Wi-Fi, Wireless internet access, Air conditioning, Individual air conditioning, Fan, Blackout curtains, Sleep comfort items, Free bottled water, Desk, Socket near the bed, Openable window, Tile or marble flooring, Daily newspaper, Accessible by stairs, Trash cans.'],
    idealFor: 'COUPLES'
  },
  {
    id: 'deluxe-quad',
    name: 'Deluxe Quadruple Room',
    description: 'Maximum capacity for the whole family without compromising style.',
    price: '₹5,999',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '4 Guests',
    bedType: '2 King Beds',
    size: '28 m² / 301 ft²',
    amenities: ['2 king beds, Private bathroom, Toiletries, Free Wi-Fi, Individual air conditioning, Fan, Blackout curtains, Sleep comfort items, Free bottled water, Socket near the bed, Clothes rack, Daily newspaper, Wake-up service, Ground or low floor available, Accessible by stairs, Trash cans, Safety and security features.'],
    idealFor: 'FAMILIES'
  },
  {
    id: 'deluxe-queen',
    name: 'Deluxe Queen Room',
    description: 'Elegant queen-sized accommodation for the modern traveler.',
    price: '₹3,699',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 Queen Bed',
    size: '16 m² / 172 ft²',
    amenities: ['1 queen bed, Private bathroom, Toiletries, Free Wi-Fi, Fan, Sleep comfort items, Window, Tile or marble flooring, Low floor available, Accessible by stairs, Smoking allowed, Safety and security features.'],
    idealFor: 'MODERN TRAVELERS'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Our flagship suite featuring hand-picked decor and superior comfort.',
    price: '₹4,499',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '20 m² / 215 ft²',
    amenities: ['1 king bed, Private bathroom, Shower, Toiletries, Towels, Blackout curtains, Socket near the bed, Kettle, High floor, Openable window, Accessible by stairs, Trash cans.'],
    idealFor: 'VIP STAY'
  },
  {
    id: 'deluxe-standard',
    name: 'Deluxe (Standard)',
    description: 'Unbeatable value for premium comfort in the city.',
    price: '₹2,999',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '13 m² / 140 ft²',
    amenities: ['AC', 'WIFI', 'HOT WATER'],
    idealFor: 'VALUE STAY'
  },
  {
    id: 'assigned-on-arrival',
    name: 'Room Assigned on Arrival',
    description: 'Get our best available room at check-in for a discounted price.',
    price: '₹2,499',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: 'Assigned on arrival',
    size: 'Varies',
    amenities: ['MYSTERY SELECTION', 'WIFI', 'AC'],
    idealFor: 'BUDGET SAVVY'
  },
  {
    id: 'city-view',
    name: 'Deluxe Double Room with City View',
    description: 'Stunning urban panoramas of Puri from your private suite.',
    price: '₹3,899',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1000'
    ],
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '17 m² / 183 ft²',
    amenities: ['CITY VIEW', 'PREMIUM LINEN', 'WIFI'],
    idealFor: 'SIGHTSEERS'
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1574643156929-51fa098b0394?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200"
];
