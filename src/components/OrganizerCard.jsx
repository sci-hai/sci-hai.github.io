import React from 'react';

export function OrganizerCard({ name, institution, imageUrl }) {
  // Generate initials for the fallback
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
      <div className="mb-3">
        <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-200">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={`${name}`} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-indigo-100 text-indigo-500">
              <span className="text-2xl font-bold">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{institution}</p>
      </div>
    </div>
  );
}