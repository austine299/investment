import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/Home";
import NavBar from "./components/homePage/NavBar";
import AboutUs from "./components/homePage/AboutUs";
import Work from "./components/homePage/Work";
import Blog from "./components/homePage/Blog";
import Plan from "./components/homePage/Plan";
import Contact from "./components/homePage/Contact";
import "./custom.css";
import Footer from "./components/homePage/Footer";

function App() {
  return (
    
      <div className="relative">
        <div className="bg-white fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>

        <div className="">
          {/* Push content down so it's not hidden under fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
