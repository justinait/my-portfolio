import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';

function App() {
  return (
      <BrowserRouter>
      
        <Header />
      
        <Routes>

          <Route path='/' element={< Home />} />
          
          <Route path='/education' element={< Education />} />
          <Route path='/projects' element={< Projects />} />
          <Route path='/skills' element={< Skills />} />

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  );
}

export default App;
