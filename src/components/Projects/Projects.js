import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects'
import './Projects.css'

function Projects() {
  return (
    <div className='projectsContainer'>
      
      {/* JORGELINA */}
      <div className='project'>

        <Card style={{ width: '18rem' }}>

          <img src="https://i.ibb.co/ngLDpgD/jorgelina.png" alt="jorgelina" border="0" />

          <Card.Body>

            <Card.Title>Blog</Card.Title>

            <Card.Text>
              Blog de la artista plástica Jorgelina Parkinson. Muestra sus pinturas separadas por series.
            </Card.Text>
            
            <Button href='https://jorgelinaparkinson.com' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/jorgelinaparkinson' target="_blank" variant="dark" className='cardButton'>REPO</Button>

          </Card.Body>

        </Card>
      </div>

      {/* NOTAS */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <img src="https://i.ibb.co/LvczTQ1/notes-1.png" alt="notes-1" border="0" />
          <Card.Body>
            <Card.Title>App de notas</Card.Title>
            <Card.Text>
              Aplicación de Notas - Recordatorio. Crea, almacena y elimina tus notas.
            </Card.Text>
            
            <Button href='https://notes-app-react-ivory.vercel.app/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/Notes-app-react' target="_blank" variant="dark" className='cardButton'>REPO</Button>

          </Card.Body>
        </Card>
      </div>

      {/* ACEITE DE OLIVA */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <img src="https://i.ibb.co/sPHTVL0/aceite.png" alt="aceite" border="0"/>
          
          <Card.Body>
            <Card.Title>E-commerce Aceite de Oliva</Card.Title>
            <Card.Text>
              E-commerce construido con React Js. Venta de Aceite de Oliva y Aceitunas.
            </Card.Text>

            <Button href='https://ecommerce-react-lake.vercel.app/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/ecommerce-react' target="_blank" variant="dark" className='cardButton'>REPO</Button>

          </Card.Body>
        </Card>
      </div>

      {/* INSTAGRAM */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <img src="https://i.ibb.co/t8NyGs7/instagram.png" alt="instagram" border="0" />
          <Card.Body>
            <Card.Title>Instagram Clone</Card.Title>
            <Card.Text>
              Clon de red social: Instagram.
            </Card.Text>

            <Button href='https://instagram-clone-umber-one.vercel.app/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/instagram-clone' target="_blank" variant="dark" className='cardButton'>REPO</Button>
            
          </Card.Body>
        </Card>
      </div>
    </div>
    
  )
}

export default Projects