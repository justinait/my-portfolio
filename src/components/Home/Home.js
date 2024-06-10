import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import './Home.css'
import AOS from 'aos';
// import 'aos/dist/aos.css';
import 'animate.css';

function Home() {
  // useEffect(() => {
  //   AOS.init(); // Inicializa AOS
  // }, []);
  
  return (
    <div>
      
      <div className='presentation'>
        {/* <h2>Portfolio </h2> */}
        <h3 className=' animate__animated animate__rubberBand'><a className='title' href='https://drive.google.com/file/d/1DPkT79B7gM67CwBe5R5lrf_FbP5A5kY4/view' target="_blank" style={{textDecoration:'none'}}>          I'm Just Webs       </a></h3>
        {/* <h5>Frontend developer</h5> */}
      </div>
    
      <Footer/>

    </div>
  )
}

export default Home