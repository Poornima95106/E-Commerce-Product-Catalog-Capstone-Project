import React from 'react';

export default function Footer() {
  return (
    <footer class="bg-white border-t border-gray-100 py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QuantumShop Inc. Capstone Project Architecture. All rights reserved.
      </div>
    </footer>
  );
}
