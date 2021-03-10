import React, { Fragment, lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const About = lazy(() => import("./screens/about/About"));
const Contact = lazy(() => import("./screens/contact/Contact"));
const Home = lazy(() => import("./screens/home/Home"));
const Projects = lazy(() => import("./screens/projects/Project"));

const App = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Suspense fallback="loading...">
        <Route exact path="/home" title="Anurag" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Suspense>
      <Redirect exact from="/" to="/about" />
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
