import React from 'react';

export function Skeleton({ className = '', ...props }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} {...props} />;
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-4/5' : 'w-full'}`} />
      ))}
    </div>
  );
}
