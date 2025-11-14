import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqData = [
  {
    question: "Q.1. Where is Novel Dental N Implant Clinic located?",
    answer: "Novel Dental N Implant Clinic is located in UG-6, Morya Centre, 16, RS Bhandari Marg, opp. Basket Ball Complex, Near Janjeerwala Square, New Palasia, Indore, Madhya Pradesh 452001."
  },
  {
    question: "Q.2. What is the Contact Number of Novel Dental N Implant Clinic?",
    answer: "The Contact Number of Novel Dental N Implant Clinic is 09826054001."
  },
  {
    question: "Q.3. What are the timings of Novel Dental N Implant Clinic?",
    answer: "To know the hospital timing please contact on above mentioned phone number."
  },
  {
    question: "Q.4. Is Novel Dental N Implant Clinic open on weekends?",
    answer: "Yes, Novel Dental N Implant Clinic is open on weekends. However, it's advisable to check with the hospital for specific weekend hours."
  },
  {
    question: "Q.5. How can I schedule an appointment at Novel Dental N Implant Clinic?",
    answer: "You can schedule an appointment by calling on a given number."
  },
  {
    question: "Q.6. What should I bring to my appointment?",
    answer: "Please bring any relevant medical records and test reports."
  },
  {
    question: "Q.7. Do I need a referral to see a doctor at Hospital?",
    answer: "No, you do not need a referral to see a doctor at Novel Dental N Implant Clinic. You can directly visit or schedule an appointment."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-5 px-2 text-left transition-colors duration-300 hover:bg-brand/5"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <h4 className="font-serif font-bold text-lg text-gray-800">{question}</h4>
      <svg
        className={`w-5 h-5 ml-4 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <p className={`font-sans text-gray-600 pl-2 pr-4 text-base transition-all duration-300 ${isOpen ? 'pb-5 pt-2' : 'py-0'}`}>{answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const handleToggle = (index: number) => setOpenItem(openItem === index ? null : index);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

        <AnimatedSection animation="fade-right" className="lg:col-span-1">
          <span className="text-gray-600 font-semibold text-lg">F.A.Q</span>
          <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-gray-800 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-gray-700 text-lg mt-4">
            Find quick answers to common questions about our clinic, appointments, and services. For more specific inquiries, please contact us directly.
          </p>
           <a href="#contact" 
              className="inline-block mt-8 bg-brand text-white px-8 py-4 rounded-full font-semibold 
                          hover:bg-brand-dark transition-all duration-200 shadow-lg text-lg transform hover:scale-105">
              Contact Us
            </a>
        </AnimatedSection>

        <div className="lg:col-span-2">
           <AnimatedSection animation="fade-up" delay={0.2}>
             <div className="bg-white rounded-lg shadow-lg border border-gray-100">
                {faqData.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItem === index}
                    onClick={() => handleToggle(index)}
                  />
                ))}
              </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;