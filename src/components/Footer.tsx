import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Novel Dental N Implant Clinic. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Crafting smiles with precision and care.</p>
      </div>
    </footer>
  );
};

export default Footer;
