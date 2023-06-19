import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import randomBeersImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className='pt-4'>
      <div>
        <img
          src={beersImg}
          alt='beers'
          className='pb-2'
        />
        <Link to='/beers'>
          <h2>All Beers</h2>
        </Link>
        <p>See all the available beers</p>
      </div>
      <div>
        <img
          src={randomBeersImg}
          alt='random beer'
          className='pb-2'
        />
        <Link to='/beers/random-beer'>
          <h2>Random Beers</h2>
        </Link>
        <p>Want to be surprised? Click for a random beer!</p>
      </div>
      <div>
        <img
          src={newBeerImg}
          alt=''
          className='pb-2'
        />
        <Link to='/beers/new-beer'>
          <h2>New Beer</h2>
        </Link>
        <p>Add a new Beer to the list!</p>
      </div>
    </div>
  );
};

export default HomePage;
