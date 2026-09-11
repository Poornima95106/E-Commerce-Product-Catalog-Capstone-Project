import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: "1", name: "AeroPulse Wireless Headphones", brand: "AeroAudio", category: "Electronics", price: 189, description: "Active noise cancelling with hyper-adaptive transparency configurations.", image: "https://unsplash.com" },
  { id: "2", name: "Chronos Minimalist Watch", brand: "Chronos", category: "Accessories", price: 240, description: "Sapphire glass mechanical timepiece with modular genuine Italian leather bands.", image: "https://unsplash.com" },
  { id: "3", name: "Apex Ergonomic Mechanical Keyboard", brand: "KeebForge", category: "Electronics", price: 145, description: "Hot-swappable switches configured inside an aircraft-grade aluminum CNC body.", image: "https://unsplash.com" },
  { id: "4", name: "Vortex Premium Leather Pack", brand: "Strand", category: "Accessories", price: 110, description: "Waterproof structural layout containing targeted compartments for devices.", image: "https://unsplash.com" },
  { id: "5", name: "Lumina Smart Ambient Light Bar", brand: "AeroAudio", category: "Electronics", price: 65, description: "Dynamic reactive workspace illumination synchronization via native audio engines.", image: "https://unsplash.com" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div class="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 class="text-2xl font-bold text-gray-900">Asset Record Not Found</h2>
        <Link to="/catalog" class="text-indigo-600 mt-4 inline-flex items-center gap-2"><ArrowLeft size={16}/> Return to Shop</Link>
      </div>
    );
  }

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/catalog" class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 mb-8 transition"><ArrowLeft size={16}/> Back to catalog</Link>
      <div class="grid md:grid-cols-2 gap-12 bg-white border border-gray-100 p-6 md:p-10 rounded-3xl">
        <div class="bg-gray-50 rounded-2xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} class="w-full h-full object-cover object-center" />
        </div>
        <div class="flex flex-col justify-between py-2">
          <div>
            <span class="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{product.category}</span>
            <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">{product.name}</h1>
            <p class="text-sm font-medium text-gray-400 mt-1">Brand: {product.brand}</p>
            <div class="mt-6 text-3xl font-black text-gray-900">${product.price}</div>
            <p class="mt-6 text-gray-600 leading-relaxed text-base">{product.description}</p>
            <ul class="mt-6 space-y-2.5">
              <li class="flex items-center gap-2 text-sm text-gray-700"><Check size={16} class="text-emerald-500" /> Professional Grade Quality Certification</li>
              <li class="flex items-center gap-2 text-sm text-gray-700"><Check size={16} class="text-emerald-500" /> Modular Architectural Construction</li>
            </ul>
          </div>
          <div class="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
            <Shield size={20} class="text-indigo-600 flex-shrink-0" />
            <p class="text-xs text-gray-500">Secure Client Routing Environment. Assets are systematically packaged and optimized dynamically via localized modules.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
