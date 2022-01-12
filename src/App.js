import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Home from './pages/home'
import Aboutus from './pages/aboutus'
import Contactus from './pages/contactus'
import Services from './pages/services'
import React from "react";
import Viewer from "./pages/viewer";
import Gallery from "./pages/gallery";

function App() {
  return (
    
      <Router>
        
          <Header />
            <main>
                <div>
                  
                      <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/aboutus' element={<Aboutus />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='gallery' element={<Gallery />} />
                        <Route path='/viewer' element={<Viewer/>} />
                        <Route path='/contactus' element={<Contactus />} />
                      </Routes> 
                  
                </div>       
            </main>
          <Footer />
      </Router>
  
  );

}

export default App;