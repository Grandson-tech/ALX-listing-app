import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* House icon */}
      <svg 
        className={`${sizeClasses[size]} text-blue-600`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2L2 9v13h20V9l-10-7zM12 4.5L20 10v11H4V10l8-5.5z"/>
        <path d="M9 14h6v6H9z"/>
      </svg>
      
      {/* Text logo */}
      <span className={`font-bold text-gray-800 ${
        size === 'sm' ? 'text-sm' : 
        size === 'md' ? 'text-lg' : 
        'text-2xl'
      }`}>
        ALX Listing
      </span>
    </div>
  );
};

export default Logo; 