import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../mockData';
import { Skeleton, SkeletonText } from '../components/Skeleton';
import InfoBanner from '../components/InfoBanner';

const versionHistory = [
  { id: 1, version: '2.1', date: '2025-12-15', status: 'Published', changes: 'Updated financial metrics and added Q4 data' },
  { id: 2, version: '2.0', date: '2025-09-01', status: 'Archived', changes: 'Major update with new reporting standards' },
  { id: 3, version: '1.5', date: '2025-06-20', status: 'Archived', changes: 'Minor corrections and clarifications' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <p>Product not found</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to products
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <div className="inline-flex items-center text-gray-600 mb-4">
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-2/3 mb-2" />
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md mb-8">
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-soft mb-8">
          <div className="px-6 py-5">
            <Skeleton className="h-5 w-40 mb-4" />
            <SkeletonText lines={3} />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-soft">
          <div className="px-6 py-5">
            <Skeleton className="h-5 w-40 mb-4" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded mb-4 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>
        
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs mr-3">
            {product.category}
          </span>
          <span>Updated by producer {formatDate(product.lastUpdated)}</span>
        </div>
      </div>

      <InfoBanner className="mb-8">
        All information is producer-declared and is not verified or certified.
      </InfoBanner>

      <div className="bg-white border border-gray-200 rounded-lg shadow-soft mb-8">
        <div className="px-6 py-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Disclosure Summary
          </h3>
        </div>
        <div className="border-t border-gray-200 px-6 py-5">
          <dl className="divide-y divide-gray-100">
            <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Declared by
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {product.producer}
              </dd>
            </div>
            <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Date provided
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formatDate(product.lastUpdated)}
              </dd>
            </div>
            <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Supporting materials provided by producer
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {Math.floor(Math.random() * 5) + 1} document(s) attached
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-soft">
        <div className="px-6 py-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Version History
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {versionHistory.map((version) => (
              <li key={version.id}>
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Version {version.version}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        version.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {version.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {formatDate(version.date)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{version.changes}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-soft">
        <div className="px-6 py-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Information provided by producer
          </h3>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
