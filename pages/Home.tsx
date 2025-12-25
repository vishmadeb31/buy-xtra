import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    title: "Big Sale is Live!",
    subtitle: "Get up to 40% off on top mobile brands.",
    ctaText: "Shop Mobiles",
    ctaLink: "/mobiles",
    bgClass: "bg-gradient-to-r from-blue-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800",
    accentColor: "#FFE11B",
    textColor: "#2874F0"
  },
  {
    id: 2,
    title: "iPhone 15 Series",
    subtitle: "Titanium. So strong. So light. So Pro.",
    ctaText: "Check Now",
    ctaLink: "/product/1",
    bgClass: "bg-gradient-to-r from-gray-900 to-gray-800",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    accentColor: "#FFFFFF",
    textColor: "#000000"
  },
  {
    id: 3,
    title: "Smart Home Fest",
    subtitle: "Upgrade your lifestyle with smart electronics.",
    ctaText: "Explore All",
    ctaLink: "/electronics",
    bgClass: "bg-gradient-to-r from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800",
    accentColor: "#FFE11B",
    textColor: "#047857"
  }
];

export const Home: React.FC = () => {
  // Take exactly 4 products for each section to match the 4-column layout request
  const featured = MOCK_PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  const bestSellers = MOCK_PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-8 bg-[#F1F3F6] min-h-screen">
      
      {/* Hero Carousel - Full Width */}
      <div className="w-full h-48 md:h-80 relative overflow-hidden shadow-sm bg-gray-100 group">
         
         {/* Slides */}
         {SLIDES.map((slide, index) => (
           <div 
             key={slide.id}
             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${slide.bgClass}`}
           >
             <div className="container mx-auto max-w-7xl h-full flex items-center px-6 md:px-12 relative">
                
                {/* Text Content */}
                <div className="w-2/3 md:w-1/2 text-white z-20 animate-in slide-in-from-bottom-5 duration-700 fade-in">
                   <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight drop-shadow-md">{slide.title}</h2>
                   <p className="text-sm md:text-xl mb-4 md:mb-8 opacity-90 drop-shadow-sm font-medium">{slide.subtitle}</p>
                   <Link 
                     to={slide.ctaLink} 
                     className="font-bold py-2 md:py-3 px-6 md:px-10 rounded-sm hover:shadow-lg inline-block transition-transform transform hover:-translate-y-1 text-sm md:text-base"
                     style={{ backgroundColor: slide.accentColor, color: slide.textColor }}
                   >
                     {slide.ctaText}
                   </Link>
                </div>

                {/* Image (Right Side) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-5/12 overflow-hidden hidden sm:block">
                   <div className="relative w-full h-full">
                      {/* Gradient Overlay for seamless blending */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent z-10`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-l ${slide.bgClass.split(' ')[1]} to-transparent w-1/3 z-10`}></div>
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-[20000ms]" 
                      />
                   </div>
                </div>

                {/* Abstract Decoration */}
                <div className="absolute right-10 top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute left-10 bottom-10 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>

             </div>
           </div>
         ))}

         {/* Indicators */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
         </div>
      </div>

      {/* Featured Section */}
      <div className="container mx-auto max-w-7xl mt-4 px-2 md:px-4">
        <div className="bg-white shadow-sm rounded-sm">
           <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg md:text-xl font-medium text-[#212121]">Featured Mobiles</h2>
              <Link to="/mobiles" className="bg-[#2874F0] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-sm shadow-sm hover:shadow-md flex items-center gap-1">
                 VIEW ALL <ChevronRight className="w-4 h-4" />
              </Link>
           </div>
           {/* Grid: 4 columns on large screens */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featured.map((p, idx) => (
                <div key={p.id} className={`${idx !== featured.length - 1 ? 'border-b md:border-b-0 border-r-0 md:border-r border-gray-100' : ''} ${idx % 2 === 0 ? 'border-r border-gray-100' : ''} lg:border-r`}>
                    <ProductCard product={p} showViewDetails={true} />
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="container mx-auto max-w-7xl mt-4 px-2 md:px-4">
        <div className="bg-white shadow-sm rounded-sm">
           <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg md:text-xl font-medium text-[#212121]">Best Sellers</h2>
              <Link to="/mobiles" className="bg-[#2874F0] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-sm shadow-sm hover:shadow-md flex items-center gap-1">
                 VIEW ALL <ChevronRight className="w-4 h-4" />
              </Link>
           </div>
           {/* Grid: 4 columns on large screens */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {bestSellers.map((p, idx) => (
                <div key={p.id} className={`${idx !== bestSellers.length - 1 ? 'border-b md:border-b-0 border-r-0 md:border-r border-gray-100' : ''} ${idx % 2 === 0 ? 'border-r border-gray-100' : ''} lg:border-r`}>
                    <ProductCard product={p} showViewDetails={true} />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};