import React from 'react';

const HeroSection: React.FC = () => {
  // Replaced placeholder data with the user's provided images.
  const slides = [
    { id: 1, imageUrl: 'https://i.postimg.cc/QdPhFPxS/IMG-20251113-WA0062-1.jpg' },
    { id: 2, imageUrl: 'https://i.postimg.cc/k4Rcn2Y1/download.webp' },
    { id: 3, imageUrl: 'https://i.postimg.cc/yNkhPJKC/download.webp' },
    { id: 4, imageUrl: 'https://i.postimg.cc/W4BZwXSb/68a6ece0d25cca7b638324a2-cxcd.webp' },
  ];

  const totalSlides = slides.length;
  // This creates a track twice as wide as the number of slides for a seamless loop.
  const totalTrackWidth = totalSlides * 2; 

  const customStyles = `
    @keyframes infiniteScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalSlides * 100}vw); }
    }
    .slider-track {
        display: flex;
        width: ${totalTrackWidth * 100}vw;
        height: 100vh;
        animation: infiniteScroll 20s steps(${totalSlides}, end) infinite;
        will-change: transform;
    }
    .slide {
        width: 100vw; 
        height: 100vh;
        flex-shrink: 0; 
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .slide::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
  `;

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <style>{customStyles}</style>
      <div id="slider-container" className="relative w-full h-full">
        {/* We map over the slides twice to create the seamless loop effect */}
        <div className="slider-track">
          {[...slides, ...slides].map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                // Correctly use the imageUrl from the updated slides data.
                backgroundImage: `url('${slide.imageUrl}')`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 p-4">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl font-serif">
                    Your Smile, Our Passion
                  </h1>
                  <p className="text-xl md:text-2xl font-light max-w-2xl drop-shadow-lg">
                    Experience state-of-the-art dental care in a comfortable and friendly environment.
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;