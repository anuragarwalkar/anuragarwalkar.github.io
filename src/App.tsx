import React, { Component, lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Route } from "react-router-dom";

const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Suspense fallback="loading...">
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Suspense>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
