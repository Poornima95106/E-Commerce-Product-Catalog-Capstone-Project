import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Search } from 'lucide-react';

export default function Navbar() {
  const activeStyle = ({ isActive }) => 
    isActive ? "text-indigo-600 font-semibold transition" : "text-gray-600 hover:text-indigo-600 transition";

  return (
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <Link to="/" class="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <span class="bg-indigo-600 text-white p-1.5 rounded-lg"><ShoppingBag size={20} /></span>
            <span>QUANTUM<span class="text-indigo-600">SHOP</span></span>
          </Link>
          <div class="hidden md:flex space-x-8">
            <NavLink to="/" class={activeStyle}>Home</NavLink>
            <NavLink to="/catalog" class={activeStyle}>Shop Catalog</NavLink>
          </div>
          <div class="flex items-center gap-4">
            <button class="text-gray-600 hover:text-indigo-600 p-2"><Search size={20} /></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
