import React from 'react';
import AnimatedSection from './AnimatedSection';

const ContactUsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0 mt-1 text-brand" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const OpenHoursIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0 mt-1 text-brand" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const ContactCard: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up">
      <div id="contact" className="relative z-10 max-w-6xl mx-auto py-8 px-4 -mt-24">
        <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Contact Us */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-start space-x-5">
              <ContactUsIcon />
              <div className="card-about-clinic-content">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Contact Us</h2>
                <a href="tel:09826054001" className="block text-lg text-gray-600 hover:text-brand transition-colors">098260 54001</a>
                <a href="mailto:contact@dentalic.com" className="block text-lg text-gray-600 hover:text-brand transition-colors">contact@dentalic.com</a>
                <a href="#contact" className="inline-block group mt-4">
                  <div className="font-semibold text-lg text-gray-800 hover:text-brand transition-colors">Book an appointment</div>
                  <div className="h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px md:h-auto md:w-px bg-gray-200"></div>

          {/* Open Hours */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-start space-x-5">
              <OpenHoursIcon />
              <div className="card-about-clinic-content">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Open Hours</h2>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700">Mon - Sat</span>
                </p>
                <p className="text-lg text-gray-600 pl-4">11:00 AM - 01:30 PM</p>
                <p className="text-lg text-gray-600 pl-4 mb-2">05:00 PM - 08:30 PM</p>
                
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-700">Sun</span>
                </p>
                <p className="text-lg text-gray-600 pl-4">12:30 PM - 02:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactCard;