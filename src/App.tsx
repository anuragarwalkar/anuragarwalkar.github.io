import React, { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About from "./screens/about/About";

const App = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <About />

      <Projects />
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
