import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard, { ProductCardSkeleton } from './components/ProductCard';
import FilterBar from './components/FilterBar';
import ProductDetail from './pages/ProductDetail';
import InfoBanner from './components/InfoBanner';
import { mockProducts, categories, statuses } from './mockData';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    // Apply filters
    let result = [...mockProducts];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        (product.producer || '').toLowerCase().includes(term)
      );
    }

    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (selectedStatus) {
      result = result.filter((product) => product.status === selectedStatus);
    }

    // Apply sorting
    const [sortField, sortOrder] = sortBy.split('-');

    result.sort((a, b) => {
      if (sortField === 'name') {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortOrder === 'asc'
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      } else {
        // Sort by date
        const dateA = new Date(a.lastUpdated);
        const dateB = new Date(b.lastUpdated);
        return sortOrder === 'asc'
          ? dateA - dateB
          : dateB - dateA;
      }
    });

    return result;
  }, [searchTerm, selectedCategory, selectedStatus, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Disclosure Products</h1>
          <p className="text-gray-600 mt-2">Producer-reported information presented clearly</p>
        </header>

        <InfoBanner className="mb-6">
          All information is producer-declared and is not verified or certified.
        </InfoBanner>

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          statuses={statuses}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="mb-4 text-sm text-gray-500">
          {isLoading ? 'Loading products…' : `${filteredAndSortedProducts.length} product${filteredAndSortedProducts.length !== 1 ? 's' : ''} found`}
        </div>

        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="block">
                <ProductCardSkeleton />
              </div>
            ))
          ) : filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition duration-200"
              >
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <div className="col-span-full bg-white border border-gray-200 rounded-lg shadow-soft p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 text-slate-400" aria-hidden="true">
                <svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-medium mb-2">No matching disclosures</h3>
              <p className="text-gray-500 mb-2">No products match your current search or filters.</p>
              <p className="text-xs text-gray-400">Disclosures are producer-published and self-reported. Information is producer-declared and not verified or certified.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
