import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div class="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div class="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
        />
        <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-semibold px-2.5 py-1 rounded-full text-gray-800 shadow-sm">
          {product.category}
        </span>
      </div>
      <div class="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">{product.brand}</h3>
          <h2 class="mt-1 text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h2>
          <p class="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
          <span class="text-xl font-extrabold text-gray-900">${product.price}</span>
          <Link 
            to={`/product/${product.id}`} 
            class="inline-flex items-center gap-1 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-indigo-600 transition-colors"
          >
            Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
