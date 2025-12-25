import React from 'react';
import { Product } from '../types';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  showViewDetails?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showViewDetails = false }) => {
  const navigate = useNavigate();
  // Get base variant (usually the first one)
  const baseVariant = product.variants[0];

  const discount = Math.round(((baseVariant.originalPrice - baseVariant.price) / baseVariant.originalPrice) * 100);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent double navigation if button is clicked (though button is inside div, so it bubbles)
    // Actually letting it bubble is fine, but we can be explicit
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col gap-4 border border-gray-100 relative group rounded-sm h-full"
    >
      {/* Image Container */}
      <div className="w-full h-48 shrink-0 flex items-center justify-center p-2 relative">
         <img 
           src={product.images[0]} 
           alt={product.name} 
           className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
         />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="space-y-1">
          <h3 className="font-medium text-sm md:text-base text-[#212121] hover:text-[#2874F0] transition-colors leading-tight line-clamp-2 min-h-[2.5em]">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#388E3C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[3px]">
              {product.rating} <Star className="w-2.5 h-2.5 fill-white" />
            </div>
            <span className="text-[#878787] text-xs font-medium">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Specs List (Simplified for Grid) */}
          <div className="text-xs text-gray-500 mt-2 space-y-1 hidden md:block">
            <p className="truncate"><span className="text-black font-medium">{baseVariant.ram} RAM | {baseVariant.storage} ROM</span></p>
            <p className="truncate">{product.specs.display}</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-auto pt-2">
          <div className="flex flex-col items-start">
             <div className="text-lg font-bold text-[#212121]">
                ₹{baseVariant.price.toLocaleString('en-IN')}
             </div>
             <div className="flex items-center gap-2">
                <div className="text-[#878787] text-sm line-through">
                  ₹{baseVariant.originalPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[#388E3C] text-xs font-bold">
                  {discount}% off
                </div>
             </div>
          </div>
          <div className="hidden md:block mt-1 text-[10px] text-[#212121]">
             Free delivery
          </div>

          {/* View Details Button (Conditional) */}
          {showViewDetails && (
            <button className="w-full mt-3 bg-[#2874F0] text-white text-xs md:text-sm font-bold py-2 rounded-sm shadow-sm uppercase tracking-wide hover:bg-[#1C54B2] transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};