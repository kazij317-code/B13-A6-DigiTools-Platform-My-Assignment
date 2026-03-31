import cartImage from '../assets/products/shopping-cart.png';
import React, { useState } from "react";

const Navbar = ({ cartCount, setView }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          
         
          <h1 className="font-bold text-2xl md:text-4xl text-[#9514FA] cursor-pointer" onClick={() => setView("products")}>
            <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-gray-700">
            <li><a href="#" className="hover:text-[#9514FA] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#9514FA] transition">Features</a></li>
            <li><a href="#" className="hover:text-[#9514FA] transition">Pricing</a></li>
            <li><a href="#" className="hover:text-[#9514FA] transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#9514FA] transition">FAQ</a></li>
          </ul>

         
          <div className="hidden md:flex items-center gap-6">
            
            <button 
              onClick={() => setView("cart")} 
              className="relative p-2 transition-transform hover:scale-110"
            >
              <img src={cartImage} alt="Cart" className="w-8 h-8 object-contain" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="font-semibold text-gray-700 hover:text-[#9514FA]" onClick={() => setView("products")}>Login</button>
            <button
              className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-2 rounded-full font-bold hover:bg-[#7a0fcc] transition shadow-md"
              onClick={() => setView("products")}
            >
              Get Started
            </button>
          </div>

        
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

       
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-6 border-t pt-4">
            <ul className="flex flex-col gap-4 font-semibold text-gray-700">
              <li><a href="#">Products</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
             
              <button onClick={() => setView("cart")} className="relative">
                <img src={cartImage} alt="Cart" className="w-10 h-10" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <div className="flex gap-3">
                <button className="font-bold text-gray-700" onClick={() => setView("products")}>Login</button>
                <button
                  className="bg-[#9514FA] px-4 py-2 text-white rounded-full text-sm font-bold"
                  onClick={() => setView("products")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;