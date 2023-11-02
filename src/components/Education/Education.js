import React from 'react'
import './Education.css'
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  return (
    <div className='educationContainer'>
      <p className='subtitles'>        Educación       </p>
      
      <div className='timeline'>
        
        <div className='education'>
          
          <h4>Taller Jorge Duje</h4>
          <h5>Firebase y Mercado Pago</h5>
          <br/>
          <h4>Universidad Autónoma De Entre Ríos</h4>
          <h5>Introducción al Diseño UX/UI</h5>
          <p className='year'>2023</p>
        </div>
        <div className='education'>
          {/* <img src='/logos/coderhouse.png' className='educationIcon'/>   */}
          <h4>Coder House</h4>
          <h5>Curso - React JS</h5>
          <p className='year'>2022</p>
        </div>
        <div className='education'>
          {/* <img src='/logos/dh.jpg' className='educationIcon'/> */}
          <h4>Digital House</h4>
          <h5>Curso - Full Stack Developer</h5>
          {/* <br/> */}
          <p className='year'>2021</p>
        </div>
        
        <div className='education'>
          {/* <img src='/logos/unl.gif' className='educationIcon'/>   */}
          <h4>Universidad Nacional del Litoral</h4>
          <h5>Analista en Sistemas</h5>
          <p className='year'>2019 - 2021</p>
        </div>    
      </div>
    </div>
  )
}

export default Education