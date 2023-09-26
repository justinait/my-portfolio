import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

function Footer() {

  return (
    <div className='socialMedia'>
      <a href='https://github.com/justinait' target="_blank">
        <GitHubIcon className='socialMediaIcon' fontSize='large' />
      </a>

      <a href='https://www.linkedin.com/in/justinaiturraspe/' target="_blank">
        <LinkedInIcon className='socialMediaIcon' fontSize='large' />
      </a>
      
      <EmailIcon 
        onClick={() => {          navigator.clipboard.writeText('justiiturraspe@gmail.com')        }}
        className='socialMediaIcon'
        fontSize='large'
      />
        
    </div>
  )
}

export default Footer;