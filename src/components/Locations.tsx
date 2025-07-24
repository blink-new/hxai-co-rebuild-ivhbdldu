import React, { useState } from 'react';
import { MapPin, Search, Star, Clock, Phone, Wifi, Car, Coffee } from 'lucide-react';

const Locations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const locations = [
    {
      id: 1,
      name: 'Downtown Medical Center',
      address: '123 Main Street, San Francisco, CA 94105',
      phone: '(415) 555-0123',
      rating: 4.9,
      reviews: 245,
      hours: 'Mon-Fri: 7AM-7PM, Sat-Sun: 8AM-5PM',
      amenities: ['Parking', 'WiFi', 'Cafe', 'Pharmacy'],
      distance: '0.5 miles',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Mission Bay Health Hub',
      address: '456 Bay Street, San Francisco, CA 94158',
      phone: '(415) 555-0456',
      rating: 4.8,
      reviews: 189,
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      amenities: ['Parking', 'WiFi', 'Lab Services'],
      distance: '1.2 miles',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Pacific Heights Clinic',
      address: '789 Pacific Avenue, San Francisco, CA 94109',
      phone: '(415) 555-0789',
      rating: 4.7,
      reviews: 156,
      hours: 'Mon-Fri: 7AM-8PM, Weekends: 8AM-6PM',
      amenities: ['Parking', 'WiFi', 'Cafe', 'Urgent Care'],
      distance: '2.1 miles',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop'
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'cafe':
        return <Coffee className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <section id="locations" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find a location
            <span className="text-primary-600"> near you</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With convenient locations throughout the city, quality healthcare 
            is always within reach.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative animate-slide-up animate-delay-100">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by location or zip code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location, index) => (
            <div
              key={location.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-slide-up animate-delay-${(index + 2) * 100}`}
            >
              {/* Location Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  {location.distance}
                </div>
              </div>

              <div className="p-6">
                {/* Location Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{location.phone}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{location.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({location.reviews} reviews)</span>
                </div>

                {/* Hours */}
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{location.hours}</span>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {location.amenities.map((amenity, amenityIndex) => (
                      <div
                        key={amenityIndex}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700"
                      >
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm">
                    Book Here
                  </button>
                  <button className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No locations found</h3>
            <p className="text-gray-600">Try adjusting your search or browse all locations.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up animate-delay-600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find a convenient location?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Try our virtual care options. Get the same quality care from the comfort of your home.
            </p>
            <button className="bg-accent-600 text-white px-8 py-3 rounded-lg hover:bg-accent-700 transition-colors font-semibold">
              Start Virtual Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;