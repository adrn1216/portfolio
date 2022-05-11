import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "../src/components/Header";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ContactMe from "./pages/ContactMe";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="App">
      <div className="indev">in development</div>
      <ScrollToTop smooth />
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
