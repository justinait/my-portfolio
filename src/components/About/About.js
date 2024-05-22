import React from 'react'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import './About.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Face4Icon from '@mui/icons-material/Face4';
import { ContactForm } from './Contact';

function About() {
  return (
    <div>
      <div className='aboutText'>
        <p className='subtitles'>Sobre mí</p>
        <p>
          Soy Justina, estudiante autodidacta de Desarrollo Web enfocado en Frontend. 
          Actualmente estoy potenciando mi desarrollo
          académico y profesional como desarrolladora web
          freelance. Con una actitud entusiasta y
          una pasión por aprender, me caracterizo por asumir
          nuevos desafíos y enfrentarlos con determinación.       
        </p>
      </div>
      <ContactForm />
      {/* <Education /> */}
      {/* <Skills /> */}
    </div>
  )
}

export default About