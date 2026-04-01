import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="w-full py-16 px-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
           
            <div className="text-center text-white flex-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-purple-100 text-lg opacity-90">
                {stat.label}
              </p>
            </div>

            
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 w-[1px] bg-white/30" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;