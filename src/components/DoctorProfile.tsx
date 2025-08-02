import { ArrowLeft, Star, MapPin, Clock, IndianRupee, Calendar, Languages, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Doctor } from '@/types';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookAppointment: () => void;
}

export function DoctorProfile({ doctor, onBack, onBookAppointment }: DoctorProfileProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'unavailable':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const availableSlots = doctor.timeSlots.filter(slot => slot.available);

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        className="mb-6 text-medical-blue hover:text-medical-blue/80"
        onClick={onBack}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Doctors
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <Card className="lg:col-span-2">
          <CardContent className="p-8">
            <div className="flex items-start gap-6 mb-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-medical-light"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-xl text-medical-blue font-medium mb-4">{doctor.specialization}</p>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{doctor.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5" />
                    <span>₹{doctor.fee} consultation fee</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{doctor.location}</span>
                </div>
                
                <Badge className={getStatusColor(doctor.availability.status)}>
                  {doctor.availability.status === 'available' ? 'Available' : 
                   doctor.availability.status === 'busy' ? 'Busy' : 'Unavailable'}
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h3>
                <ul className="space-y-2">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Card */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Available Slots
              </CardTitle>
            </CardHeader>
            <CardContent>
              {availableSlots.length > 0 ? (
                <div className="space-y-3 mb-6">
                  {availableSlots.slice(0, 4).map((slot) => (
                    <div key={slot.id} className="flex justify-between items-center p-3 bg-medical-light rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{slot.date}</p>
                        <p className="text-gray-600 text-sm">{slot.time}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Available
                      </Badge>
                    </div>
                  ))}
                  {availableSlots.length > 4 && (
                    <p className="text-sm text-gray-600 text-center">
                      +{availableSlots.length - 4} more slots available
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No slots available</p>
              )}
              
              <Button 
                variant="medical" 
                size="lg" 
                className="w-full"
                onClick={onBookAppointment}
                disabled={availableSlots.length === 0}
              >
                Book Appointment
              </Button>
            </CardContent>
          </Card>

          {doctor.availability.nextSlot && (
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-green-600 font-medium text-center">
                  Next available: {doctor.availability.nextSlot}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}