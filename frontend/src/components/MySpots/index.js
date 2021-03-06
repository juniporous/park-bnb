import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { deleteSpot } from "../../store/spots";
import { updateSpot } from "../../store/spots";
import { useHistory } from "react-router";
import EditSpotForm from "../UpdateSpot";
import './spots.css'

const Spots = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)
  const history = useHistory();

  if(!sessionUser) {
    history.push('/')
  }
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])
  // const sessionUser = useSelector((state) => state.session.user)
  
  // //const mySpots = spots.find(spot => spot.ownerId === sessionUser.id)

  // const history = useHistory();

  // if(!sessionUser) {
  //   history.push('/')
  // }

  const handleDelete = (id) => {
    dispatch(deleteSpot(id));
  };
  return (
    <div>
        <h3 className='spots-header'>
          My Spots
        </h3>
        <ul className='ul'>
          {spots?.map(spot => (
            spot?.ownerId === sessionUser?.id?
            <li key={spot.id}>
              <div class="card">
                <div>
                  <img className='img' src={spot.imgUrl} alt='No Image For This Spot'/>
                </div>
                <div class="container">
                  <h4>{spot.name}</h4>
                  <p>{spot.address}, {spot.city} {spot.state}</p>
                  <p>{spot.description}</p>
                  <div>
                    <EditSpotForm spotId={spot.id}/>
                  </div>
                </div>
                <div className='delete-button-div'>
                    <button className='delete-button' onClick={() => handleDelete(spot.id)}>
                    Delete Spot
                    </button>
                </div>
              </div>
            </li> 
            : null //end of ternary from line 27
          ))}
        </ul>
    </div>
  );
};
export default Spots;