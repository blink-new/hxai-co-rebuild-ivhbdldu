import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay informed about your health</h3>
            <p className="text-primary-100 mb-6">
              Get health tips, appointment reminders, and updates from One Medical delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-slide-up animate-delay-100">
            <div className="text-2xl font-bold text-white mb-4">One Medical</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modern healthcare that works. Providing comprehensive, accessible, 
              and personalized care for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-up animate-delay-200">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Primary Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mental Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Urgent Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Specialty Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Virtual Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lab Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-slide-up animate-delay-300">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-up animate-delay-400">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>(888) 662-6331</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>support@onemedical.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>123 Healthcare Blvd<br />San Francisco, CA 94105</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Emergency</h5>
              <p className="text-gray-300 text-sm">
                For medical emergencies, call 911 or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 animate-slide-up animate-delay-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 One Medical. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Notice</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;