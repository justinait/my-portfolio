import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects'
import './Projects.css'

function Projects() {
  return (
    <div className='projectsContainer'>
      
      {/* ESKAMAQ */}
      <div className='project'>

        <Card style={{ width: '18rem' }}>

        <img src="https://i.ibb.co/ZgVT9Q9/eskamaq.png" alt="eskamaq" border="0" className='projectImage' ></img>

          <Card.Body>

            <Card.Title>Página Web</Card.Title>

            <Card.Text>
              Página web Eskamaq. Muestra de maquinaria grande. Muestra sus productos separados por marcas y clasificación. Maquetación, desarrollo, deploy.
            </Card.Text>
            
            <Button href='https://eskamaq.vercel.app/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/eskamaq' target="_blank" variant="dark" className='cardButton'>REPO</Button>

          </Card.Body>

        </Card>
      </div>

      {/* JORGELINA */}
      <div className='project'>

        <Card style={{ width: '18rem' }}>

          <img src="https://i.ibb.co/ngLDpgD/jorgelina.png" alt="jorgelina" border="0" className='projectImage' />

          <Card.Body>

            <Card.Title>Página Web</Card.Title>

            <Card.Text>
              Blog de la artista plástica Jorgelina Parkinson. Exhibe sus pinturas separadas por series. Maquetación, desarrollo, deploy.
            </Card.Text>
            
            <Button href='https://jorgelinaparkinson.com/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/jorgelinaparkinson' target="_blank" variant="dark" className='cardButton'>REPO</Button>

          </Card.Body>

        </Card>
      </div>
      
      {/* REGIA */}
      <div className='project'>

      <Card style={{ width: '18rem' }}>

        <img src="https://i.ibb.co/KL1DLCM/regia.png" alt="regia" border="0" className='projectImage' />
        
        <Card.Body>

          <Card.Title>Página Web</Card.Title>

          <Card.Text>
            Página web para publicitar maquillaje semipermanente. Desarrollo y deploy.
          </Card.Text>
          
          <Button href='https://regia.ar/' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
          <Button href='https://github.com/justinait/regia' target="_blank" variant="dark" className='cardButton'>REPO</Button>

        </Card.Body>

      </Card>

      </div>
      {/* NOTAS */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <img src="https://i.ibb.co/LvczTQ1/notes-1.png" alt="notes-1" border="0" className='projectImage' />
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
          <img src="https://i.ibb.co/sPHTVL0/aceite.png" alt="aceite" border="0" className='projectImage'/>
          
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
          <img src="https://i.ibb.co/t8NyGs7/instagram.png" alt="instagram" border="0" className='projectImage' />
          <Card.Body>
            <Card.Title>Instagram Clone</Card.Title>
            <Card.Text>
              Clon de red social: Instagram.
            </Card.Text>
            
            {/*  href='https://instagram-clone-umber-one.vercel.app/' */}
            <Button style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/instagram-clone' target="_blank" variant="dark" className='cardButton'>REPO</Button>
            
          </Card.Body>
        </Card>
      </div>

      {/* css card */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <img src="https://i.ibb.co/WVZCKyW/Captura-de-pantalla-33.png" alt="Captura-de-pantalla-33" border="0" className='projectImage'/>
          <Card.Body>
            <Card.Title>CSS Challenge</Card.Title>
            <Card.Text>
              Challenge de css. Copia exacta de Card Preview.
            </Card.Text>

            <Button href='https://ibb.co/tLgRCsM' target="_blank" style={{textDecoration:'none'}} variant="outline-dark" className='cardButton'>DEMO</Button> 
            <Button href='https://github.com/justinait/product-preview-card-challenge' target="_blank" variant="dark" className='cardButton'>REPO</Button>
            
          </Card.Body>
        </Card>
      </div>
    </div>
    
  )
}

export default Projects