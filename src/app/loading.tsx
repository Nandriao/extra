import React from 'react';

export default function Loading() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen"
      role="status"
      aria-label="Carregando conteúdo"
    >
      <div className="relative">
        <div 
          className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-primary border-r-primary animate-[spin_1s_linear_infinite] relative"
          aria-hidden="true"
        >
        </div>
      </div>
      <span className="mt-4 text-sm text-gray-500 font-medium">Carregando...</span>
    </div>
  );
}