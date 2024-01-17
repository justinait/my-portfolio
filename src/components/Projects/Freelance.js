import React from 'react'
import './Freelance.css'

function Freelance() {
    //usar de modelo cmbroker q tiene nuevas clases
    const freelanceProjects = [
        { name: 'RollerBeige', image: '/projects/roller web.png', web: 'https://rollerbeige.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database'] },
        { name: 'CM Broker', image: '/projects/cmbrokerweb1.png', web: 'https://cmbroker.com.ar/', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'Auth', 'FormsJs', 'GitHub'] },
        { name: 'CAI Ventures', image: '/projects/cai ventures web.png', web: 'https://www.caiventuresconsultoria.com', description: 'Equipo de desarrollo. 4 desarrolladores.', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'Firebase database', 'FormsJs', 'GitHub', 'Git Flow'] },
        { name: 'Eskamaq', image: '/projects/eskamaq web.png', web: 'https://www.eskamaq.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub', 'Firebase database'] },
        { name: 'Jorgelina Parkinson', image: '/projects/parkinson web.png', web: 'https://www.jorgelinaparkinson.com/', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub', 'Firebase database'] },
        { name: 'Regia', image: '/projects/regia web.png', web: 'https://www.regia.ar/', description: 'Desarrollo', stack: ['Javascript', 'HTML', 'CSS', 'GitHub'] },
        
    ]
  return (
    <div className='freelanceContainer'>
        
        {
            freelanceProjects.map((e, i)=> {
                return (
                    <a href={e.web} target="_blank" key={i} className='freelance'>

                        <img src={e.image} alt={e.name} className='freelanceImage' border="0" />

                        <div className='pagesDescription'>
                            <p className='freelancePageName'>{e.name}</p>
                            <p className='subdescription'>{e.description}</p>
                            <div className='stackContainer'>
                                {e.stack.map ((s, index) => {
                                    return  <p key={index} className='stack'>{s}</p>
                                })}
                            </div>
                        </div>
                    </a>
                )
            })
        }

        {/* ROLLERBEIGE */}
        <a href='https://rollerbeige.com.ar/' target="_blank"  className='freelance'>

            {/* <img src='/projects/roller (1).png' alt="rollerbeige" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/rollermobile.jpeg' alt="rollerbeige" className='freelanceImage mobileFreelance' border="0" /> */}

            <img src='/projects/mockuproller.jpg' alt="rollerbeige" className='freelanceImage desktopFreelance' border="0" />
            <img src='/projects/mockuproller.jpg' alt="rollerbeige" className='freelanceImage mobileFreelance' border="0" />

            <div className='pagesDescription'>
                <p>ROLLER <br/> BEIGE</p>
                <p className='subdescription'>Página web</p>
            </div>
        </a>

        {/* CM BROKER */}
        <a href='https://cmbroker.com.ar/' target="_blank"  className='freelance'>

            <img src='/projects/cmbroker web1.png' alt="cmbroker" className='freelanceImage' border="0" />

            <div className='pagesDescription'>
                <p className='freelancePageName'>CM BROKER</p>
                <p className='subdescription'>Desarrollo.</p>
                <p className='stack'>React Js</p>
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