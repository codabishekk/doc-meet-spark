export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  experience: number;
  rating: number;
  location: string;
  fee: number;
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextSlot?: string;
  };
  timeSlots: TimeSlot[];
  about: string;
  education: string[];
  languages: string[];
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface BookingFormData {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
}