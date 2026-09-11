import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

const MOCK_PRODUCTS = [
  { id: "1", name: "AeroPulse Wireless Headphones", brand: "AeroAudio", category: "Electronics", price: 189, description: "Active noise cancelling with hyper-adaptive transparency configurations.", image: "https://unsplash.com" },
  { id: "2", name: "Chronos Minimalist Watch", brand: "Chronos", category: "Accessories", price: 240, description: "Sapphire glass mechanical timepiece with modular genuine Italian leather bands.", image: "https://unsplash.com" },
  { id: "3", name: "Apex Ergonomic Mechanical Keyboard", brand: "KeebForge", category: "Electronics", price: 145, description: "Hot-swappable switches configured inside an aircraft-grade aluminum CNC body.", image: "https://unsplash.com" },
  { id: "4", name: "Vortex Premium Leather Pack", brand: "Strand", category: "Accessories", price: 110, description: "Waterproof structural layout containing targeted compartments for devices.", image: "https://unsplash.com" },
  { id: "5", name: "Lumina Smart Ambient Light Bar", brand: "AeroAudio", category: "Electronics", price: 65, description: "Dynamic reactive workspace illumination synchronization via native audio engines.", image: "https://unsplash.com" },
];

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => sortOrder === 'low-to-high' ? a.price - b.price : b.price - a.price);
  }, [search, category, sortOrder]);

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-100">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Product Catalog</h1>
          <p class="text-sm text-gray-500 mt-1">Filtering {filteredProducts.length} high-fidelity optimized listings</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <input 
            type="text" placeholder="Search product/brand..." value={search} onChange={(e) => setSearch(e.target.value)}
            class="px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 min-w-[200px]"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} class="px-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-indigo-600">
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} class="px-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-indigo-600">
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div class="text-center py-24 text-gray-400">No catalog assets match your specific parameters.</div>
      )}
    </div>
  );
}
