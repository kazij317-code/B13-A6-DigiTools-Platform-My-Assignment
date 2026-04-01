import myImage from '../assets/products/banner.png';
import myButton from '../assets/products/Group 5.png';

import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <div className="py-16">

      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

        
          <div className="text-center lg:text-left">
            <div className="flex">
              <button className="flex items-center gap-2 px-6 py-2 text-[#9514FA] bg-[#E1E7FF] font-bold rounded-full">

                <img
                  src={myButton}
                  alt="button"
                  className="w-5 h-5"
                />
                <span>New: AI-Powered Tools Available</span>
              </button>
            </div>

            <h1 className="text-[60px] md:text-[60px] font-bold leading-tight mt-3">
              Supercharge Your Digital Workflow
            </h1>

            <p className="py-4 text-gray-600 text-[18px] mb-3">
              Access premium AI tools, design assets, templates, and productivity
              <br/>software—all in one place. Start creating faster today.

              <br/>Explore Products
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-6">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-full py-6">
                <Play />Watch Demo
              </button>

            </div>
          </div>

         
          <div className="flex justify-center">
            <img
              src={myImage}
              alt="Banner"
              className="w-[500px] h-[590px] max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;