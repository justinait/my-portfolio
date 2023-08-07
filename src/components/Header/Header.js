import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>     
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand id='justina' href="/">Justina</Navbar.Brand>
          <Nav className="me-auto rightNavbar">
            <Nav.Link href="/projects">Proyectos</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/education">Formación</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;