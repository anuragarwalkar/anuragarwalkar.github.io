import React, { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skill/Skills";
import About from "./screens/about/About";

const App = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <About />
      <Skills />
      {/* <Project /> */}
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
