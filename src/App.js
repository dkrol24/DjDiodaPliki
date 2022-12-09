import React, { useEffect, useState, useRef } from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

import ScrollToTop from "./components/ScrollToTop";

import Loader from "./components/Loader";

import Testimonials from "./components/Testimonials";

import { AnimatePresence } from "framer-motion";
import Offert from "./components/Offert";
import Gallery from "./components/Gallery/Gallery";
import Test from "./components/Test";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      <AnimatePresence>
        <main initial="hidden" animate="show" ref={containerRef}>
          <Home />
          <Offert />
          <Test />
          <Contact />
          <Gallery />
          <Testimonials />
          <Footer />
          <ScrollToTop />
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
