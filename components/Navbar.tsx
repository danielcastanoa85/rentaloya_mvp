import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { openWhatsApp } from '../utils';

interface NavbarProps {
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <svg width="190" height="40" viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rentaloya Logo">
                <text x="0" y="30" fill="#4338ca" style={{ fontWeight: 800, fontSize: "32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rental</text>
                <circle cx="120" cy="21" r="16" fill="#10B981" />
                <text x="120" y="29" fill="white" textAnchor="middle" style={{ fontWeight: "bold", fontSize: "22px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$</text>
                <text x="142" y="30" fill="#4338ca" style={{ fontWeight: 800, fontSize: "32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ya</text>
              </svg>
            </a>
          </div>

          {/* Central Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 border-2 border-gray-100 rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all shadow-sm"
              placeholder="¿Qué necesitas? Ej: Pulidora, Andamio..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => openWhatsApp("Hola, quiero entrar a mi cuenta.")}
              className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2 transition-colors"
            >
              Ingresar
            </button>
            <button 
              onClick={() => openWhatsApp("Hola Rentaloya, quiero publicar un activo.")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-indigo-200 transition-transform transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Publicar un Artículo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
           <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="¿Qué buscas?"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <button 
            onClick={() => openWhatsApp("Hola, quiero entrar a mi cuenta.")}
            className="flex items-center space-x-2 text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-50 w-full text-left"
          >
            <User size={18} />
            <span>Ingresar</span>
          </button>
          <button 
            onClick={() => openWhatsApp("Hola Rentaloya, quiero publicar un activo.")}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"
          >
            Publicar un Artículo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;