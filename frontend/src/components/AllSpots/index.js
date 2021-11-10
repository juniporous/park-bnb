import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import './allSpots.css'

const AllSpots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  return (
    <div>
        <h3 className='spots-header'>
          All The Spots
        </h3>
        <ul className='ul'>
          {spots?.map(spot => (
            <li key={spot.id}>
              <div className="card">
                <div>
                  <img className='img' src={spot.imgUrl} alt="No Image For This Spot"/>
                </div>
                <div class="container">
                  <h4>{spot.name}</h4>
                  <p>{spot.address}, {spot.city} {spot.state}</p>
                  <p>{spot.description}</p>
                </div>
              </div>
            </li> 
          ))}
        </ul>
    </div>
  );
};
export default AllSpots;