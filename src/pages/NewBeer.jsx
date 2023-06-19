import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddABeer = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleName = event => {
    setName(event.target.value);
  };
  const handleDescription = event => {
    setDescription(event.target.value);
  };
  const handleTagline = event => {
    setTagline(event.target.value);
  };
  const handleFirstBrewed = event => {
    setFirstBrewed(event.target.value);
  };
  const handlebrewersTips = event => {
    setBrewersTips(event.target.value);
  };
  const handleAttenuationLevel = event => {
    setAttenuationLevel(event.target.value);
  };
  const handleContributedBy = event => {
    setContributedBy(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    let newBeer = {
      name,
      description,
      tagline,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };

    try {
      const test = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      );
      console.log(test);

      navigate(`/beers`);
    } catch (error) {
      console.log(error);
    }
    setName('');
    setDescription('');
    setTagline('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel(0);
    setContributedBy('');
  };
  return (
    <div className='container'>
      <h1>Add a new Beer</h1>
      <form onSubmit={handleSubmit}>
        <div class='mb-3'>
          <label className='form-label me-1'>Name</label>
          <input
            className='form-control'
            type='text'
            name='name'
            value={name}
            onChange={handleName}
          />
        </div>
        <div class='mb-3'>
          <label className='form-label me-1'>Tagline</label>
          <input
            className='form-control'
            type='text'
            name='tagline'
            value={tagline}
            onChange={handleTagline}
          />
        </div>

        <div class='mb-3'>
          <label className='form-label me-1'>Description</label>
          <input
            className='form-control'
            type='text'
            name='description'
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div class='mb-3'>
          <label className='form-label me-1'>First Brewed</label>
          <input
            className='form-control'
            type='text'
            name='first_brewed'
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </div>

        <div class='mb-3'>
          <label className='form-label me-1'>Brewer Tips</label>
          <input
            className='form-control'
            type='text'
            name='brewers_tips'
            value={brewersTips}
            onChange={handlebrewersTips}
          />
        </div>

        <div class='mb-3'>
          <label className='form-label me-1'>Attenuation Level</label>
          <input
            className='form-control'
            type='number'
            name='attenuation_level'
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
        </div>

        <div class='mb-3'>
          <label className='form-label me-1'>Contributed By</label>
          <input
            className='form-control'
            type='text'
            name='contributed_by'
            value={contributedBy}
            onChange={handleContributedBy}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
        >
          Add a New Beer
        </button>
      </form>
    </div>
  );
};

export default AddABeer;
