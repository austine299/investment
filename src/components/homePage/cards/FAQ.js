import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Asset management Investment?",
    answer:
      "Asset management investment refers to managing clients’ investments by professional firms for optimized returns.",
  },
  {
    question: "Why You Should Invest in Here?",
    answer:
      "We provide secure, diversified investment opportunities with proven ROI and transparent policies.",
  },
  {
    question: "How to Invest?",
    answer:
      "Sign up, complete verification, choose an investment plan, and fund your account to get started.",
  },
  {
    question: "What is ROI?",
    answer:
      "ROI stands for Return on Investment – a measure of the profitability of your investment.",
  },
  {
    question: "What are the Security Features?",
    answer:
      "We use 256-bit SSL encryption, 2FA, and regular audits to protect your data and funds.",
  },
  {
    question: "Our Return Policy",
    answer:
      "You can withdraw returns based on the plan you choose. Policies vary by investment tier.",
  },
  {
    question: "Our Coverage Area",
    answer:
      "We currently serve clients across North America, Europe, and selected regions globally.",
  },
  {
    question: "How to Invest?",
    answer:
      "Sign up, complete verification, choose an investment plan, and fund your account to get started.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full px-6 md:px-20 py-10 text-center">
      <h2 className="flex gap-1 justify-center text-green-600 font-medium mb-2"><img src="./images/flower.svg" /> Faq <img src="./images/flower.svg" /></h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Common Question About Us
      </h1>
      <p className="w-full md:w-[520px] mx-auto text-gray-500 mb-8">
        Find answers to frequently asked questions about our investment plans,
        security, withdrawals, and more.
      </p>

      <div className="flex flex-wrap w-full gap-4 text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border w-[49%] border-gray-200 rounded-lg bg-gray-50 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 font-bold text-lg md:text-xl text-left text-black"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Always render answer, just hide/show with styles */}
            <div
              id={`faq-answer-${index}`}
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[300px] py-3" : "max-h-0 py-0"
              }`}
            >
              <p
                className={`text-gray-600 text-base leading-relaxed transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
