import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;