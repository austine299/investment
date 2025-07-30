import React, { useContext, useState, useEffect } from "react";
import {FaEnvelope,FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MyContext } from "./HomeContext";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState("");

  const { sectionName, setSectionName } = useContext(MyContext);

  const controlNavbar = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY) {
      setShowNav(false); // hide nav on scroll down
    } else {
      setShowNav(true); // show nav on scroll up
    }

    setScrolled(currentScroll > 60);
    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      {!scrolled ? (
        <div
          className="relative bg-cover py-5 h-36 z-0 bg-[#e0f0e4]"
          style={{
            backgroundImage: "url(/images/banner-overlay.png) ",
            WebkitMaskImage: "url(/images/blayer.png)",
            maskImage: "url(/images/blayer.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        >
          <div className="flex w-full justify-between z-10">
            <div className="flex gap-6 h-11 px-6 md:px-20">
              <a href="" className="flex items-center gap-2 text-[17px] text-gray-600 font-semibold">
                <FaEnvelope className="text-green-500"/> <span>demo@example.com</span>
              </a>
              <a href="" className="flex items-center gap-2 text-[17px] text-gray-600 font-semibold">
                <FaPhone className="text-green-500"/> <span>+9874-555-666-457</span>
              </a>
            </div>
            <div className="flex gap-6 h-11 px-6 md:px-20">
              <a href="">
                <FaFacebook className=" p-1 bg-blue-500 text-white text-3xl rounded-full" />
              </a>
              <a href="">
                <FaTwitter className=" p-1 bg-black text-white text-3xl rounded-full" />
              </a>
              <a href="">
                <FaLinkedin className=" p-1 bg-blue-500 text-white text-3xl rounded-full" />
              </a>
              <a href="">
                <FaInstagram className=" p-1 bg-red-400 text-white text-3xl rounded-full" />
              </a>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between w-full h-24 items-center px-6 md:px-20">
            <div className="flex justify-between items-center w-full md:w-8/12 font-semibold text-[17px] gap-4">
              <NavLink to="/" end>
                <img
                  src="/images/logo_dark.png"
                  className="w-32 md:w-48"
                  alt="Logo"
                />
              </NavLink>

              <NavLink
                to="/"
                onClick={() => setSectionName("home")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setSectionName("about")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                About
              </NavLink>

              <NavLink
                to="/work"
                onClick={() => setSectionName("work")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                How It Works
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setSectionName("blog")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setSectionName("contact")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Contact
              </NavLink>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="px-6 md:px-11 rounded-full h-10 border-2 font-bold"
                aria-label="Select Language"
              >
                Lang
              </button>
              <button className="p-3 rounded-bl-[1rem] rounded-tl-[2rem] rounded-tr-[1rem] rounded-br-[2rem] h-14 border-2 bg-green-600">
                <span className="text-white font-bold px-6 md:px-5 py-2 rounded-full border-2 border-dashed">
                  Sign In
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fixed top-0 left-0 w-full h-20 transition-all duration-1000 px-6 md:px-20 bg-white ${
            scrolled ? "z-[60] shadow-md" : "z-0"
          }`}
        >
          <div className="flex justify-between items-center h-20 w-full">
            {/* Left: Logo + NavLinks */}
            <div className="flex justify-between items-center w-full md:w-3/5 font-semibold text-[17px] gap-4">
              <NavLink to="/" end>
                <img
                  src="/images/logo_dark.png"
                  className="w-32 md:w-48"
                  alt="Logo"
                />
              </NavLink>

              <NavLink
                to="/"
                onClick={() => setSectionName("home")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setSectionName("about")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                About
              </NavLink>

              <NavLink
                to="/work"
                onClick={() => setSectionName("work")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                How It Works
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setSectionName("blog")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setSectionName("contact")}
                className={({ isActive }) => `
    ${isActive ? "text-green-500" : "hover:text-green-500"}
    text-[17px] font-semibold`}
              >
                Contact
              </NavLink>
            </div>

            {/* Right: Language & Sign In */}
            <div className="flex items-center gap-3">
              <button
                className="px-6 md:px-11 rounded-full h-10 border-2"
                aria-label="Select Language"
              >
                Lang
              </button>
              <button className="p-3 rounded-bl-[1rem] rounded-tl-[2rem] rounded-tr-[1rem] rounded-br-[2rem] h-14 border-2 bg-green-600">
                <span className="text-white font-bold px-6 md:px-5 py-2 rounded-full border-2 border-dashed">
                  Sign In
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
