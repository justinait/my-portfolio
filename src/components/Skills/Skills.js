import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skillsContainer'>
      <div className='skillContainer'>
        <img src='/logos/js.png' className='skillIcon'/>
        <p>Javascript</p>
      </div>
      <div className='skillContainer'>
        <img src='/logos/css2.png' className='skillIcon'/>  
        <p>CSS</p>
      </div>
      <div className='skillContainer'>
        <img src='/logos/html.png' className='skillIcon'/>  
        <p>HTML</p>
      </div>
      <div className='skillContainer'>
        <img src='/logos/bs.png' className='skillIcon'/>  
        <p>Bootstrap</p>
      </div>
      <div className='skillContainer'>
        <img src='/logos/react.png' className='skillIcon'/>  
        <p>React JS</p>
      </div>
      <div className='skillContainer'>
        <img src='/logos/gh.png' className='skillIcon'/>  
        <p>GitHub</p>
      </div>
      
    </div>
  )
}

export default Skills