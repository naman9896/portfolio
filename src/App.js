import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="animation-logo">
          <ScaleLoader color={"#E234D6"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <AnimatedCursor innerSize={12} outerSize={8} color="193, 11, 111" />
          <Navbar />
          <Routes>
            <Route path="/" activeClassName="home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}

      {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
