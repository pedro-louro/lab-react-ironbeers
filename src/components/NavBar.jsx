import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png';

const NavBar = () => {
  return (
    <nav
      className='p-2'
      style={{ backgroundColor: '#3DC4FC' }}
    >
      <Link to='/'>
        <img
          src={homeIcon}
          alt=''
          width='3%'
        />
      </Link>
    </nav>
  );
};

export default NavBar;
