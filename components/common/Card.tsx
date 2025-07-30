import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {!imageError ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="text-4xl mb-2">🏠</div>
            <div className="text-sm">{title}</div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card; 