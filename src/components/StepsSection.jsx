// import { UserPlus, Box, Rocket } from 'lucide-react';
import userIcon from "../assets/products/user.png";
import packageIcon from "../assets/products/package.png";
import rocketIcon from "../assets/products/rocket.png";


const StepsSection = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      // icon: <UserPlus size={50} />,
      icon: <img src={userIcon} alt="user" size={50} />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      // icon: <Box size={50} />,
      icon: <img src={packageIcon} alt="package" size={50} />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <img src={rocketIcon} alt="rocket" size={50} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#F1F1F1] mt-[100px] mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[48px] font-extrabold mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white border border-gray-100 rounded-2xl px-8 py-20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {/* Floating Number Badge */}
              <div className="absolute top-4 right-4 bg-[#7c3aed] text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-25 h-25 bg-purple-50 text-[#7c3aed] rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[24px] font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;