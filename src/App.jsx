import React from "react";
import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"


function App() {
  return (
    <>
      <div>
        <BlurBackground />
        <Navbar />
        <main
          className="antialiased overflow-hidden max-w-7xl mx-auto
        relative z-10
        "
        >
          <Navbar />
          <MainPage />
          <Projects />
          <About />
          <Experience />
          <Contacts />
        </main>
      </div>
    </>
  );
}

export default App;
