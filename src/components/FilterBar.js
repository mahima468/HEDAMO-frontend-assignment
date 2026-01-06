import React from 'react';

export default function FilterBar({ 
  searchTerm, 
  onSearchChange, 
  categories, 
  selectedCategory, 
  onCategoryChange,
  statuses,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-soft mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option value="">All Statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            id="sort"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="date-asc">Oldest First</option>
            <option value="date-desc">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}
