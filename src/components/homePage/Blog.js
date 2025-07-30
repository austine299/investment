import React, { useContext } from "react";
import { MyContext } from "./HomeContext";

function Blog() {
  const { sectionName } = useContext(MyContext);
  return (
     <div className="relative min-h-screen bg-white text-black">
      {/* Banner Section */}
      {sectionName === "blog" && (
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
          Blog
        </div>
      )}

      {/* Content Below */}
      <div className="px-6 md:px-20 py-10">
        <p className="text-xl">Welcome back blog</p>
      </div>
    </div>
  )
}

export default Blog