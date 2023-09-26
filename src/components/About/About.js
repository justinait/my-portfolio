import React from 'react'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import './About.css'

function About() {
  return (
    <div>
        <p className='aboutText'>
            Soy Justina, estudiante autodidacta de Desarrollo Web enfocado en Frontend. 
            Actualmente estoy potenciando mi desarrollo
            académico y profesional como desarrolladora web
            de manera freelance. Con una actitud entusiasta y
            una pasión por aprender, me caracterizo por asumir
            nuevos desafíos y enfrentarlos con determinación.        
        </p>
        <Education />
        <Skills />
    </div>
  )
}

export default About