import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { deleteSpot } from "../../store/spots";
import EditSpotForm from "../UpdateSpot";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])
  const sessionUser = useSelector((state) => state.session.user)
  console.log(sessionUser.id)
  const mySpots = spots.find(spot => spot.ownerId === sessionUser.id)
  console.log(mySpots)

  const handleDelete = (id) => {
    dispatch(deleteSpot(id));
  };
  return (
    <div>
        My Spots
        <ul>
          {spots?.map(spot => (
            spot.ownerId === sessionUser.id?
            <li key={spot.id}>Spot {spot.id} - {spot.address}, {spot.city}
              <button onClick={() => handleDelete(spot.id)}>
              Delete
              </button>
              <div>
                <EditSpotForm spotId={spot.id}/>
              </div>
            </li> 
            : null
          ))}
        </ul>
    </div>
  );
};
export default Spots;