import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { deleteSpot } from "../../store/spots";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])


  const handleDelete = (id) => {
    dispatch(deleteSpot(id));
  };
  return (
    <div>
        spots test
        <ul>
          {spots?.map(spot => (
            <li key={spot.id}>Spot {spot.id} - {spot.address}, {spot.city}
              <button onClick={() => handleDelete(spot.id)}>
              Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};
export default Spots;