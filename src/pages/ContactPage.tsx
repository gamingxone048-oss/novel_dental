import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">Contact Us</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We're here to help! Whether you have a question about our services or want to schedule an appointment, feel free to reach out.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <AnimatedSection animation="fade-right">
            <div className="bg-off-beige p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Send us a message</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-lg transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Right Side: Info & Map */}
          <AnimatedSection animation="fade-left" delay={0.2} className="space-y-8">
            <div className="bg-off-beige p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">Clinic Information</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Address:</strong> UG-6, Morya Centre, 16, RS Bhandari Marg, opp. Basket Ball Complex, Near Janjeerwala Square, New Palasia, Indore, Madhya Pradesh 452001</p>
                <p><strong>Phone:</strong> <a href="tel:09826054001" className="text-brand hover:underline">098260 54001</a></p>
                <p><strong>Email:</strong> <a href="mailto:contact@dentalic.com" className="text-brand hover:underline">contact@dentalic.com</a></p>
              </div>
              <div className="mt-6">
                 <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">Open Hours</h3>
                 <p className="text-gray-600"><span className="font-semibold text-gray-700">Mon - Sat:</span> 11:00 AM - 01:30 PM & 05:00 PM - 08:30 PM</p>
                 <p className="text-gray-600"><span className="font-semibold text-gray-700">Sun:</span> 12:30 PM - 02:00 PM</p>
              </div>
            </div>
            
            <div className="rounded-xl shadow-lg overflow-hidden border border-gray-100 h-80">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.991218525707!2d75.8856956752065!3d22.72886477937965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4114251413%3A0x8691f42a5882310!2sNovel%20Dental%20N%20Implant%20Clinic!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location Map"
                ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
