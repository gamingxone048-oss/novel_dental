import React, { useState, useEffect } from 'react';

interface LinkButtonProps {
  name: string;
  href: string;
  isScrolled: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, href, isScrolled }) => {
  return (
    <a
      href={href}
      className="relative group overflow-hidden transition-all duration-300 rounded-full text-base font-semibold"
    >
      <div className={`absolute inset-0 rounded-full transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 ${isScrolled ? 'bg-brand/20' : 'bg-white/20'}`} />
      <div className={`relative px-3 py-1.5 transition-colors duration-300 ${isScrolled ? 'text-gray-700 group-hover:text-gray-900' : 'text-white group-hover:text-gray-900'}`}>
        {name}
      </div>
    </a>
  );
};


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 font-sans">
      <div
        className={`max-w-6xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-3 rounded-full' : 'py-4'}`}
        style={{ width: isScrolled ? 'calc(100% - 2rem)' : '100%' }}
      >
        {/* Logo */}
        <a href="#">
          <img 
            src="https://i.postimg.cc/YSgLXQv6/Whats-App-Image-2025-11-13-at-17-28-46-4315e56a.jpg" 
            alt="Novel Dental N Implant Clinic Logo" 
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <LinkButton key={link.name} name={link.name} href={link.href} isScrolled={isScrolled} />
          ))}

          {/* Main Action Button */}
          <a
            href="#contact"
            className={`flex items-center space-x-1.5 bg-brand text-white px-4 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:bg-brand-dark hover:scale-105 transform ${isScrolled ? 'text-base py-2 px-4' : 'text-base py-2.5 px-5'}`}
          >
            <div className="button-text">Schedule a consultation</div>
            <div className="w-4 h-4 text-white">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7071 2.56542L16.4142 1.85832L15 0.444102L14.2929 1.15121L15 1.85832L15.7071 2.56542ZM10.137 2.5686L11.1369 2.55958L11.1189 0.559665L10.1189 0.56868L10.1279 1.56864L10.137 2.5686ZM16.4309 6.88062L16.4399 5.88066L14.44 5.86263L14.431 6.86259L15.4309 6.87161L16.4309 6.88062ZM15 1.85832L14.2929 1.15121L0.150767 15.2933L0.857874 16.0005L1.56498 16.7076L15.7071 2.56542L15 1.85832ZM10.1279 1.56864L10.1189 0.56868L1.19935 0.649097L1.20837 1.64906L1.21738 2.64902L10.137 2.5686L10.1279 1.56864ZM15.4309 6.87161L14.431 6.86259L14.3505 15.7822L15.3505 15.7912L16.3505 15.8002L16.4309 6.88062L15.4309 6.87161Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-full ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
       {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 font-semibold rounded-md hover:bg-gray-100">
                {link.name}
              </a>
            ))}
             <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center mt-2 bg-brand text-white px-4 py-2 rounded-full font-semibold">
               Schedule a consultation
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;