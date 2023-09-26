import React from 'react'
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
  
  return (
    <div>
      
      <div className='presentation'>
        <h2>Portfolio </h2>
        <h3><a className='title' href='https://drive.google.com/file/d/1DPkT79B7gM67CwBe5R5lrf_FbP5A5kY4/view' target="_blank" style={{textDecoration:'none'}}>          Justina Iturraspe        </a></h3>
        <h5>Frontend developer</h5>
      </div>
    
      <Footer/>

    </div>
  )
}

export default Home