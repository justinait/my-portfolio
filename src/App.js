import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Freelance from './components/Projects/Freelance';
import { useState } from 'react';

function App() {
  
  const [customNavbar, setCustomNavbar] = useState(false);
  const toggleCustomNavbar = (value) => {
    setCustomNavbar(value);
  };
  return (
    <BrowserRouter>
      <div>
        <Header customStyle={customNavbar} />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/webpages' element={<Freelance toggleCustomNavbar={toggleCustomNavbar} />} />

        </Routes>
        
      {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
