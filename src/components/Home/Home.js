import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import './Home.css'
import 'animate.css';

function Home() {
  
  return (
    <div>
      
      <div className='presentation'>
        {/* <h2>Portfolio </h2> */}
        <h3 className=' animate__animated animate__rubberBand'><a className='title' href='https://drive.google.com/file/d/188qD3q8F_gGAIIPRuTjF36bGCBszBLDB/view?usp=sharing' target="_blank" style={{textDecoration:'none'}}>          I'm Just Webs       </a></h3>
        {/* <h5>Frontend developer</h5> */}
      </div>
    
      <Footer/>

    </div>
  )
}

export default Home