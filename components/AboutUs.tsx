import React from 'react';
import AnimatedSection from './AnimatedSection';
import { teamMembers } from '../constants';

const AboutUs: React.FC = () => {
  if (teamMembers.length < 1) return null; // Defensive check for data

  return (
    <section id="about" className="relative bg-off-beige py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Centered Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight font-serif">
              Dr. Sumeet Jain's Novel Dental and Implant Clinic
            </h2>
          </div>
        </AnimatedSection>

        {/* Dr. Sumeet Jain's Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-left">
            <img
              src={teamMembers[0].image}
              loading="lazy"
              alt={teamMembers[0].name}
              className="w-full h-auto object-cover rounded-xl shadow-2xl aspect-square"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-right">
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-bold text-brand font-serif">{teamMembers[0].name}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{teamMembers[0].bio}</p>
              
              <div className="mt-8">
                <a href="#about" 
                   className="inline-block bg-brand text-white px-8 py-4 rounded-full font-semibold 
                              hover:bg-brand-dark transition-all duration-200 shadow-lg text-lg transform hover:scale-105">
                  More About Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;