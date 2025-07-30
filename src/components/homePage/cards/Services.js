import React from "react";

const services = [
  {
    title: "Property Management",
    description: "Efficient management for your real estate investments",
    icon: "🏠",
    image: "/images/serviec1.png ",
  },
  {
    title: "Money Management",
    description: "Smart solutions for growing and securing wealth",
    icon: "💰",
    image: "images/service2.png",
  },
  {
    title: "Gold Management",
    description: "Strategic gold investments for long-term financial growth",
    icon: "🏅",
    image: "/images/service3.png ",
  },
  {
    title: "Bank Account",
    description: "Secure and reliable banking solutions for your investments",
    icon: "🏦",
    image: "/images/service4.png ",
  },
  {
    title: "Debit Management",
    description: "Efficient solutions for debit transaction optimization",
    icon: "💳",
    image: "/images/service5.png ",
  },
  {
    title: "Farm Management",
    description: "Sustainable solutions for profitable farming",
    icon: "🌾",
    image: "/images/service6.png ",
  },
  {
    title: "Industry Management",
    description: "Optimizing industrial operations for growth",
    icon: "🏗️",
    image: "/images/service7.png ",
  },
  {
    title: "Bond Management",
    description: "Strategies for managing and growing bond investments",
    icon: "📈",
    image: "/images/service8.png ",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-green-600 font-semibold mb-2">Our Service</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Service We Provide
        </h2>
        <p className="w-[520px] text-gray-600 max-w-2xl mx-auto mb-12">
          Offering secure investment plans, asset management, and profitable
          wealth-building solutions for investors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white h-[300px] p-6 rounded-3xl shadow-md hover:scale-105 ease-in-out inset-0 transform skew-y-[8deg] hover:shadow-md transition duration-300 mt-20"
            >
              <div
                className="relative w-full h-fit -top-24  inset-0 skew-y-[-8deg]"
                style={{
                  WebkitMaskImage: "url(/images/servicebg.png)",
                  maskImage: "url(/images/servicebg.png)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
                
              </div>
              <div className="absolute  top-16 skew-y-[-8deg] left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xl p-2 rounded-md shadow">
                  {service.icon}
                </div>
              <div className="skew-y-[-8deg] relative -top-14 px-2">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-[18px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
