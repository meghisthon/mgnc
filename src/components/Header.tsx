import React from 'react';
import { Globe2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">MEGNOC</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Clients</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Contact Us</a>
          </nav>
          <button className="bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}