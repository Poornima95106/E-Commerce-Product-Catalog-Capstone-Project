import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full mb-6">
            Production Ready Capstone
          </span>
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
            The Next Gen <br /><span class="text-indigo-600">Product Catalog</span>
          </h1>
          <p class="mt-6 text-lg text-gray-600 max-w-md">
            Architected for modular frontend performance, utilizing client-side route parameters, lazy loaded state mechanics, and semantic Tailwind designs.
          </p>
          <div class="mt-10 flex gap-4">
            <Link to="/catalog" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-100">
              Explore Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div class="bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-3xl p-8 grid grid-cols-1 gap-6">
          <div class="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
            <div class="bg-indigo-100 text-indigo-600 p-3 rounded-xl"><Zap size={24} /></div>
            <div>
              <h3 class="font-bold text-gray-900">High Speed Assets</h3>
              <p class="text-sm text-gray-600">Minified production code payloads configured via modern Vite treeshaking algorithms.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
            <div class="bg-emerald-100 text-emerald-600 p-3 rounded-xl"><ShieldCheck size={24} /></div>
            <div>
              <h3 class="font-bold text-gray-900">Strict Component Isolation</h3>
              <p class="text-sm text-gray-600">Modular files separated intuitively by functional structural duties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
