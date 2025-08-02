import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { Doctor, BookingFormData } from '@/types';

interface BookingFormProps {
  doctor: Doctor;
  onBack: () => void;
  onBookingComplete: () => void;
}

export function BookingForm({ doctor, onBack, onBookingComplete }: BookingFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    date: '',
    time: ''
  });

  const availableSlots = doctor.timeSlots.filter(slot => slot.available);
  const uniqueDates = [...new Set(availableSlots.map(slot => slot.date))];

  const getAvailableTimesForDate = (selectedDate: string) => {
    return availableSlots.filter(slot => slot.date === selectedDate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.patientEmail || !formData.patientPhone || !formData.date || !formData.time) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book an appointment.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment with ${doctor.name} has been confirmed for ${formData.date} at ${formData.time}.`,
      });
      
      onBookingComplete();
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        className="mb-6 text-medical-blue hover:text-medical-blue/80"
        onClick={onBack}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Profile
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Book Appointment</CardTitle>
          <div className="text-center text-gray-600">
            <p className="font-medium">{doctor.name}</p>
            <p className="text-sm">{doctor.specialization}</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5" />
                Patient Information
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="patientName">Full Name *</Label>
                  <Input
                    id="patientName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.patientName}
                    onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="patientEmail">Email Address *</Label>
                  <Input
                    id="patientEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.patientEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, patientEmail: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="patientPhone">Phone Number *</Label>
                  <Input
                    id="patientPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.patientPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, patientPhone: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Appointment Schedule */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Select Date & Time
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Select onValueChange={(value) => {
                    setFormData(prev => ({ ...prev, date: value, time: '' }));
                  }}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      {uniqueDates.map((date) => (
                        <SelectItem key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select 
                    disabled={!formData.date}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.date && getAvailableTimesForDate(formData.date).map((slot) => (
                        <SelectItem key={slot.id} value={slot.time}>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {slot.time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Consultation Fee */}
            <div className="bg-medical-light p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Consultation Fee:</span>
                <span className="text-xl font-bold text-medical-blue">₹{doctor.fee}</span>
              </div>
            </div>

            <Button 
              type="submit" 
              variant="medical" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}