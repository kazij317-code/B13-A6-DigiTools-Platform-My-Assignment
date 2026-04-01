import React, { useState } from "react";


import writingIcon from "../assets/products/writing.png";
import designIcon from "../assets/products/design-tool.png";
import premiumIcon from "../assets/products/camera.png";
import automationIcon from "../assets/products/operation.png";
import resumeIcon from "../assets/products/portfolio.png";
import socialIcon from "../assets/products/social-media.png";


const icons = {
  writing: writingIcon,
  design: designIcon,
  premium: premiumIcon,
  automation: automationIcon,
  resume: resumeIcon,
  social: socialIcon,
};

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false); 

  const currentIcon = icons[product.icon];

  const handleClick = () => {
    addToCart({ ...product, iconImage: currentIcon });
    setAdded(true);
  };

  return (
    <div className="card border border-gray-300 rounded-3xl p-6 space-y-3 relative bg-white shadow-sm hover:shadow-md transition-shadow">
      
     
      <div className="w-14 h-14 p-3 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
        <img
          src={currentIcon}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      
      <h2 className="text-[24px] font-bold text-gray-800">
        {product.name}
      </h2>

     
      <p className="text-[#627382] text-sm leading-relaxed">
        {product.description}
      </p>

      
      <span className={`badge ${product.tagType} text-[14px] font-bold absolute top-2 right-4 px-3 py-2 rounded-full`}>
        {product.tag}
      </span>

      
      <p className="flex items-baseline gap-1">
        <span className="font-bold text-[24px] text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-500 text-sm">
          / {product.period}
        </span>
      </p>

      
      <ul className="text-sm">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-600">
            <span className="text-[#30B868] font-bold text-lg">✔</span> {f}
          </li>
        ))}
      </ul>

      
      <button
        onClick={handleClick}
        disabled={added}
        className={`w-full py-3 rounded-full font-bold transition-all active:scale-95 shadow-lg 
        ${
          added
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
        }`}
      >
        {added ? "Added to Cart ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;