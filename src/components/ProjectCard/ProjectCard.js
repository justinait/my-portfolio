import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./Captura de pantalla (13).png' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">DEMO</Button>
        <Button variant="primary">REPO</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;