import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react';
import About from './components/About/About';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <BrowserRouter>
      <div onMouseMove={handleMouseMove} className="app-container">
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />

        </Routes>
        
      {/* <Footer/> */}
        <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
