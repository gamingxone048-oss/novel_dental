import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { servicesData, Service } from '../constants';

interface ServiceCardProps {
  service: Service;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  const [ref, style] = useIntersectionAnimation('translateY(30px)');
  
  const cardStyle = {
    ...style,
    transform: style.transform?.includes('translateY(0)') 
      ? 'translateY(0) scale(1)' 
      : 'translateY(30px) scale(0.95)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    transitionDelay: `${delay}s`,
  };

  return (
    <div ref={ref} style={cardStyle}>
      <a href="#services" className="block h-full group">
        <div className="bg-white p-8 h-full rounded-xl shadow-lg flex flex-col justify-between border-b-4 border-brand group-hover:border-brand-dark transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div>
            <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-brand/30">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-brand group-hover:text-brand-dark transition-colors duration-300">
                <path d={service.icon} />
              </svg>
            </div>
            
            <h4 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.name}</h4>
            <p className="text-gray-600">{service.detail}</p>
          </div>
          
          <div className="mt-4 pt-2">
            <div className="text-brand font-semibold flex items-center space-x-1">
              <span>Read More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const OurServices: React.FC = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-off-beige">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="md:flex md:justify-between md:items-end mb-12 md:mb-16">
          <AnimatedSection animation="fade-right">
            <span className="text-gray-600 font-semibold text-lg">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-tight font-serif">
              Comprehensive Dental Care for a Healthy & Beautiful Smile
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={0.2} className="mt-6 md:mt-0 flex-shrink-0">
            <a href="#services" className="inline-block bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-lg transform hover:scale-105">
              See All Services
            </a>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.name} service={service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;