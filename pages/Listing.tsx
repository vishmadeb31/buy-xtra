import React, { useMemo, useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS, BRANDS } from '../constants';
import { ChevronDown } from 'lucide-react';

interface ListingProps {
  searchQuery: string;
  category?: 'mobile' | 'electronics';
}

export const Listing: React.FC<ListingProps> = ({ searchQuery, category = 'mobile' }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200000);
  const [sortBy, setSortBy] = useState<'popularity' | 'price_asc' | 'price_desc'>('popularity');
  
  // Clear filters when category changes
  useEffect(() => {
    setSelectedBrands([]);
    setMaxPrice(200000);
    setSortBy('popularity');
  }, [category]);

  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS.filter(p => p.category === category);

    // Search Filter (Real-time)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q)
      );
    }

    // Brand Filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    // Price Filter (0 to maxPrice)
    result = result.filter(p => {
       const price = p.variants[0].price;
       return price <= maxPrice;
    });

    // Sorting
    if (sortBy === 'price_asc') {
      result.sort((a, b) => a.variants[0].price - b.variants[0].price);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.variants[0].price - a.variants[0].price);
    } else {
      // Popularity (using reviewCount as proxy)
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [searchQuery, selectedBrands, maxPrice, sortBy, category]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Get available brands for current category
  const availableBrands = useMemo(() => {
     const productsInCategory = MOCK_PRODUCTS.filter(p => p.category === category);
     return Array.from(new Set(productsInCategory.map(p => p.brand)));
  }, [category]);

  // Calculate percentages for slider track
  const MAX_VAL = 200000;
  const maxPercent = (maxPrice / MAX_VAL) * 100;

  return (
    <div className="container mx-auto px-2 md:px-4 py-4 flex flex-col md:flex-row gap-4 max-w-[1600px]">
      
      {/* Sidebar Filters */}
      <div className="w-full md:w-64 bg-white shadow-sm self-start shrink-0">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-[#212121]">Filters</h2>
        </div>
        
        {/* Price Range Slider */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-semibold text-[#212121] uppercase">Max Price</span>
            <button 
              className="text-[#2874F0] text-xs font-bold uppercase"
              onClick={() => { setMaxPrice(200000); }}
            >
              Clear
            </button>
          </div>
          
          <div className="px-2">
             {/* Single Range Slider */}
             <div className="relative h-10 mb-2">
                <input 
                  type="range" 
                  min="0" 
                  max="200000" 
                  step="1000"
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="absolute w-full pointer-events-auto z-20 h-1 bg-transparent appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2874F0] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md"
                />
                
                {/* Track Background (Gray) */}
                <div className="absolute w-full h-1 bg-gray-200 rounded top-0 bottom-0 m-auto z-0"></div>
                
                {/* Active Range Track (Blue) */}
                <div 
                  className="absolute h-1 bg-[#2874F0] rounded top-0 bottom-0 m-auto z-10 pointer-events-none transition-all duration-75"
                  style={{ left: '0%', width: `${maxPercent}%` }}
                ></div>
             </div>
             
             <div className="flex justify-between text-xs text-gray-600 font-medium mt-2">
                <span>Min</span>
                <span>₹{maxPrice.toLocaleString()}</span>
             </div>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="p-4 border-b">
           <div className="flex justify-between items-center mb-2 cursor-pointer">
            <span className="text-xs font-semibold text-[#212121] uppercase">Brand</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2 mt-2 max-h-60 overflow-y-auto">
            {availableBrands.map(brand => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-400 text-[#2874F0] focus:ring-[#2874F0]"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <span className="text-[#212121] text-sm group-hover:font-medium transition-all">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white shadow-sm min-h-[80vh]">
        
        {/* Sort Bar */}
        <div className="border-b px-4 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-bold text-[#212121] capitalize">{category}s</span>
          <span className="text-sm text-[#878787] hidden md:inline">
            (Showing {filteredProducts.length > 0 ? 1 : 0} – {filteredProducts.length} products of {filteredProducts.length} products)
          </span>
          
          <div className="flex items-center gap-4 ml-0 md:ml-auto text-sm overflow-x-auto pb-2 md:pb-0">
             <span className="font-bold text-[#212121] whitespace-nowrap">Sort By</span>
             <button 
               className={`font-medium whitespace-nowrap ${sortBy === 'popularity' ? 'text-[#2874F0] border-b-2 border-[#2874F0]' : 'text-[#212121]'}`}
               onClick={() => setSortBy('popularity')}
             >
               Popularity
             </button>
             <button 
               className={`font-medium whitespace-nowrap ${sortBy === 'price_asc' ? 'text-[#2874F0] border-b-2 border-[#2874F0]' : 'text-[#212121]'}`}
               onClick={() => setSortBy('price_asc')}
             >
               Price -- Low to High
             </button>
             <button 
               className={`font-medium whitespace-nowrap ${sortBy === 'price_desc' ? 'text-[#2874F0] border-b-2 border-[#2874F0]' : 'text-[#212121]'}`}
               onClick={() => setSortBy('price_desc')}
             >
               Price -- High to Low
             </button>
          </div>
        </div>

        {/* Product Grid - 3 Columns on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-gray-100">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="border-b border-r border-gray-100">
                <ProductCard product={product} showViewDetails={true} />
              </div>
            ))
          ) : (
            <div className="p-10 text-center text-gray-500 col-span-full">
               <h3 className="text-lg font-medium">No products found</h3>
               <p>Try clearing your filters or changing the category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};