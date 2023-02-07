import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';

function App() {
  return (
      <BrowserRouter>
      
        <Header />
      
        <a className='title' href='https://drive.google.com/file/d/1DPkT79B7gM67CwBe5R5lrf_FbP5A5kY4/view' target="_blank" style={{textDecoration:'none'}}>          Justina Iturraspe        </a>
        
        <Routes>

          {/* <Route path='/' element={< Home />} /> */}
          
          <Route path='/education' element={< Education />} />
          <Route path='/projects' element={< Projects />} />
          <Route path='/skills' element={< Skills />} />

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  );
}

export default App;
