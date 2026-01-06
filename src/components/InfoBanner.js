import React from 'react';

export default function InfoBanner({ children, className = '' }) {
  return (
    <div
      role="note"
      className={`bg-slate-50 border border-slate-200 text-slate-700 rounded-lg p-4 flex items-start gap-3 ${className}`}
    >
      <svg
        className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-sm leading-6">
        {children}
      </p>
    </div>
  );
}
