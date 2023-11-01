import { Link } from 'react-router-dom';
import './Header.css'

function Header({customStyle}) {
  return (
    <>     
      <div className={customStyle ? 'navbar whiteNavbar' : 'navbar'}>
        <Link to={'/'} className='brand'> Justina        </Link>

        <div className='rightNavbar'>
          <Link to={'/webpages'} className='navbarItem'> Proyectos        </Link>
          <Link to={'/about'} className='navbarItem'> Sobre mí        </Link>

        </div>
      </div>
    </>
  );
}

export default Header;