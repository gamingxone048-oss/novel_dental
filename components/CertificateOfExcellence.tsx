import React from 'react';
import AnimatedSection from './AnimatedSection';

const certificates = [
  { src: 'https://i.imgur.com/L4xXRc5.png', alt: 'Dentical Association Certificate' },
  { src: 'https://i.imgur.com/2s3v4XJ.png', alt: 'Gold Award Dental Clinic Certificate' },
  { src: 'https://i.imgur.com/fNf8gYy.png', alt: 'Dental Clinic Excellence Certificate' },
  { src: 'https://i.imgur.com/Qj4d8dK.png', alt: 'Platinum Clinic Certificate' },
];

const CertificateOfExcellence: React.FC = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-off-beige">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">Our Accreditations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight font-serif">
              Certificate of Excellence
            </h2>
            <p className="font-sans text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
              We are proud to be recognized for our commitment to quality, patient care, and clinical excellence.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certificates.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="group transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  loading="lazy"
                  className="h-40 w-40 md:h-48 md:w-48 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateOfExcellence;