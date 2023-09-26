import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>     
      <div className='navbar'>
        <Link to={'/'} className='brand'> Justina        </Link>

        <div className='rightNavbar'>
          <Link to={'/projects'} className='navbarItem'> Proyectos        </Link>
          <Link to={'/about'} className='navbarItem'> Sobre mí        </Link>

        </div>
      </div>
      
      
      
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand id='justina' href="/">Justina</Navbar.Brand>
          <Nav className="me-auto rightNavbar">
            <Nav.Link href="/projects">Proyectos</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/education">Formación</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Header;