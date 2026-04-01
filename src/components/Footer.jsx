import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1120] text-gray-400 px-6 md:px-16 font-sans pt-30 pb-10">
      <div className="max-w-7xl mx-auto">

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

         
          <div>
            <h2 className="text-white text-4xl font-bold mb-6">DigiTools</h2>
            <p className="text-[17px]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 text-[20px]">Product</h3>
            <ul className="space-y-4 text-[17px]">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-6 text-[20px]">Company</h3>
            <ul className="space-y-4 text-[17px]">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 text-[20px]">Resources</h3>
            <ul className="space-y-4 text-[17px]">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-6 text-[20px]">Social Links</h3>
            <div className="flex gap-4">
             
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
             
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                <i className="fa-brands fa-facebook-f text-lg"></i>

              </a>
              
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>

        </div>

       
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className='text-[17px]'>© {currentYear} Digitools. All rights reserved.</p>
          <div className="text-[17px] flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;