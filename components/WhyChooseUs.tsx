import React, { useState } from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import AnimatedSection from './AnimatedSection';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';


interface StatItemProps {
  target: number;
  label: string;
  isK: boolean;
  startAnimation: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ target, label, isK, startAnimation }) => {
  const animatedValue = useCounterAnimation(target, 2000, startAnimation, isK);
  const suffix = isK ? 'K+' : (label.includes('YEARS') ? '+' : '');
  const finalDisplay = isK ? (animatedValue === (target / 1000).toString() ? target / 1000 : animatedValue) : animatedValue;

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="flex items-start justify-center">
        <span className="font-serif font-extrabold text-5xl md:text-6xl text-gray-800 tracking-tighter">
          {finalDisplay}
        </span>
        {isK && <span className="font-serif font-extrabold text-5xl md:text-6xl text-gray-800 tracking-tighter">K+</span>}
        {!isK && suffix && <span className="font-serif font-extrabold text-5xl md:text-6xl text-brand tracking-tighter ml-1">{suffix}</span>}
      </div>
      <p className="font-sans text-sm tracking-widest uppercase mt-1 text-gray-700">
        {label}
      </p>
    </div>
  );
};

// --- Icon Components ---
const AcademicCapIcon = () => (
    <svg className="w-6 h-6 mr-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
    </svg>
);
const HeartIcon = () => (
    <svg className="w-6 h-6 mr-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);
const SparklesIcon = () => (
    <svg className="w-6 h-6 mr-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
    </svg>
);
const UsersIcon = () => (
    <svg className="w-6 h-6 mr-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


interface FeatureItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, content, icon, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 px-2 text-left transition-colors duration-300 hover:bg-brand/5"
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon}
        <h4 className="font-serif font-bold text-lg text-gray-800">{title}</h4>
      </div>
      <svg
        className={`w-5 h-5 ml-4 text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
      <p className="font-sans text-gray-600 pl-12 pr-4 pb-4 text-base">{content}</p>
    </div>
  </div>
);

const features = [
    { title: "Experienced & Skilled Dentist", content: "Dr. Sumeet Jain (BDS, MDS, Implantologist, Prosthodontics – Crown & Bridge) leads our clinic with over 23 years of expertise in restorative, cosmetic, and implant dentistry, ensuring world-class outcomes.", icon: <AcademicCapIcon /> },
    { title: "Painless & Comfortable Treatments", content: "We utilize cutting-edge techniques and advanced anesthesia protocols to guarantee a completely pain-free and stress-free experience, prioritizing your comfort at every step.", icon: <HeartIcon /> },
    { title: "Advanced Technology & Equipment", content: "Our clinic is outfitted with the latest state-of-the-art dental technology, including digital X-rays and intraoral cameras, ensuring precise diagnosis, safety, and long-lasting results.", icon: <SparklesIcon /> },
    { title: "Personalized Dental Care", content: "Every patient receives a unique, customized treatment plan based on their specific dental history and needs, ensuring the best possible outcome for a healthy, beautiful smile.", icon: <UsersIcon /> },
];

const WhyChooseUs: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const handleToggle = (index: number) => setOpenItem(openItem === index ? null : index);
  const [statsRef, statsStyle, statsVisible] = useIntersectionAnimation('translateY(20px)');

  return (
    <section id="why-us" className="py-16 md:py-24 bg-off-beige">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
            <div className="text-center mb-16">
                <span className="text-gray-600 font-semibold text-lg">Why Choose Us?</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight font-serif">
                    At Dr. Sumeet Jain's Dental Clinic
                </h2>
                <p className="font-sans text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
                    We are dedicated to providing the best dental care, blending specialized expertise with a personalized, comfortable approach for every patient.
                </p>
            </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={statsRef} style={statsStyle}>
            <div className="p-8 lg:p-12 bg-white rounded-2xl shadow-xl h-fit border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatItem target={23} label="YEARS OF EXPERIENCE" isK={false} startAnimation={statsVisible} />
                <StatItem target={20000} label="DENTAL SURGERIES" isK={true} startAnimation={statsVisible} />
                <StatItem target={19000} label="HAPPY CUSTOMERS" isK={true} startAnimation={statsVisible} />
              </div>
            </div>
          </div>
          
          <AnimatedSection animation="fade-left">
            <div className="p-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100">
                {features.map((item, index) => (
                  <FeatureItem key={index} {...item} isOpen={openItem === index} onClick={() => handleToggle(index)} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;