import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
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
    <ThemeProvider attribute="class" forcedTheme="light" defaultTheme="light">
      <div>
        {loading ? (
          <div className="animation-logo">
            <ScaleLoader color={"#E234D6"} loading={loading} size={20} />
          </div>
        ) : (
          <>
            <AnimatedCursor innerSize={12} outerSize={8} color="193, 11, 111" />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Services />
            <Work />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
