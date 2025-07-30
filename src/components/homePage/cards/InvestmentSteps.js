import React from "react";

const steps = [
  {
    id: "01",
    title: "Sign Up Account",
    description: "Create an account to start your investment journey with us.",
    image: "/images/invest1.png",
  },
  {
    id: "02",
    title: "Deposit Funds",
    description: "Easily deposit funds to begin your investment process.",
    image: "/images/invest2.png",
  },
  {
    id: "03",
    title: "Choose a Plan",
    description: "Select the perfect investment plan for your financial goals.",
    image: "/images/invest3.png",
  },
  {
    id: "04",
    title: "Tracking ROI & Withdraw",
    description: "Track returns and withdraw earnings effortlessly.",
    image: "/images/invest4.png",
  },
];

const InvestmentSteps = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-16 ">
        <div className="flex justify-center">
          {" "}
          <img src="./images/flower.svg" />
          <span className="font-semibold">How to Work </span>
          <img src="./images/flower.svg" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How to Invest Here
        </h2>
        <p className="w-[520px] text-lg text-gray-600">
          Learn the step-by-step process to start investing and grow your wealth
          with our platform.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-[40px] pt-10 px-4 pb-6 shadow-md flex flex-col items-center text-center relative transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Image with badge */}
            <div className="w-36 h-36 rounded-full bg-green-50 flex items-center justify-center relative">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-5 left-5 bg-green-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow">
                {step.id}
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="mt-16 text-center">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
          Get Started Today
        </button>
      </div> */}
    </div>
  );
};

export default InvestmentSteps;
