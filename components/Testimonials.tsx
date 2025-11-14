import React from 'react';

const reviews = [
  { name: "Raghav", link: "#", review: "The clinic is spotless, modern, and equipped with the latest technology. Dr. Jain is incredibly knowledgeable and takes the time to explain everything clearly. My treatment was quick, painless, and the results were amazing.", rating: 5 },
  { name: "Raghvendra B.", link: "#", review: "An excellent experience. Dr. Jain explained the treatment in detail and made sure I was comfortable throughout. The clinic is well-maintained, and the results exceeded my expectations. Highly recommend for quality dental care.", rating: 5 },
  { name: "Ananya V.", link: "#", review: "I have been visiting Dr. Jain since I was a teenager. I recently got my root canal done and an inlay for another. Both experiences were great & seamless. Thank you to the team for their care & treatment.", rating: 5 },
  { name: "Ojaswini Tiwari", link: "#", review: "I recently got a root canal done here, and I couldn’t believe how smooth the entire experience was. From start to finish, it was incredibly comfortable and almost completely painless. If you’re anxious, this is the place to go.", rating: 5 },
  { name: "Preeti", link: "#", review: "Best Dental clinic in Indore. Dr. Sumeet and Dr. Parul Jain are both excellent doctors- experts and very experienced. They are very gentle, kind and caring. My family dental clinic! I highly recommend them.", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-0.5">
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor" viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.243.588 1.81l-2.817 2.046a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.046a1 1 0 00-1.175 0l-2.817 2.046c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<typeof reviews[0]> = ({ name, link, review, rating }) => (
  <div className="w-80 flex-shrink-0 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-shadow duration-300 hover:shadow-xl h-[320px] flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-serif font-bold text-lg text-gray-900">{name}</h4>
        <StarRating rating={rating} />
      </div>
      <p className="font-sans text-gray-700 text-sm italic line-clamp-6">"{review}"</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-semibold text-brand hover:text-brand-dark transition-colors duration-200 flex items-center mt-auto">
      View on Google
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-2L14 6m0 0l-4 4m4-4V6"></path></svg>
    </a>
  </div>
);

const Testimonials: React.FC = () => {
  const allReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-off-beige">
      <div className="max-w-6xl mx-auto mb-12 px-4">
        <span className="text-gray-600 font-semibold text-lg">Testimonials</span>
        <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-gray-800 mt-2">
          What Our Patients Say
        </h2>
        <p className="font-sans text-gray-600 text-lg mt-4">
          Genuine feedback from satisfied smiles.
        </p>
      </div>

      <div className="scroll-container overflow-hidden relative w-full">
        <div className="scroll-content flex" style={{ animation: 'scroll 60s linear infinite' }}>
          {allReviews.map((review, index) => (
            <div key={index} className="px-3">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .scroll-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .scroll-content {
            display: flex;
            width: calc(344px * ${allReviews.length}); /* (w-80 + px-3*2) */
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
