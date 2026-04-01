import React from 'react';

const CTASection = () => {
  return (
    <section className="text-[#FFFFFF] w-full py-30 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center">
      <div className="max-w-4xl mx-auto">
   
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
       
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <button className="px-8 py-4 bg-white text-[#7c3aed] font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg w-full sm:w-auto">
            Explore Products
          </button>
          <button className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto">
            View Pricing
          </button>
        </div>

       
        <p className="text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;