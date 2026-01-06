export const mockProducts = [
  {
    id: 1,
    name: 'Annual Financial Disclosure',
    category: 'Finance',
    producer: 'Wealth Management Inc.',
    status: 'Published',
    lastUpdated: '2025-12-15',
    description: 'Comprehensive financial disclosure for the fiscal year.'
  },
  {
    id: 2,
    name: 'Product Safety Report',
    category: 'Manufacturing',
    producer: 'SafeTech Industries',
    status: 'Draft',
    lastUpdated: '2026-01-03',
    description: 'Detailed safety specifications and test results.'
  },
  {
    id: 3,
    name: 'Clinical Trial Results',
    category: 'Healthcare',
    producer: 'BioHealth Solutions',
    status: 'Submitted',
    lastUpdated: '2025-11-20',
    description: 'Phase III clinical trial results and analysis.'
  },
  {
    id: 4,
    name: 'Environmental Impact Assessment',
    category: 'Energy',
    producer: 'GreenPower Corp',
    status: 'Published',
    lastUpdated: '2025-10-05',
    description: 'Annual environmental impact and sustainability report.'
  },
  {
    id: 5,
    name: 'Supply Chain Disclosure',
    category: 'Retail',
    producer: 'Global Retail Group',
    status: 'Draft',
    lastUpdated: '2026-01-05',
    description: 'Supplier information and ethical sourcing practices.'
  }
];

export const categories = [...new Set(mockProducts.map(p => p.category))];
export const statuses = ['Draft', 'Submitted', 'Published'];
