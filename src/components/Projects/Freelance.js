import React from 'react'
import './Freelance.css'

function Freelance() {
    const freelanceProjects = [
        { name: 'E2 Yacht Services', image: '/projects/yacht web.png', web: 'https://www.e2yachtservices.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Center Detail Mallorca', image: '/projects/centerdetailmallorca web.png', web: 'https://www.centerdetailmallorca.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Center Detail Franquicias', image: '/projects/centerdetail web.png', web: 'https://www.centerdetail.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Autos Polo', image: '/projects/autospolo web.png', web: 'https://www.autospolo.com', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub', 'Diseño UX UI', 'Firebase database', 'Auth'] },
        { name: 'The Looney Studio', image: '/projects/looney web.png', web: 'https://www.thelooneystudio.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Medical City', image: '/projects/medicalcity web.png', web: 'https://medicalcitypv.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Eleven Pro Cars', image: '/projects/elevenpro web.png', web: 'https://elevenprocar.com', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub', 'Firebase database'] },
        { name: 'ParmaShop', image: '/projects/parmaweb.png', web: 'https://parmashop.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'E-commerce', 'Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database', 'Mercado Pago'] },
        { name: 'RollerBeige', image: '/projects/rollertienda web.png', web: 'https://rollerbeige.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'E-commerce','Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database', 'Mercado Pago'] },
        { name: 'CM Broker', image: '/projects/cmbrokerweb1.png', web: 'https://cmbroker.com.ar/', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub'] },
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