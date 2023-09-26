import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />

        </Routes>
        
      {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
