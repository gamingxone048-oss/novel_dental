import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactCard from './components/ContactCard';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import CertificateOfExcellence from './components/CertificateOfExcellence';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  // Sets the custom style variable for off-beige background and smooth scrolling
  const globalStyles = `
    html, body {
      scroll-behavior: smooth;
      background-color: #fdfbf5; /* off-beige */
    }
  `;

  return (
    <div className="min-h-screen bg-off-beige text-gray-800 font-sans">
      <style>{globalStyles}</style>
      <Navbar />
      <HeroSection />
      <main className="relative z-10 bg-off-beige">
        <ContactCard />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <BeforeAfter />
        <CertificateOfExcellence />
        <Testimonials />
        <FAQ />
        {/* A simple footer could be added here */}
        <footer className="bg-gray-800 text-white py-8 mt-16 font-sans">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Novel Dental N Implant Clinic. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Crafting smiles with precision and care.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;