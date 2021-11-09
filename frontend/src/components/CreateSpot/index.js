import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addSpot } from '../../store/spots';


const CreateSpot = () => {
  const [name, setName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)

  console.log(sessionUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      ownerId,
      state,
      city,
      address,
      imgUrl,
      description
    };
    dispatch(addSpot(payload));

    history.push('/');
  };

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div >
      <h3>Add A Spot</h3>
      <form onSubmit={handleSubmit} >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Spot Name'
        />
        <input
          onChange={(e) => setOwnerId(e.target.value)}
          value={ownerId}
          placeholder='ownerId'
        />
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder='State'
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder='City'
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder='Address'
        />
        <input
          onChange={(e) => setImgUrl(e.target.value)}
          value={imgUrl}
          placeholder='Image URL'
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder='Spot Description'
        />
        <button className='submit-button' type='submit'>
          Add Spot
        </button>
      </form>
    </div>
  );
};
export default CreateSpot;