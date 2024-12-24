// src/App.js
import React,{Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import bg from './assets/bg2.jpg'

class App extends Component {
  render() {
      const myStyle = {
        position: "relative",
          backgroundImage:`url(${bg})`,
          height: "auto",
          marginTop: "-20px",
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "white", 
      };
      return (
        <div style={myStyle}>
         
          <Router>
          <Header/>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </div>
      );
  }
}
export default App;



