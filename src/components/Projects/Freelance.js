import React from 'react'
import './Freelance.css'

function Freelance() {
    //usar de modelo cmbroker q tiene nuevas clases
    const freelanceProjects = [
        { name: 'RollerBeige', image: '/projects/roller web.png', web: 'https://rollerbeige.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database'] },
        { name: 'CM Broker', image: '/projects/cmbrokerweb1.png', web: 'https://cmbroker.com.ar/', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'Auth', 'FormsJs', 'GitHub'] },
        { name: 'CAI Ventures', image: '/projects/cai ventures web.png', web: 'https://www.caiventuresconsultoria.com', description: 'Equipo de desarrollo. 4 desarrolladores.', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub', 'Git Flow'] },
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


    </div>
  )
}

export default Freelance