import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsContainer() {
  return (
    <div className='projectsContainer'>
      
      {/* JORGELINA */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='./jorgelina.png' />
          <Card.Body>
            <Card.Title>Blog</Card.Title>
            <Card.Text>
              Blog de la artista plástica Jorgelina Parkinson. Muestra sus pinturas separadas por series y su biografía.
            </Card.Text>
            <Button variant="primary">DEMO</Button> 
            {/* https://jorgelinaparkinson.vercel.app/ */}
            <Button variant="primary">REPO</Button>
            {/* https://github.com/justinait/jorgelinaparkinson */}
          </Card.Body>
        </Card>
      </div>

      {/* NOTAS */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='./notes (1).png' />
          <Card.Body>
            <Card.Title>App de notas</Card.Title>
            <Card.Text>
              Aplicación de Notas - Recordatorio. Crea, almacena y elimina tus notas.
            </Card.Text>
            <Button variant="primary">DEMO</Button> 
            {/* https://notes-app-react-ivory.vercel.app/ */}
            <Button variant="primary">REPO</Button>
            {/* https://github.com/justinait/Notes-app-react */}
          </Card.Body>
        </Card>
      </div>

      {/* ACEITE DE OLIVA */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='./aceite.png' />
          <Card.Body>
            <Card.Title>E-commerce Aceite de Oliva</Card.Title>
            <Card.Text>
              E-commerce construido con React Js. Venta de Aceite de Oliva y Aceitunas.
            </Card.Text>
            <Button variant="primary">DEMO</Button> 
            {/* https://ecommerce-react-lake.vercel.app/ */}
            <Button variant="primary">REPO</Button>
            {/* https://github.com/justinait/ecommerce-react */}
          </Card.Body>
        </Card>
      </div>

      {/* INSTAGRAM */}
      <div className='project'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='./instagram.png' />
          <Card.Body>
            <Card.Title>Instagram Clone</Card.Title>
            <Card.Text>
              Clon de red social: Instagram
            </Card.Text>
            <Button variant="primary">DEMO</Button> 
            {/* https://instagram-clone-umber-one.vercel.app/ */}
            <Button variant="primary">REPO</Button>
            {/* https://github.com/justinait/instagram-clone */}
          </Card.Body>
        </Card>
      </div>
    </div>
    
  )
}

export default CardsContainer