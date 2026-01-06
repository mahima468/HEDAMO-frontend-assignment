import React from 'react';
import { Skeleton } from './Skeleton';

const statusStyles = {
  Draft: 'bg-yellow-100 text-yellow-800',
  Submitted: 'bg-blue-100 text-blue-800',
  Published: 'bg-green-100 text-green-800'
};

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 shadow-soft">
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <div className="flex items-center space-x-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="min-w-0">
            <h3 className="text-lg font-medium text-gray-900 mb-1 transition-colors duration-200 group-hover:text-calmBlue">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2 truncate">Declared by {product.producer}</p>
          </div>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[product.status]}`}>
            {product.status}
          </span>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs">
            {product.category}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-500">Updated by producer {formatDate(product.lastUpdated)}</span>
        </div>
        
        <div className="mt-2 text-xs text-gray-400">
          Producer declaration • Self-reported information
        </div>
        
        <p className="mt-3 text-sm text-gray-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}
