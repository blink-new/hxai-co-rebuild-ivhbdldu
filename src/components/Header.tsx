import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary-600">
              One Medical
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </a>
            <a href="#locations" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Locations
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(888) 662-6331</span>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#locations"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>(888) 662-6331</span>
                </div>
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;