import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" pt-20 h-full w-full text-white " 
    >
      <div className="w-full bg-green-950 mx-auto px-6 md:px-20  py-28 bg-cover flex space-x-10" 
      style={{
            WebkitMaskImage: "url(/images/blayer2.png)",
            maskImage: "url(/images/blayer2.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}>
        {/* Logo & Description */}
        <div className="w-[30%]">
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-green-400 text-2xl font-bold">📊</div>
            <span className="text-xl font-semibold text-green-400">ViserAsset</span>
          </div>
          <p className="text-gray-300 text[16px]">
            AssetLab is a leading investment management company that specializes
            in managing various asset classes across various currencies. We offer
            a wide range of services and expertise to help you grow your wealth.
          </p>
        </div>

        {/* Plan Category */}
        <div className=" w-[18%] flex flex-col items-start justify-start">
          <h3 className="font-bold text-xl mb-3 ">Plan Category</h3>
          <ul className="space-y-3 text[16px] list-disc">
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Property Management</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Forex Management</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Gold Management</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Money Management</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-[16%] flex flex-col items-start">
          <h3 className="font-bold text-xl mb-3">Useful Link</h3>
          <ul className="space-y-3 text[16px] list-disc">
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Home</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> How It Work</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Blog</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold"> Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="w-[16%] flex flex-col items-start">
          <h3 className="font-bold text-xl mb-3">Legal</h3>
          <ul className="space-y-3 text[16px] list-disc">
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold">Security Policy</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold">Invest Policy</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold">Terms of Service</a></li>
            <li><a href="#" className=" text-white hover:text-green-600 font-semibold">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-[25%] flex flex-col items-start">
          <h3 className="font-bold text-xl mb-3">Contact Info</h3>
          <ul className="text[16px] space-y-3">
            <li className="flex gap-2"><span>📍</span> 123 Main Street, New York, NY 10001</li>
            <li className="flex gap-2"><span>📞</span> +9874-555-666-457</li>
            <li className="flex gap-2"><span>✉️</span> demo@example.com</li>
          </ul>
          <div className="mt-4">
            <p className="font-bold mb-2">Follow Us</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-green-600">
                <FaXTwitter />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-green-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex items-center justify-center border-t bg-green-900 h-20 border-green-800 pt-4  text-2xl text-gray-400">
        Copyright © 2025 <span className="text-green-400">ViserAsset</span>. All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
