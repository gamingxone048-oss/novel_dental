import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import BeforeAfter from '../components/BeforeAfter';
import CertificateOfExcellence from '../components/CertificateOfExcellence';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/#')) {
      const id = hash.substring(3); // Remove '#/#'
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <HeroSection />
      <main className="relative z-10 bg-off-beige">
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <BeforeAfter />
        <CertificateOfExcellence />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
};

export default HomePage;
