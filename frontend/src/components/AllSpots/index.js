import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { getAllBookings } from "../../store/bookings";
import { addBooking } from "../../store/bookings";
import { useHistory } from "react-router";
import CreateBooking from "../CreateBooking";
import './allSpots.css'




const AllSpots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  const bookings = useSelector(state => Object.values(state.booking));
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch])

  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user)

  if(!sessionUser) {
    history.push('/')
  }
  
  return (
    <div>
        <h3 className='spots-header'>
          Book A Spot
        </h3>
        <ul className='ul'>
          {spots?.map(spot => (
            <li key={spot.id}>
              <div className="card">
                <div>
                  <img className='img' src={spot.imgUrl}/>
                </div>
                <div class="container">
                  <h4>{spot.name}</h4>
                  <p>{spot.address}, {spot.city} {spot.state}</p>
                  <p>{spot.description}</p>
                  <CreateBooking spotId={spot.id} spotOwnerId={spot.ownerId}/>
                </div>
              </div>
            </li> 
          ))}
        </ul>
    </div>
  );
};
export default AllSpots;