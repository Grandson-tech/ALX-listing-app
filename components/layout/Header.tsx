import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">LuxuryListings</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for properties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</a>
          </nav>
        </div>

        {/* Accommodation Types */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center space-x-8 overflow-x-auto">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Mansion</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Countryside</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Beachfront</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Mountain View</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">City Center</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Luxury Villa</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
