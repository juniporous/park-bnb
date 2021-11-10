import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { addSpot } from '../../store/spots';
import './createSpot.css'

const CreateSpot = () => {
  const [name, setName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)

  const id = sessionUser.id

  console.log(sessionUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      name,
      ownerId: id,
      state,
      city,
      address,
      imgUrl,
      description
    };
    //dispatch(addSpot(payload));
    return dispatch(addSpot(payload)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors)
        } else {
          history.push('/');
        }
      } 
    );
    //history.push('/');
  };

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div >
      <h3>Add A Spot</h3>
      <form onSubmit={handleSubmit} >
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Spot Name'
            />
          </label>
        </div>
        {/* <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setOwnerId(e.target.value)}
              value={ownerId}
              placeholder='ownerId'
            />
          </label>
        </div> */}
        <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setState(e.target.value)}
              value={state}
              placeholder='State'
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder='City'
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder='Address'
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              placeholder='Image URL'
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className = 'login-input'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder='Spot Description'
            />
          </label>
        </div>
        <button className='button-login' type='submit'>
          Add Spot
        </button>
      </form>
    </div>
  );
};
export default CreateSpot;