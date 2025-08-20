import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { PropertyProps } from '../interfaces';

// Pill component for filters
interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

// Property Card component
interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {property.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            -{property.discount}%
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium">
          ⭐ {property.rating}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">
            {property.offers.bed} bed • {property.offers.shower} bath
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Top Villa',
    'Self Checkin',
    'Luxury Villa',
    'Mountain View',
    'Beachfront',
    'City View'
  ];

  const filteredProperties = activeFilter === 'All' 
    ? PROPERTYLISTINGSAMPLE 
    : PROPERTYLISTINGSAMPLE.filter(property => 
        property.category.some(cat => 
          cat.toLowerCase().includes(activeFilter.toLowerCase().replace(' ', ''))
        )
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            The best prices for over 2 million properties worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterOptions.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
