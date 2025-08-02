import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">NirogGyan</h1>
            <p className="text-xl opacity-90">Find and Book Appointments with Top Doctors</p>
          </div>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-12 text-gray-900 bg-white/95 border-0 shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}