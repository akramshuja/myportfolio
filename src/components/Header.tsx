import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import aboutData from '../data/about.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {aboutData.name}
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Experience</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Skills</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
