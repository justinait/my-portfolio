import React, { useEffect } from 'react'
import './Freelance.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Freelance() {
    const freelanceProjects = [
        { name: 'The Looney Studio', image: '/projects/looney web.png', web: 'https://thelooneystudio.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Medical City', image: '/projects/medicalcity web.png', web: 'https://medicalcitypv.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'Eleven Pro Cars', image: '/projects/elevenpro web.png', web: 'https://elevenprocar.com', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub'] },
        { name: 'ParmaShop', image: '/projects/parmaweb.png', web: 'https://parmashop.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'E-commerce', 'Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database', 'Mercado Pago'] },
        { name: 'RollerBeige', image: '/projects/rollertienda web.png', web: 'https://rollerbeige.com.ar', description: 'Maquetación y Desarrollo', stack: ['React Js', 'E-commerce','Javascript', 'HTML', 'CSS', 'Auth', 'GitHub', 'Firebase database', 'Mercado Pago'] },
        { name: 'CM Broker', image: '/projects/cmbrokerweb1.png', web: 'https://cmbroker.com.ar/', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub'] },
        { name: 'CAI Ventures', image: '/projects/cai ventures web.png', web: 'https://www.caiventuresconsultoria.com', description: 'Equipo de desarrollo. 4 desarrolladores.', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub', 'Git Flow'] },
        { name: 'Eskamaq', image: '/projects/eskamaq web.png', web: 'https://www.eskamaq.com', description: 'Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'GitHub', 'Firebase database'] },
        { name: 'Jorgelina Parkinson', image: '/projects/parkinson web.png', web: 'https://www.jorgelinaparkinson.com/', description: 'Maquetación y Desarrollo', stack: ['React Js', 'Javascript', 'HTML', 'CSS', 'FormsJs', 'GitHub', 'Firebase database'] },
        { name: 'Regia', image: '/projects/regia web.png', web: 'https://www.regia.ar/', description: 'Desarrollo', stack: ['Javascript', 'HTML', 'CSS', 'GitHub'] },
        
    ]
    useEffect(() => {
        AOS.init(); // Inicializa AOS
    }, []);
  return (
    <div className='freelanceContainer'>
        
        {
            freelanceProjects.map((e, i)=> {
                return (
                    <a href={e.web} target="_blank" key={i} className='freelance' data-aos="zoom-in-down">

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