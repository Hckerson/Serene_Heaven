// Mock data for Serene Heaven Hotel
export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'suite' | 'presidential';
  capacity: number;
  price: number;
  images: string[];
  amenities: string[];
  description: string;
  size: number;
  bedType: string;
  view: string;
  available: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  category: 'wellness' | 'dining' | 'recreation' | 'business';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Extra {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'dining' | 'spa' | 'activities' | 'transport';
}

// Mock Rooms Data
export const mockRooms: Room[] = [
  {
    id: 'deluxe-ocean-1',
    name: 'Deluxe Ocean View',
    type: 'deluxe',
    capacity: 2,
    price: 299,
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    amenities: ['Ocean View', 'King Bed', 'Free WiFi', 'Rainfall Shower', 'Minibar', 'Air Conditioning'],
    description: 'Wake up to breathtaking ocean views in our spacious deluxe room featuring premium amenities and elegant décor.',
    size: 40,
    bedType: 'King',
    view: 'Ocean',
    available: true,
  },
  {
    id: 'garden-suite-1',
    name: 'Garden Suite',
    type: 'suite',
    capacity: 3,
    price: 399,
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    amenities: ['Garden View', 'King Bed', 'Living Area', 'Spa Bath', 'Private Terrace', 'Butler Service'],
    description: 'Immerse yourself in tranquility with direct access to our lush gardens and a separate living area.',
    size: 65,
    bedType: 'King',
    view: 'Garden',
    available: true,
  },
  {
    id: 'presidential-suite-1',
    name: 'Presidential Suite',
    type: 'presidential',
    capacity: 4,
    price: 899,
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    amenities: ['Panoramic View', 'King Bed', 'Private Terrace', 'Butler Service', 'Dining Area', 'Premium Bar'],
    description: 'Experience unparalleled luxury in our flagship presidential suite with panoramic views and exclusive amenities.',
    size: 120,
    bedType: 'King',
    view: 'Panoramic',
    available: true,
  },
  {
    id: 'standard-room-1',
    name: 'Standard Room',
    type: 'standard',
    capacity: 2,
    price: 199,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    amenities: ['City View', 'Queen Bed', 'Free WiFi', 'Work Desk', 'Air Conditioning'],
    description: 'Comfortable and elegant standard room perfect for business travelers and couples.',
    size: 28,
    bedType: 'Queen',
    view: 'City',
    available: true,
  },
  {
    id: 'family-suite-1',
    name: 'Family Suite',
    type: 'suite',
    capacity: 6,
    price: 549,
    images: [
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    amenities: ['Two Bedrooms', 'King + Twin Beds', 'Living Area', 'Kitchenette', 'Two Bathrooms'],
    description: 'Spacious family suite with separate bedrooms and living area, perfect for families.',
    size: 85,
    bedType: 'King + Twin',
    view: 'Garden',
    available: true,
  },
];

// Mock Amenities Data
export const mockAmenities: Amenity[] = [
  {
    id: 'infinity-pool',
    name: 'Infinity Pool',
    description: 'Stunning infinity pool overlooking the ocean with poolside service and luxury cabanas.',
    icon: 'Waves',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'recreation',
  },
  {
    id: 'luxury-spa',
    name: 'Serenity Spa',
    description: 'Award-winning spa offering rejuvenating treatments, massage therapy, and wellness programs.',
    icon: 'Flower',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'wellness',
  },
  {
    id: 'fine-dining',
    name: 'Azure Restaurant',
    description: 'Michelin-starred fine dining featuring locally sourced ingredients and ocean views.',
    icon: 'ChefHat',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'dining',
  },
  {
    id: 'fitness-center',
    name: 'Fitness Center',
    description: 'State-of-the-art fitness center with personal trainers and yoga classes.',
    icon: 'Dumbbell',
    image: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'wellness',
  },
  {
    id: 'business-center',
    name: 'Business Center',
    description: 'Fully equipped business center with meeting rooms and conference facilities.',
    icon: 'Building',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'business',
  },
  {
    id: 'beach-club',
    name: 'Private Beach Club',
    description: 'Exclusive beach access with water sports, beach service, and sunset cocktails.',
    icon: 'Palmtree',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'recreation',
  },
];

// Mock Testimonials Data
export const mockTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Emma Thompson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Absolutely magical experience! The staff went above and beyond to make our anniversary special. The ocean view suite was breathtaking and the spa treatments were divine.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: '2024-01-15',
  },
  {
    id: 'testimonial-2',
    name: 'Michael Rodriguez',
    location: 'London, UK',
    rating: 5,
    comment: 'The attention to detail is remarkable. From the moment we arrived, we felt like royalty. The fine dining restaurant exceeded all expectations.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: '2024-01-10',
  },
  {
    id: 'testimonial-3',
    name: 'Sophia Chen',
    location: 'Tokyo, Japan',
    rating: 5,
    comment: 'Perfect blend of luxury and comfort. The infinity pool has the most stunning sunset views, and the service was impeccable throughout our stay.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: '2024-01-05',
  },
  {
    id: 'testimonial-4',
    name: 'James Wilson',
    location: 'Sydney, Australia',
    rating: 5,
    comment: 'An unforgettable honeymoon destination. The presidential suite was beyond our dreams, and the private beach access made it even more special.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: '2023-12-28',
  },
];

// Mock Blog Posts Data
export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 10 Romantic Getaway Ideas for Couples',
    excerpt: 'Discover the most romantic experiences and activities perfect for couples looking to reconnect and create lasting memories.',
    content: 'Full blog content would go here...',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Sarah Mitchell',
    date: '2024-01-20',
    category: 'Romance',
  },
  {
    id: 'blog-2',
    title: 'Wellness Retreat: Rejuvenate Your Mind and Body',
    excerpt: 'Learn about our comprehensive wellness programs designed to help you achieve balance and inner peace.',
    content: 'Full blog content would go here...',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Dr. Amanda Foster',
    date: '2024-01-18',
    category: 'Wellness',
  },
  {
    id: 'blog-3',
    title: 'Culinary Journey: Farm-to-Table Excellence',
    excerpt: 'Explore our commitment to sustainable dining and the local partnerships that make our cuisine exceptional.',
    content: 'Full blog content would go here...',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Chef Marcus Laurent',
    date: '2024-01-15',
    category: 'Dining',
  },
];

// Mock Extras Data
export const mockExtras: Extra[] = [
  {
    id: 'breakfast',
    name: 'Gourmet Breakfast',
    description: 'Continental breakfast with local specialties',
    price: 45,
    category: 'dining',
  },
  {
    id: 'spa-package',
    name: 'Couples Spa Package',
    description: '90-minute couples massage with champagne',
    price: 280,
    category: 'spa',
  },
  {
    id: 'airport-transfer',
    name: 'Airport Transfer',
    description: 'Luxury vehicle transfer to/from airport',
    price: 85,
    category: 'transport',
  },
  {
    id: 'wine-tasting',
    name: 'Wine Tasting Experience',
    description: 'Private wine tasting with sommelier',
    price: 120,
    category: 'activities',
  },
  {
    id: 'sunset-cruise',
    name: 'Sunset Cruise',
    description: 'Private yacht sunset cruise with dinner',
    price: 350,
    category: 'activities',
  },
];

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface BookingRequest {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  extras: string[];
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export interface BookingResponse {
  bookingId: string;
  confirmationNumber: string;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}