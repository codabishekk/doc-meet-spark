import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Akask',
    specialization: 'Cardiologist',
    image: '/placeholder.svg',
    experience: 12,
    rating: 4.8,
    location: 'Mumbai, Maharashtra',
    fee: 800,
    availability: {
      status: 'available',
      nextSlot: 'Today 2:00 PM'
    },
    timeSlots: [
      { id: '1', date: '2024-08-02', time: '2:00 PM', available: true },
      { id: '2', date: '2024-08-02', time: '3:00 PM', available: true },
      { id: '3', date: '2024-08-02', time: '4:00 PM', available: false },
      { id: '4', date: '2024-08-03', time: '10:00 AM', available: true },
      { id: '5', date: '2024-08-03', time: '11:00 AM', available: true },
    ],
    about: 'Dr. Sarah Johnson is a renowned cardiologist with over 12 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and advanced cardiac procedures.',
    education: ['MBBS - All India Institute of Medical Sciences', 'MD Cardiology - Post Graduate Institute'],
    languages: ['English', 'Hindi', 'Marathi']
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Orthopedic Surgeon',
    image: '/placeholder.svg',
    experience: 15,
    rating: 4.9,
    location: 'Delhi, Delhi',
    fee: 1200,
    availability: {
      status: 'busy',
      nextSlot: 'Tomorrow 9:00 AM'
    },
    timeSlots: [
      { id: '6', date: '2024-08-03', time: '9:00 AM', available: true },
      { id: '7', date: '2024-08-03', time: '10:00 AM', available: true },
      { id: '8', date: '2024-08-03', time: '11:00 AM', available: false },
      { id: '9', date: '2024-08-04', time: '2:00 PM', available: true },
    ],
    about: 'Dr. Rajesh Kumar is a leading orthopedic surgeon specializing in joint replacement surgeries and sports medicine. He has performed over 5000 successful surgeries.',
    education: ['MBBS - Maulana Azad Medical College', 'MS Orthopedics - King George Medical University'],
    languages: ['English', 'Hindi', 'Punjabi']
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    specialization: 'Dermatologist',
    image: '/placeholder.svg',
    experience: 8,
    rating: 4.7,
    location: 'Bangalore, Karnataka',
    fee: 600,
    availability: {
      status: 'available',
      nextSlot: 'Today 3:30 PM'
    },
    timeSlots: [
      { id: '10', date: '2024-08-02', time: '3:30 PM', available: true },
      { id: '11', date: '2024-08-02', time: '4:30 PM', available: true },
      { id: '12', date: '2024-08-03', time: '10:30 AM', available: true },
      { id: '13', date: '2024-08-03', time: '11:30 AM', available: true },
    ],
    about: 'Dr. Priya Sharma is an expert dermatologist with extensive experience in treating skin conditions, cosmetic dermatology, and dermatosurgery.',
    education: ['MBBS - Kasturba Medical College', 'MD Dermatology - Bangalore Medical College'],
    languages: ['English', 'Hindi', 'Kannada']
  },
  {
    id: '4',
    name: 'Dr. Amit Patel',
    specialization: 'Neurologist',
    image: '/placeholder.svg',
    experience: 10,
    rating: 4.6,
    location: 'Ahmedabad, Gujarat',
    fee: 900,
    availability: {
      status: 'unavailable',
      nextSlot: 'Monday 10:00 AM'
    },
    timeSlots: [
      { id: '14', date: '2024-08-05', time: '10:00 AM', available: true },
      { id: '15', date: '2024-08-05', time: '11:00 AM', available: true },
      { id: '16', date: '2024-08-06', time: '2:00 PM', available: true },
    ],
    about: 'Dr. Amit Patel is a skilled neurologist specializing in treating neurological disorders including epilepsy, stroke, and movement disorders.',
    education: ['MBBS - B.J. Medical College', 'DM Neurology - Sanjay Gandhi Institute'],
    languages: ['English', 'Hindi', 'Gujarati']
  },
  {
    id: '5',
    name: 'Dr. Meera Reddy',
    specialization: 'Pediatrician',
    image: '/placeholder.svg',
    experience: 14,
    rating: 4.9,
    location: 'Hyderabad, Telangana',
    fee: 700,
    availability: {
      status: 'available',
      nextSlot: 'Today 5:00 PM'
    },
    timeSlots: [
      { id: '17', date: '2024-08-02', time: '5:00 PM', available: true },
      { id: '18', date: '2024-08-02', time: '6:00 PM', available: true },
      { id: '19', date: '2024-08-03', time: '3:00 PM', available: true },
      { id: '20', date: '2024-08-03', time: '4:00 PM', available: true },
    ],
    about: 'Dr. Meera Reddy is a compassionate pediatrician with expertise in child healthcare, vaccinations, and developmental disorders.',
    education: ['MBBS - Osmania Medical College', 'MD Pediatrics - Niloufer Hospital'],
    languages: ['English', 'Hindi', 'Telugu']
  },
  {
    id: '6',
    name: 'Dr. Vikram Singh',
    specialization: 'Gastroenterologist',
    image: '/placeholder.svg',
    experience: 11,
    rating: 4.5,
    location: 'Pune, Maharashtra',
    fee: 850,
    availability: {
      status: 'available',
      nextSlot: 'Tomorrow 11:00 AM'
    },
    timeSlots: [
      { id: '21', date: '2024-08-03', time: '11:00 AM', available: true },
      { id: '22', date: '2024-08-03', time: '12:00 PM', available: true },
      { id: '23', date: '2024-08-04', time: '10:00 AM', available: true },
    ],
    about: 'Dr. Vikram Singh is an experienced gastroenterologist specializing in digestive system disorders and endoscopic procedures.',
    education: ['MBBS - Armed Forces Medical College', 'DM Gastroenterology - Christian Medical College'],
    languages: ['English', 'Hindi', 'Marathi']
  }
];
