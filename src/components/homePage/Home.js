import React, { useContext } from "react";
import AboutUs from "./AboutUs";
import { FaPlay } from "react-icons/fa";
import { MyContext } from "./HomeContext";
import Plan from "./Plan";
import Work from "./Work";
import Contact from "./Contact";
import ImageSlider from "./ImageSlider";


function Home() {
  const { sectionName } = useContext(MyContext);
  return (
    <div className="relative h-full ">
      {/* This section overlays on top of the NavBar's top area */}
      {sectionName === "home" && (
        <div
          className=" top-0 left-0 w-full h-fit pt-48 pb-20 px-6 md:px-20 z-30 flex items-center bg-[#e0f0e4]  text-black "
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
          <div className="w-full flex ">
            <div className="w-1/2 flex flex-col gap-10 font-sans">
              <h1 className="text-6xl font-bold ">
                <span className="text-green-500">"Secure </span>Your <br />
                Financial Future ."
              </h1>
              <p className="text-2xl font-bold">
                Start your high-yield investment <br />
                journey with us
              </p>
              <div className="flex gap-16 items-center">
                <button className="p-3 rounded-bl-[1rem] rounded-tl-[2rem] rounded-tr-[1rem] rounded-br-[2rem] h-14 border-2 bg-green-600">
                  <span className="text-white font-bold px-6 md:px-5 py-2 rounded-full border-2 border-dashed">
                    Join With Us
                  </span>
                </button>
                <button className="p-1 rounded-full border-2 relative overflow-hidden animate-morph">
                  {/* Morphing animated background blob */}
                  {/* <div className="absolute inset-0  bg-green-500 opacity-20 rounded-full z-0" /> */}

                  {/* Main button content on top */}
                  <div className="relative z-10 bg-green-600 text-white font-bold p-4 rounded-full animate-morph">
                    <FaPlay />
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img src="./images/banner_image.gif " className="h-screen " />
            </div>
          </div>
        </div>
      )}

      <div className="h-auto relative">
        <ImageSlider/>
      </div>

      {/* Push main content down so it doesn't sit behind the overlay */}
      <div className="h-auto relative">
        <AboutUs />
      </div>
      <div className="h-auto relative">
        <Plan />
      </div>
      <div className="h-auto relative">
        <Work />
      </div>
      <div className="h-auto relative">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
