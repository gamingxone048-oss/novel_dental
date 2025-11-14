import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial route if none exists
    if (!route) {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [route]);

  const renderPage = () => {
    // Check for contact page first
    if (route.startsWith('#/contact')) {
        return <ContactPage />;
    }
    // Default to homepage for root or any other hash
    return <HomePage />;
  };

  const globalStyles = `
    html, body {
      scroll-behavior: smooth;
      background-color: #fdfbf5; /* off-beige */
    }
  `;

  return (
    <div className="min-h-screen bg-off-beige text-gray-800 font-sans flex flex-col">
      <style>{globalStyles}</style>
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
