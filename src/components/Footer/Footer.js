import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Footer() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Copiar Email
    </Tooltip>
  );
  return (
    <div className='socialMedia'>
      <a href='https://github.com/justinait' target="_blank">
        <GitHubIcon className='socialMediaIcon' fontSize='large' />
      </a>

      <a href='https://www.linkedin.com/in/justinaiturraspe/' target="_blank">
        <LinkedInIcon className='socialMediaIcon' fontSize='large' />
      </a>
      
      <OverlayTrigger
        placement="right"
        // delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <EmailIcon 
          onClick={() => {          navigator.clipboard.writeText('justiiturraspe@gmail.com')        }}
          className='socialMediaIcon'
          fontSize='large'
        />
      </OverlayTrigger>
      
      <a href='wa.link/jy3kda' target="_blank">
        <WhatsAppIcon className='socialMediaIcon' fontSize='large' />
      </a>
        
    </div>
  )
}

export default Footer;