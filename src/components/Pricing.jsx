const Pricing = () => {
  return (
    <div className="py-12 mb-18">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className='text-center'>
          <h2 className="text-[48px] font-extrabold">Simple, Transparent Pricing</h2>
          <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] px-4 mt-8">

          <div className="card bg-[#F2F2F2] rounded-3xl border-gray-500 p-6">
            <h3 className="text-[24px] font-bold">Starter</h3>
            <p className='text-[#627382] my-4'>Perfect for getting started</p>
            <p className='mb-4'><span className="font-bold text-[40px]">$0</span>/Month</p>
            <ul className='text-[#627382] flex-1 space-y-1'>
              <li><span className='text-[#30B868]'>✔</span>  Access to 10 free tools</li>
              <li><span className='text-[#30B868]'>✔</span>  Basic templates</li>
              <li><span className='text-[#30B868]'>✔</span>  Community support</li>
              <li><span className='text-[#30B868]'>✔</span>  1 project per month</li>
            </ul>
            <button className="btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 mt-4">Get Started Free</button>
          </div>

          <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 text-white rounded-3xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                  badge badge-warning px-4 py-4 rounded-full text-sm md:text-base">
              Most Popular
            </div>
            <h3 className="text-[24px] font-bold">Pro</h3>
            <p className='my-4'>Best for professionals</p>
            <p className='mb-4'><span className="font-bold text-[40px]">$29</span>/Month</p>
            <ul className='flex-1 space-y-1'>
              <li><span className='text-[#30B868]'>✔</span>  Access to all premium tools</li>
              <li><span className='text-[#30B868]'>✔</span>  Unlimited templates</li>
              <li><span className='text-[#30B868]'>✔</span>  Priority support</li>
              <li><span className='text-[#30B868]'>✔</span>  Unlimited projects</li>
              <li><span className='text-[#30B868]'>✔</span>  Cloud sync</li>
              <li><span className='text-[#30B868]'>✔</span>  Advanced analytics</li>
            </ul>
            <button className="btn btn-primary rounded-full px-4 py-6 font-bold mt-4 bg-white text-[#9514FA]">Start Pro Trial</button>
          </div>

          <div className="card bg-[#F2F2F2] p-6 rounded-3xl">
            <h3 className="text-[24px] font-bold">Enterprise</h3>
            <p className='text-[#627382] my-4'>For teams and businesses</p>
            <p className='mb-4'><span className="font-bold text-[40px]">$99</span>/month</p>
            <ul className='text-[#627382] flex-1 space-y-1'>
              <li><span className='text-[#30B868]'>✔</span>  Everything in Pro</li>
              <li><span className='text-[#30B868]'>✔</span>  Team collaboration</li>
              <li><span className='text-[#30B868]'>✔</span>  Custom integrations</li>
              <li><span className='text-[#30B868]'>✔</span>  Dedicated support</li>
              <li><span className='text-[#30B868]'>✔</span>  SLA guarantee</li>
              <li><span className='text-[#30B868]'>✔</span>  Custom branding</li>
            </ul>
            <button className="btn font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 mt-4">Contact Sales</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;