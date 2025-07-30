import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const topInvestors = [
  { rank: '1st', name: 'Test Name', investment: '$15,906.60 USD' },
  { rank: '2nd', name: 'Alex Gift', investment: '$10,100.00 USD' },
  { rank: '3rd', name: 'My Name', investment: '$3,000.00 USD' },
  { rank: '4th', name: 'Test test', investment: '$2,700.00 USD' },
  { rank: '5th', name: 'Umaru Yinusa', investment: '$1,900.00 USD' },
  { rank: '6th', name: 'Ifeoma Merrill', investment: '$1,200.00 USD' },
  { rank: '7th', name: 'Giselle Pollard', investment: '$600.00 USD' },
  { rank: '8th', name: 'Gemma Sweeney', investment: '$200.00 USD' },
  { rank: '9th', name: 'User55 Name55', investment: '$200.00 USD' },
  { rank: '10th', name: 'App Supports', investment: '$100.00 USD' },
];

const CARD_WIDTH = 280; // width including margin
const CARDS_VISIBLE = 4;

const TopInvestors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? topInvestors.length - CARDS_VISIBLE : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + CARDS_VISIBLE >= topInvestors.length
        ? 0
        : prev + 1
    );
  };

  const translateX = -currentIndex * CARD_WIDTH;

  return (
    <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="flex gap-1 text-green-600 font-semibold text-sm"><img src="./images/flower.svg" />Investor</h4>
            <h2 className="text-4xl font-bold mb-2">Our Top Investor</h2>
            <p className="text-gray-600 max-w-xl">
              Celebrating our top investors who have achieved exceptional returns
              and financial success with us.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${topInvestors.length * CARD_WIDTH}px`,
            }}
          >
            {topInvestors.map((investor, index) => (
              <div
                key={index}
                className="bg-gray-100 w-[263px] h-[200px] rounded-full p-8 shadow-md flex-shrink-0 mx-2 text-center"
                style={{
                  WebkitMaskImage: 'url(/images/servicebg.png)',
                  maskImage: 'url(/images/servicebg.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'cover',
                  maskSize: 'cover',
                }}
              >
                <h3 className="text-4xl font-bold">{investor.rank}</h3>
                <p className="font-bold text-lg mb-1">{investor.name}</p>
                <p className="text-gray-500 font-medium mb-1">Invest</p>
                <p className="text-green-600 font-bold text-lg">{investor.investment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInvestors;
