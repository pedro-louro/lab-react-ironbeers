import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BeerDetails = () => {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();
  const requestURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  useEffect(() => {
    const fetchBeerID = async () => {
      try {
        const response = await axios.get(requestURL);

        console.log(response);
        setBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBeerID();
  }, [requestURL]);

  console.log(setBeer);
  return (
    <div>
      <h1>Beer Details</h1>
      <div>
        <img
          src={beer.image_url}
          alt='beer'
          width={200}
        />
        <div>
          <h3>
            {beer.name} {beer.attenuation_level}
          </h3>
          <h6>
            {beer.tagline} <b>{beer.first_brewed}</b>
          </h6>
          <p>{beer.description}</p>
          <p>
            <b>Contributed by:</b> {beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BeerDetails;
