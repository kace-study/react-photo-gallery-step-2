import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        {/* <Gallery /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
