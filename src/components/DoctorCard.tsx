import { Star, MapPin, Clock, IndianRupee } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctorId: string) => void;
}

export function DoctorCard({ doctor, onViewProfile }: DoctorCardProps) {
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'busy':
        return 'Busy';
      case 'unavailable':
        return 'Unavailable';
      default:
        return 'Unknown';
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-medical-light"
            />
            <Badge 
              className={`absolute -bottom-1 -right-1 text-xs px-2 py-1 ${getStatusColor(doctor.availability.status)}`}
            >
              {getStatusText(doctor.availability.status)}
            </Badge>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-medical-blue transition-colors">
              {doctor.name}
            </h3>
            <p className="text-medical-blue font-medium mb-2">{doctor.specialization}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{doctor.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{doctor.experience} years</span>
              </div>
              <div className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4" />
                <span>{doctor.fee}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{doctor.location}</span>
            </div>
            
            {doctor.availability.nextSlot && (
              <p className="text-sm text-green-600 font-medium mb-4">
                Next available: {doctor.availability.nextSlot}
              </p>
            )}
            
            <Button 
              variant="medical" 
              className="w-full"
              onClick={() => onViewProfile(doctor.id)}
            >
              View Profile & Book
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}