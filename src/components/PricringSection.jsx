import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  useEffect(() => {
    // Simple observer for animations
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0f172a] text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .gradient-glow {
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.1) 0%, rgba(244, 114, 182, 0.1) 50%, rgba(251, 146, 60, 0.1) 100%);
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.3);
          position: relative;
          z-index: 1;
        }
        
        .gradient-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem; 
          padding: 1px; 
          background: linear-gradient(135deg, rgba(192, 132, 252, 0.4), rgba(244, 114, 182, 0.4), rgba(251, 146, 60, 0.4)); 
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude; 
          pointer-events: none;
          z-index: -1;
        }
        
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);
        }
        
        .btn-gradient {
          background: linear-gradient(90deg, #c084fc 0%, #f472b6 50%, #f59e0b 100%);
          background-size: 200% auto;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          background-position: right center;
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.6);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">Simple, flexible pricing for every type of content.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Reel Edit Card */}
          <div className="pricing-card bg-gray-900 rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02] relative fade-in delay-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Reel Edit</h3>
              <p className="text-xl font-medium mb-4">
                <span className="text-purple-300">₹499</span> – <span className="text-pink-300">₹1,299</span>
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mx-auto rounded-full mb-6"></div>
            </div>
            
            <ul className="space-y-3 mb-8 text-neutral-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Trendy editing style</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Smooth transitions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Instagram-ready</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Link to="/contact">
                <button className="btn-gradient text-white font-medium rounded-full px-6 py-3 w-full transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
          {/* Cinematic Video Card (Highlighted) */}
          <div className="pricing-card gradient-glow rounded-xl p-6 border border-transparent transition-all duration-300 hover:scale-[1.02] relative fade-in delay-2">
            <div className="absolute -top-3 -right-3">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-lg">POPULAR</span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Cinematic Video</h3>
              <p className="text-xl font-medium mb-4">
                <span className="text-purple-300">₹499</span> – <span className="text-pink-300">₹1,499</span>
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mx-auto rounded-full mb-6"></div>
            </div>
            
            <ul className="space-y-3 mb-8 text-neutral-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Aesthetic storytelling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Color grading + music</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Travel / events / cinematic reels</span>
              </li>
            </ul>
            
            <div className="text-center">
            <Link to="/contact">
                <button className="btn-gradient text-white font-medium rounded-full px-6 py-3 w-full transition-all duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          
          {/* Ad/Promo Card */}
          <div className="pricing-card bg-gray-900 rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02] relative fade-in delay-3">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Ad/Promo + YouTube</h3>
              <p className="text-xl font-medium mb-4">
                <span className="text-orange-300">₹599–₹1,499 (Ad)</span><br />
                <span className="text-orange-300">₹999–₹4,999 (YT)</span>
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mx-auto rounded-full mb-6"></div>
            </div>
            
            <ul className="space-y-3 mb-8 text-neutral-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Hook-based editing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Captions, pacing, B-roll</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Branding edits / thumbnails</span>
              </li>
            </ul>
            
            <div className="text-center">
            <Link to="/contact">
                <button className="btn-gradient text-white font-medium rounded-full px-6 py-3 w-full transition-all duration-300">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;