import React from 'react';
import { Star, Shield, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Modern healthcare
              <span className="text-primary-600"> that works</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience healthcare the way it should be. Same-day appointments, 
              24/7 virtual care, and a care team that knows you.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8 animate-slide-up animate-delay-200">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.8/5 rating</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2 text-primary-600" />
                <span className="font-medium">500K+ patients</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Shield className="w-5 h-5 mr-2 text-accent-600" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-300">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Your First Visit
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 animate-slide-up animate-delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Virtual Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">Same Day</div>
                <div className="text-sm text-gray-600">Appointments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15 min</div>
                <div className="text-sm text-gray-600">Avg Wait Time</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in animate-delay-200">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Next Available</div>
                    <div className="text-primary-600 font-medium">Today at 2:30 PM</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Primary Care</span>
                    <span className="text-accent-600 font-medium">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Mental Health</span>
                    <span className="text-accent-600 font-medium">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Urgent Care</span>
                    <span className="text-accent-600 font-medium">Available</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;