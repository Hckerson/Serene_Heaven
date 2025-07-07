// API utility functions with mocked responses
import { 
  mockRooms, 
  mockAmenities, 
  mockTestimonials, 
  mockBlogPosts, 
  mockExtras,
  type Room,
  type Amenity,
  type Testimonial,
  type BlogPost,
  type Extra,
  type ApiResponse,
  type BookingRequest,
  type BookingResponse
} from '@/data/mock-data';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions with TODO comments for real implementation

export async function fetchRooms(filters?: {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomType?: string;
  minPrice?: number;
  maxPrice?: number;
}): Promise<ApiResponse<Room[]>> {
  await delay(800); // Simulate network delay
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/rooms?' + new URLSearchParams(filters));
  // return response.json();
  
  let filteredRooms = [...mockRooms];
  
  if (filters) {
    if (filters.roomType && filters.roomType !== 'all') {
      filteredRooms = filteredRooms.filter(room => room.type === filters.roomType);
    }
    if (filters.guests) {
      filteredRooms = filteredRooms.filter(room => room.capacity >= filters?.guests!);
    }
    if (filters.minPrice) {
      filteredRooms = filteredRooms.filter(room => room.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filteredRooms = filteredRooms.filter(room => room.price <= filters.maxPrice!);
    }
  }
  
  return {
    success: true,
    data: filteredRooms,
  };
}

export async function fetchRoomById(id: string): Promise<ApiResponse<Room | null>> {
  await delay(500);
  
  // TODO: Replace with real API call
  // const response = await fetch(`/api/rooms/${id}`);
  // return response.json();
  
  const room = mockRooms.find(r => r.id === id) || null;
  
  return {
    success: true,
    data: room,
  };
}

export async function fetchAmenities(): Promise<ApiResponse<Amenity[]>> {
  await delay(600);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/amenities');
  // return response.json();
  
  return {
    success: true,
    data: mockAmenities,
  };
}

export async function fetchTestimonials(): Promise<ApiResponse<Testimonial[]>> {
  await delay(400);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/testimonials');
  // return response.json();
  
  return {
    success: true,
    data: mockTestimonials,
  };
}

export async function fetchBlogPosts(): Promise<ApiResponse<BlogPost[]>> {
  await delay(500);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/blog');
  // return response.json();
  
  return {
    success: true,
    data: mockBlogPosts,
  };
}

export async function fetchBlogPost(id: string): Promise<ApiResponse<BlogPost | null>> {
  await delay(400);
  
  // TODO: Replace with real API call
  // const response = await fetch(`/api/blog/${id}`);
  // return response.json();
  
  const post = mockBlogPosts.find(p => p.id === id) || null;
  
  return {
    success: true,
    data: post,
  };
}

export async function fetchExtras(): Promise<ApiResponse<Extra[]>> {
  await delay(300);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/extras');
  // return response.json();
  
  return {
    success: true,
    data: mockExtras,
  };
}

export async function submitBooking(booking: BookingRequest): Promise<ApiResponse<BookingResponse>> {
  await delay(1500); // Simulate processing time
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/booking', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(booking)
  // });
  // return response.json();
  
  // Mock successful booking response
  const mockResponse: BookingResponse = {
    bookingId: `BK${Date.now()}`,
    confirmationNumber: `SH${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
    totalAmount: 299 + (booking.extras.length * 50), // Mock calculation
    status: 'confirmed',
  };
  
  return {
    success: true,
    data: mockResponse,
    message: 'Booking confirmed successfully!',
  };
}

export async function submitContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ApiResponse<{ messageId: string }>> {
  await delay(1000);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  // return response.json();
  
  return {
    success: true,
    data: { messageId: `MSG${Date.now()}` },
    message: 'Message sent successfully! We\'ll get back to you soon.',
  };
}

export async function subscribeNewsletter(email: string): Promise<ApiResponse<{ subscriptionId: string }>> {
  await delay(800);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/newsletter/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email })
  // });
  // return response.json();
  
  return {
    success: true,
    data: { subscriptionId: `SUB${Date.now()}` },
    message: 'Successfully subscribed to our newsletter!',
  };
}

// Auth API functions (mocked)
export async function loginUser(email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> {
  await delay(1000);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password })
  // });
  // return response.json();
  
  // Mock successful login
  const mockToken = `mock_jwt_token_${Date.now()}`;
  const mockUser = {
    id: '1',
    email,
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
  };
  
  // Store in localStorage for demo
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', mockToken);
    localStorage.setItem('user_data', JSON.stringify(mockUser));
  }
  
  return {
    success: true,
    data: { token: mockToken, user: mockUser },
    message: 'Login successful!',
  };
}

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}): Promise<ApiResponse<{ token: string; user: any }>> {
  await delay(1200);
  
  // TODO: Replace with real API call
  // const response = await fetch('/api/auth/register', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  // return response.json();
  
  // Mock successful registration
  const mockToken = `mock_jwt_token_${Date.now()}`;
  const mockUser = {
    id: '1',
    email: data.email,
    name: data.name,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
  };
  
  // Store in localStorage for demo
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', mockToken);
    localStorage.setItem('user_data', JSON.stringify(mockUser));
  }
  
  return {
    success: true,
    data: { token: mockToken, user: mockUser },
    message: 'Registration successful!',
  };
}

export function logoutUser(): void {
  // TODO: Call logout API endpoint
  // await fetch('/api/auth/logout', { method: 'POST' });
  
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
}

export function getCurrentUser(): any | null {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('user_data');
  return userData ? JSON.parse(userData) : null;
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  return !!localStorage.getItem('auth_token');
}