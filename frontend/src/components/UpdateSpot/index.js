import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpot } from '../../store/spots';

const EditSpotForm = ({ spotId }) => {
  const spot = useSelector(state => state.spot[spotId]);
  const dispatch = useDispatch();

  const [name, setName] = useState(spot.name);

  const updateName = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...spot,
      name
    };

    const updatedName = await dispatch(updateSpot(payload));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <button type="submit">Update Spot Name</button>
      </form>
    </section>
  );
};

export default EditSpotForm;