import React from 'react';
import { Heart, Brain, Stethoscope, Pill, Clock, Video, Calendar, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'Comprehensive healthcare for your everyday needs, from routine checkups to chronic condition management.',
      features: ['Annual physicals', 'Preventive care', 'Chronic disease management', 'Health screenings']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Mental Health',
      description: 'Professional mental health support with licensed therapists and psychiatrists.',
      features: ['Therapy sessions', 'Medication management', 'Crisis support', 'Wellness coaching']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Urgent Care',
      description: 'Same-day care for non-emergency conditions when you need it most.',
      features: ['Same-day appointments', 'Minor injuries', 'Illness treatment', 'Lab tests']
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: 'Specialty Care',
      description: 'Access to specialists and advanced care coordination for complex conditions.',
      features: ['Specialist referrals', 'Care coordination', 'Advanced diagnostics', 'Treatment planning']
    }
  ];

  const quickServices = [
    { icon: <Video className="w-5 h-5" />, title: 'Virtual Visit', time: '15 min' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Book Appointment', time: '2 min' },
    { icon: <Pill className="w-5 h-5" />, title: 'Prescription Refill', time: '1 min' },
    { icon: <MessageCircle className="w-5 h-5" />, title: 'Message Provider', time: 'Instant' }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Healthcare services
            <span className="text-primary-600"> designed for you</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine care to urgent needs, we provide comprehensive healthcare 
            services that fit your life and schedule.
          </p>
        </div>

        {/* Quick Services Bar */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 mb-16 animate-slide-up animate-delay-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Quick Services</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((service, index) => (
              <button
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 text-sm">{service.title}</div>
                    <div className="text-xs text-gray-500">{service.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slide-up animate-delay-${(index + 2) * 100}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up animate-delay-600">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of patients who trust One Medical for their healthcare needs. 
              Book your first appointment today.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Book Your First Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;