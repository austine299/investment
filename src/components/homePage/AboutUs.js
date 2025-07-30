import React, { useContext } from "react";
import { MyContext } from "./HomeContext";
import ImageSlider from "./ImageSlider";
import InvestmentSteps from "./cards/InvestmentSteps";
import Services from "./cards/Services";
import SecurityFeatures from "./SecurityFeatures";
import InvestorTestimonials from "./cards/InvestorTestimonials";
import TopInvestors from "./cards/TopInvestors";
import FAQ from "./cards/FAQ";

function AboutUs() {
  const { sectionName } = useContext(MyContext);

  return (
    <div className="relative h-full bg-white text-black">
      {/* Banner Section */}
      {sectionName === "about" && (
        <div
          className="w-full h-fit pt-48 pb-20 px-6 md:px-20 text-3xl font-bold bg-[#e0f0e4] text-black flex justify-center items-center"
          style={{
            backgroundImage: "url(/images/banner-overlay.png)",
            WebkitMaskImage: "url(/images/blayer.png)",
            maskImage: "url(/images/blayer.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          AboutUs
        </div>
      )}

      {/* Content Below */}
      <div className="relative flex items-start gap-10 px-6 md:px-20 pt-28 w-full h-full">
        <div className="w-3/5 h-[555px]">
          <img
            src="./images/about-us.png"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-[45%]">
          <div className="w-full flex flex-col gap-6 items-stretch">
            <p className="font-semibold text-xl flex ">
              {" "}
              <span class="icon text-green-500">
                <img src="./images/flower.svg" />
              </span>
              About Us
            </p>
            <h1 className="text-5xl font-bold">Who we are ?</h1>
            <p className="font-[400px] text-[1rem]">
              A trusted platform empowering investors with secure, <br />{" "}
              profitable, and growth-driven financial solutions.
            </p>
            <h3 className="text-xl font-bold mt-5">
              Why We Stand Out and Are Truly Special
            </h3>
            <div className="w-full flex flex-wrap gap-7 mt-5">
              <div className="w-[45%] bg-slate-100 p-3 rounded-md flex gap-4 items-start">
                <div className="w-[15px] h-[10px] rounded-full bg-green-400 mt-2"></div>
                <span className="text-[13px]">
                  Real-time updates on active investments.
                </span>
              </div>
              <div className="w-[45%] bg-slate-100 p-3 rounded-md flex gap-4 items-start">
                <div className="w-[15px] h-[10px] rounded-full bg-green-400 mt-2"></div>
                <span className="text-[13px]">
                  Allow user to calculate plan wise interest
                </span>
              </div>
              <div className="w-[45%] bg-slate-100 p-3 rounded-md flex gap-4 items-start">
                <div className="w-[15px] h-[10px] rounded-full bg-green-400 mt-2"></div>
                <span className="text-[13px]">
                  Display earnings, startend & progress.
                </span>
              </div>
              <div className="w-[45%] bg-slate-100 p-3 rounded-md flex gap-4 items-start">
                <div className="w-[15px] h-[10px] rounded-full bg-green-400 mt-2"></div>
                <span className="text-[13px]">
                  Quick reinvest from current balance
                </span>
              </div>
            </div>
            <hr />
            <div className="flex gap-3">
              <div className="flex gap-2 ">
                <div class="icon bg-green-500 p-3 text-white h-12 rounded-tl-full rounded-tr-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_16372_1464)">
                      <path
                        d="M30.899 1.6635C30.8316 0.98959 30.3261 0.484155 29.6522 0.416763C21.1272 -0.25715 15.0283 3.88742 11.2207 9.07655C9.13156 8.40263 6.87395 8.6385 4.81852 9.78415C2.83047 10.8961 1.17939 12.7831 0.101126 15.0744C-0.134743 15.6135 -0.0336561 16.22 0.404387 16.6244C0.808735 17.0287 1.44895 17.0961 1.95439 16.8265C4.11091 15.6809 6.537 15.9168 7.98591 17.3657L13.9163 23.2961L13.95 23.3298C15.399 24.7787 15.6348 27.2048 14.4892 29.3613C14.2196 29.8668 14.3207 30.507 14.6913 30.9113C14.9609 31.1809 15.2979 31.3157 15.6685 31.3157C15.8707 31.3157 16.0729 31.282 16.2413 31.1809C18.5326 30.1026 20.4196 28.4179 21.5316 26.4635C22.7109 24.4081 22.9468 22.1505 22.2392 20.0276C23.7555 18.9157 25.137 17.7026 26.2826 16.3548C29.8544 12.2776 31.4044 7.32437 30.899 1.6635ZM4.51526 13.4233C5.96417 12.0081 7.78373 11.132 9.70439 11.4689C9.16526 12.4124 8.72721 13.3559 8.32287 14.2994C7.17721 13.6592 5.86308 13.3559 4.51526 13.4233ZM17.9598 26.8342C17.9935 25.4526 17.6903 24.1385 17.0837 22.9928C18.0609 22.5885 19.0044 22.1168 19.9142 21.6113C20.2511 23.532 19.4087 25.3852 17.9598 26.8342ZM15.2642 20.8026L10.5131 16.0515C12.9055 9.68307 18.8359 2.87655 28.3044 3.04502C28.6076 14.3331 19.3076 19.2189 15.2642 20.8026ZM23.9913 7.35807C24.3957 7.76242 24.6316 8.33524 24.6316 8.90807C24.6316 9.48089 24.3957 10.0537 23.9913 10.4581C23.587 10.8624 23.0142 11.0983 22.4413 11.0983C21.8685 11.0983 21.2957 10.8961 20.8913 10.4581C20.487 10.02 20.2511 9.48089 20.2511 8.90807C20.2511 8.33524 20.487 7.76242 20.8913 7.35807C21.2957 6.95372 21.8685 6.71785 22.4413 6.71785C23.0142 6.71785 23.587 6.95372 23.9913 7.35807ZM5.02069 21.3755C3.47069 22.9255 3.4033 26.0255 3.4033 26.632C3.4033 27.3733 4.00982 27.9798 4.75113 27.9798H4.78482C5.49243 27.9798 8.45765 27.8787 9.97395 26.3624C10.9174 25.4189 11.1196 24.4418 11.1196 23.8015C11.1196 22.8918 10.749 22.0157 10.0413 21.3081C8.35656 19.5896 6.23374 20.1287 5.02069 21.3755ZM8.087 24.4418C7.75004 24.7787 7.00874 25.0146 6.23374 25.1157C6.36852 24.3407 6.60439 23.5994 6.90765 23.2961C7.14352 23.0602 7.34569 22.9255 7.58156 22.9255C7.75004 22.9255 7.95221 23.0265 8.15439 23.2287C8.35656 23.4309 8.45765 23.6331 8.45765 23.8015C8.42395 24.0037 8.25547 24.2733 8.087 24.4418Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_16372_1464">
                        <rect
                          width="31"
                          height="31"
                          fill="currentColor"
                          transform="translate(0 0.349365)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-gray-500">Secure & Profitable Growth</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div class="icon bg-green-500 p-3 text-white h-12 rounded-tl-full rounded-tr-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M30 15.3494C29.448 15.3494 29 15.7974 29 16.3494C29 23.5174 23.168 29.3494 16 29.3494C8.832 29.3494 3 23.5174 3 16.3494C3 9.18137 8.832 3.34937 16 3.34937C16.552 3.34937 17 2.90137 17 2.34937C17 1.79737 16.552 1.34937 16 1.34937C7.729 1.34937 1 8.07837 1 16.3494C1 24.6204 7.729 31.3494 16 31.3494C24.271 31.3494 31 24.6204 31 16.3494C31 15.7974 30.552 15.3494 30 15.3494Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 5.34937C9.935 5.34937 5 10.2844 5 16.3494C5 22.4144 9.935 27.3494 16 27.3494C22.065 27.3494 27 22.4144 27 16.3494C27 15.7974 26.552 15.3494 26 15.3494C25.448 15.3494 25 15.7974 25 16.3494C25 21.3114 20.962 25.3494 16 25.3494C11.038 25.3494 7 21.3114 7 16.3494C7 11.3874 11.038 7.34937 16 7.34937C16.552 7.34937 17 6.90137 17 6.34937C17 5.79737 16.552 5.34937 16 5.34937Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 11.3494C16.552 11.3494 17 10.9014 17 10.3494C17 9.79737 16.552 9.34937 16 9.34937C12.14 9.34937 9 12.4894 9 16.3494C9 20.2094 12.14 23.3494 16 23.3494C19.86 23.3494 23 20.2094 23 16.3494C23 15.7974 22.552 15.3494 22 15.3494C21.448 15.3494 21 15.7974 21 16.3494C21 19.1064 18.757 21.3494 16 21.3494C13.243 21.3494 11 19.1064 11 16.3494C11 13.5924 13.243 11.3494 16 11.3494Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17 13.3494C17 12.7974 16.552 12.3494 16 12.3494C15.448 12.3494 15 12.7974 15 13.3494V16.3494C15 16.4794 15.027 16.6094 15.077 16.7314C15.179 16.9754 15.373 17.1704 15.618 17.2724C15.74 17.3234 15.87 17.3494 16 17.3494H19C19.552 17.3494 20 16.9014 20 16.3494C20 15.7974 19.552 15.3494 19 15.3494H18.414L22.414 11.3494H26C26.265 11.3494 26.52 11.2444 26.707 11.0564L30.707 7.05641C30.993 6.77041 31.079 6.34041 30.924 5.96641C30.769 5.59341 30.404 5.34941 30 5.34941H27V2.34941C27 1.94541 26.756 1.58041 26.383 1.42541C26.008 1.27041 25.579 1.35541 25.293 1.64241L21.293 5.64241C21.105 5.82941 21 6.08441 21 6.34941V9.93541L17 13.9354V13.3494ZM23 6.76341L25 4.76341V6.34941C25 6.90141 25.448 7.34941 26 7.34941H27.586L25.586 9.34941H23V6.76341Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-gray-500">
                    Innovative Investing for Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sectionName === "about" && (
        <>
          <div className="h-auto relative pb-10">
            <ImageSlider />
          </div>

          <div>
            <InvestmentSteps />
          </div>

          <div>
            <Services/>
          </div>
          <div>
            <SecurityFeatures/>
          </div>
          <div>
            <InvestorTestimonials/>
          </div>
          <div>
            <TopInvestors/>
          </div>
          <div>
            <FAQ/>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;
