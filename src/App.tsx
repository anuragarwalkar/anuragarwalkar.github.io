import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar></Navbar> 
       <About></About>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;