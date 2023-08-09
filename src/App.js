import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { items } from "./Data";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Hero />
        <AboutMe />
        <Expertise />
        <Projects />
        <GetInTouch />
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
