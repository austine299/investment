import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    
  {
    name: "Brooklyn Simmons",
    title: "Chairman & CEO",
    image: "/images/investor1.png ", // Replace with your image path
    rating: 5,
    feedback:
      "Reliable and secure investment options! The ROI tracking feature makes it easy to monitor my earnings.",
  },
  {
    name: "Calista Sawyer",
    title: "Chairman & CEO",
    image: "/images/investor2.png ", // Replace with your image path
    rating: 5,
    feedback:
      "I love the transparent system and fast withdrawals. This platform truly helps grow my wealth effortlessly!",
  },
  {
    name: "Shelley Hendricks",
    title: "President of States",
    image: "/images/investor3.png", // Replace with your image path
    rating: 5,
    feedback:
      "Investing here has been a game-changer! Easy process, secure platform, and great returns on my investments.",
  },
];

const InvestorTestimonials = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20 text-center">
      <h3 className="flex justify-center gap-1 text-green-600 font-semibold text-sm mb-2"><img src="./images/flower.svg" />Feedback<img src="./images/flower.svg" /></h3>
      <h2 className="text-5xl font-bold mb-4">What Say Our Investor</h2>
      <p className="text-gray-600 w-[520px] mx-auto mb-10">
        Hear from our investors about their successful experiences and
        profitable investment journeys with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div className="relative mt-20 h-fit">
            <div
              key={index}
              className="bg-white rounded-full p-6   shadow-md relative flex flex-col items-center"
              style={{
                WebkitMaskImage: "url(/images/servicebg.png)",
                maskImage: "url(/images/servicebg.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "cover",
              }}
            >
              <h4 className="font-bold text-lg mt-4 px-4">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500 mb-2 px-4">
                {testimonial.title}
              </p>

              <div className="flex justify-center gap-2 text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>

              <p className="text-gray-700 text-xs  font-semibold px-16">
                {testimonial.feedback}
              </p>

              <FaQuoteLeft className="text-green-600 text-2xl mt-6" />
            </div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="absolute top-2 left-[35%] w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg -mt-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorTestimonials;
