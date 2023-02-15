import React from 'react'
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
  return (
    
    <div className='homeContainer'>
      
      <div className='text'>
        <h2 style={{color:'white'}}>Hola mundo! </h2>
        <h3 style={{color:'white'}}>Soy <a className='title' href='https://drive.google.com/file/d/1DPkT79B7gM67CwBe5R5lrf_FbP5A5kY4/view' target="_blank" style={{textDecoration:'none'}}>          Justina Iturraspe        </a></h3>
        <h5 style={{color:'white'}}>Frontend developer</h5>
      </div>
    
      <p className='presentation'>
        Soy estudiante autodidacta de Desarrollo Web enfocado en Frontend. 
        Aspiro a adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional. 
        Soy responsable y proactiva, me gusta aprender de los demás y superarme continuamente.
      </p>

      <Footer/>

    </div>
  )
}

export default Home