import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Menu, X, Smartphone, Zap, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof MOCK_PRODUCTS>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const filtered = MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(true);

      // If user starts typing a search query on the home page, redirect to mobiles listing
      // so they can see results immediately in the background as well.
      if (location.pathname === '/') {
         navigate('/mobiles');
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (id: string) => {
    navigate(`/product/${id}`);
    setShowSuggestions(false);
    setSearchQuery('');
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className="bg-[#2874F0] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <button className="md:hidden" onClick={toggleSidebar}>
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex flex-col items-start leading-none group cursor-pointer" onClick={() => setSearchQuery('')}>
              <span className="font-bold italic text-lg md:text-xl tracking-wide">Buy Xtra</span>
              <span className="text-[10px] md:text-xs italic text-gray-200 flex items-center hover:underline">
                Explore <span className="text-[#FFE11B] font-bold ml-1">Plus</span>
                <span className="ml-1 text-[#FFE11B]">+</span>
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full h-9 md:h-10 px-4 pr-10 rounded-sm text-[#212121] outline-none shadow-sm text-sm md:text-base"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2874F0] w-5 h-5 cursor-pointer" />
            </div>

            {/* Autocomplete Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-sm border-t border-gray-100 z-[60] max-h-[400px] overflow-y-auto mt-1">
                {suggestions.map(product => (
                  <div 
                    key={product.id}
                    onClick={() => handleSuggestionClick(product.id)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 p-1 border border-gray-100 rounded bg-white">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#212121] truncate">{product.name}</p>
                      <p className="text-xs text-[#878787] truncate">in {product.category}s</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm font-bold text-[#212121]">
                        ₹{product.variants[0].price.toLocaleString()}
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base whitespace-nowrap">
             <Link to="/mobiles" className="cursor-pointer hover:text-gray-100 font-bold flex items-center gap-2">
               <Smartphone className="w-4 h-4" />
               <span>Mobiles</span>
             </Link>
             <Link to="/electronics" className="cursor-pointer hover:text-gray-100 font-bold flex items-center gap-2">
               <Zap className="w-4 h-4" />
               <span>Electronics</span>
             </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* Spacing */}
          </div>
        </div>
      </nav>

      {/* Mobile Category Bar (Below Navbar) */}
      <div className="md:hidden bg-white shadow-sm border-b border-gray-100 sticky top-16 z-40">
        <div className="flex justify-around items-center p-2">
           <Link to="/mobiles" className="flex flex-col items-center gap-1 p-2 text-[#212121] active:text-[#2874F0] flex-1">
              <div className="bg-blue-50 p-2 rounded-full">
                <Smartphone className="w-5 h-5 text-[#2874F0]" />
              </div>
              <span className="text-xs font-medium">Mobiles</span>
           </Link>
           <div className="w-[1px] h-8 bg-gray-200"></div>
           <Link to="/electronics" className="flex flex-col items-center gap-1 p-2 text-[#212121] active:text-[#2874F0] flex-1">
              <div className="bg-blue-50 p-2 rounded-full">
                <Zap className="w-5 h-5 text-[#2874F0]" />
              </div>
              <span className="text-xs font-medium">Electronics</span>
           </Link>
        </div>
      </div>

      {/* Side Navigation Drawer (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[70] flex md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleSidebar}></div>
          
          {/* Drawer */}
          <div className="relative w-[75%] max-w-xs bg-white h-full shadow-xl flex flex-col animate-in slide-in-from-left duration-300">
             <div className="bg-[#2874F0] p-4 text-white flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={toggleSidebar}>
                   <X className="w-6 h-6" />
                </button>
             </div>
             
             <div className="flex-1 overflow-y-auto">
                <div 
                   onClick={() => handleNavClick('/mobiles')}
                   className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 active:bg-blue-50 cursor-pointer text-[#212121]"
                >
                   <Smartphone className="w-5 h-5 text-[#2874F0]" />
                   <span className="font-medium">Mobiles</span>
                </div>
                <div 
                   onClick={() => handleNavClick('/electronics')}
                   className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 active:bg-blue-50 cursor-pointer text-[#212121]"
                >
                   <Zap className="w-5 h-5 text-[#2874F0]" />
                   <span className="font-medium">Electronics</span>
                </div>
             </div>

             <div className="p-4 border-t border-gray-100 text-xs text-gray-500 text-center">
                v1.0.0
             </div>
          </div>
        </div>
      )}
    </>
  );
};