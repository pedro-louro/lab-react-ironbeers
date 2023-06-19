import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );

        setRandomBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRandomBeer();
  }, []);

  return (
    <div>
      <h1>Random Beer</h1>
      <div>
        <img
          src={randomBeer.image_url}
          alt='beer'
          width={150}
        />
        <div>
          <h3>
            {randomBeer.name} {randomBeer.attenuation_level}
          </h3>
          <h6>
            {randomBeer.tagline} <b>{randomBeer.first_brewed}</b>
          </h6>
          <p>{randomBeer.description}</p>
          <p>
            <b>Contributed by:</b> {randomBeer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RandomBeer;
