import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='educationContainer'>
      <div className='education'>
        <img src='/logos/dh.jpg' className='educationIcon'/>
        {/* <h4>Digital House</h4> */}
        <h2>Full Stack Developer</h2>
        <p>2023</p>
      </div>
      <div className='education'>
        <img src='/logos/coderhouse.png' className='educationIcon'/>  
        {/* <h4>Coder House</h4> */}
        <h2>React JS</h2>
        <p>2022</p>
      </div>
      <div className='education'>
        <img src='/logos/unl.gif' className='educationIcon'/>  
        {/* <h4>Universidad Nacional del Litoral</h4> */}
        <h2>Analista en Sistemas</h2>
        <p>2019 - 2020 (abandona)</p>
      </div>    
    </div>
  )
}

export default Education