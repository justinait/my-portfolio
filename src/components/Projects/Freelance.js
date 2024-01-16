import React, { useEffect } from 'react'
import './Freelance.css'

function Freelance({toggleCustomNavbar}) {
    useEffect(() => {
        toggleCustomNavbar(true); // Activa el estilo personalizado del Navbar en esta sección
        return () => {
          toggleCustomNavbar(false); // Desactiva el estilo personalizado al desmontar la sección (opcional)
        };
      }, [toggleCustomNavbar]);

  return (
    <div className='freelanceContainer'>
        
        {/* CM BROKER */}
        <a href='https://rollerbeige.com.ar/' target="_blank"  className='freelance'>

            <img src='/projects/roller (1).png' alt="rollerbeige" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/rollermobile.jpeg' alt="rollerbeige" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>ROLLER <br/> BEIGE</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        {/* CM BROKER */}
        <a href='https://cmbroker.com.ar/' target="_blank"  className='freelance'>

            <img src='/projects/cmbrokerhero-min.png' alt="cmbroker" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/cmbrokermobile-min.jpeg' alt="cmbroker" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>CM BROKER</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        {/* CAI VENTURES */}

        <a href='https://www.caiventuresconsultoria.com/' target="_blank"  className='freelance'>

            <img src='/projects/caiventureshero-min.png' alt="cai ventures" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/caiventuresmobile-min.jpeg' alt="cai ventures" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>CAI VENTURES</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        {/* ESKAMAQ */}

        <a href='https://www.eskamaq.com/' target="_blank"  className='freelance'>

            <img src='/projects/eskamaqhero-min.png' alt="eskamaq" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/eskamaqmobile-min.jpeg' alt="eskamaq" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>ESKAMAQ</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        {/* JORGELINA */}
        
        <a href='https://www.jorgelinaparkinson.com/' target="_blank"  className='freelance'>

            <img src='/projects/jorgelinahero-min.png' alt="jorgelina parkinson" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/jorgelinamobile-min.png' alt="jorgelina parkinson" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>JORGELINA PARKINSON</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        

        {/* REGIA */}
        
        <a href='https://www.regia.ar/' target="_blank"  className='freelance'>

            <img src='/projects/regiahero-min.png' alt="regia" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/regiamobile-min.jpeg' alt="regia" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>REGIA</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

    </div>
  )
}

export default Freelance