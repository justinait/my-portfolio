import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='educationContainer'>
      
      <div className='education'>
        <img src='/logos/dh.jpg' className='educationIcon'/>
        {/* <h4>Digital House</h4> */}
        <h5>Full Stack Developer</h5>
        <p>2021</p>
      </div>
      <div className='education'>
        <img src='/logos/coderhouse.png' className='educationIcon'/>  
        {/* <h4>Coder House</h4> */}
        <h5>React JS</h5>
        <p>2022</p>
      </div>
      <div className='education'>
        <img src='/logos/unl.gif' className='educationIcon'/>  
        {/* <h4>Universidad Nacional del Litoral</h4> */}
        <h5>Analista en Sistemas</h5>
        <p>2019 - 2020 (abandona)</p>
      </div>    
    </div>
  )
}

export default Education