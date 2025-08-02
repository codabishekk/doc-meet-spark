import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { DoctorCard } from '@/components/DoctorCard';
import { DoctorProfile } from '@/components/DoctorProfile';
import { BookingForm } from '@/components/BookingForm';
import { doctors } from '@/data/doctors';
import { Doctor } from '@/types';

type ViewState = 'list' | 'profile' | 'booking';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleViewProfile = (doctorId: string) => {
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
      setSelectedDoctor(doctor);
      setCurrentView('profile');
    }
  };

  const handleBookAppointment = () => {
    setCurrentView('booking');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedDoctor(null);
  };

  const handleBackToProfile = () => {
    setCurrentView('profile');
  };

  const handleBookingComplete = () => {
    setCurrentView('list');
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-white">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'list' && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {searchTerm ? `Search Results (${filteredDoctors.length})` : 'Available Doctors'}
              </h2>
              <p className="text-gray-600">
                {searchTerm 
                  ? `Showing results for "${searchTerm}"` 
                  : 'Choose from our network of qualified healthcare professionals'
                }
              </p>
            </div>
            
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {currentView === 'profile' && selectedDoctor && (
          <DoctorProfile
            doctor={selectedDoctor}
            onBack={handleBackToList}
            onBookAppointment={handleBookAppointment}
          />
        )}

        {currentView === 'booking' && selectedDoctor && (
          <BookingForm
            doctor={selectedDoctor}
            onBack={handleBackToProfile}
            onBookingComplete={handleBookingComplete}
          />
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">© 2024 NirogGyan. Connecting you with quality healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
