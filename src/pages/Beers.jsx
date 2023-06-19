import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBeers();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map(beer => {
        return (
          <div key={beer._id}>
            <img
              src={beer.image_url}
              alt='beer'
              width={80}
            />
            <div>
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <h4>{beer.tagline}</h4>
              <p>
                <b>Contributed by:</b> {beer.contributed_by}
              </p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
