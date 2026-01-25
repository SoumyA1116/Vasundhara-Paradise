
export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  capacity: string;
  bedType: string;
  amenities: string[];
  idealFor: string;
  size?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  children: string;
  rooms: string;
  roomType: string;
}
