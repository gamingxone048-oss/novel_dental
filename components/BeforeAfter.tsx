import React from 'react';
import AnimatedSection from './AnimatedSection';

interface BeforeAfterItemProps {
    title: string;
    beforeUrl: string;
    afterUrl: string;
}

const BeforeAfterItem: React.FC<BeforeAfterItemProps> = ({ title, beforeUrl, afterUrl }) => {
  const placeholder = (text: string, color: string) => `https://placehold.co/400x400/${color}/FFFFFF?text=${text.replace(' ', '+')}&font=lato`;

  const finalBeforeUrl = beforeUrl || placeholder('BEFORE', 'E84343');
  const finalAfterUrl = afterUrl || placeholder('AFTER', '4BA6A8');

  return (
    <div className="mb-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
      <h4 className="font-serif font-bold text-xl mb-4 text-center text-gray-800">{title}</h4>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-brand-red transition-transform duration-300 hover:scale-[1.02]">
          <img src={finalBeforeUrl} alt={`Before ${title}`} className="w-full h-auto object-cover aspect-square" />
          <span className="absolute bottom-0 right-0 bg-brand-red text-white font-sans text-xs px-3 py-1 rounded-tl-lg font-bold">
            Before
          </span>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg border-2 border-brand transition-transform duration-300 hover:scale-[1.02]">
          <img src={finalAfterUrl} alt={`After ${title}`} className="w-full h-auto object-cover aspect-square" />
          <span className="absolute bottom-0 right-0 bg-brand text-white font-sans text-xs px-3 py-1 rounded-tl-lg font-bold">
            After
          </span>
        </div>
      </div>
    </div>
  );
};

const galleryData = [
    {
        title: "1. Teeth Bleaching",
        beforeUrl: "https://i.postimg.cc/cJbg4TPc/678f4ef4cfa655bff54c4f6d-Mask-group-4.png",
        afterUrl: "https://i.postimg.cc/1Xc36KY3/678f52abdecba5641d7a58f3-Mask-group-5.png"
    },
    {
        title: "2. Braces Treatment",
        beforeUrl: "https://i.postimg.cc/vmVhy1Nc/678f5352cb1a245c9d031940-Mask-group-7.png",
        afterUrl: "https://i.postimg.cc/sfkVfbxJ/678f5343155f4d0ca2e5cc08-Mask-group-6.png"
    }
];

const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <AnimatedSection animation="fade-right" className="lg:col-span-1 lg:sticky lg:top-28 h-fit">
                <span className="text-gray-600 font-semibold text-lg">Visual Results</span>
                <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-gray-800 mt-2">
                    Before and After
                </h2>
                <p className="font-sans text-gray-700 text-lg mt-4">
                    From routine fixes to dramatic makeovers, our dental care is designed to restore confidence and enhance natural beauty.
                </p>
            </AnimatedSection>

            <div className="lg:col-span-2 space-y-8">
                {galleryData.map((item, index) => (
                    <AnimatedSection key={item.title} animation="fade-up" delay={index * 0.2}>
                        <BeforeAfterItem title={item.title} beforeUrl={item.beforeUrl} afterUrl={item.afterUrl} />
                    </AnimatedSection>
                ))}
            </div>
            </div>
      </div>
    </section>
  );
};

export default BeforeAfter;