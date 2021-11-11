import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { getAllBookings } from "../../store/bookings";
import { deleteSpot } from "../../store/spots";
import { updateSpot } from "../../store/spots";
import EditSpotForm from "../UpdateSpot";
// import './spots.css'

const MyBookings = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  const bookings = useSelector(state => Object.values(state.booking));
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch])

  const sessionUser = useSelector((state) => state.session.user)
  
  //const mySpots = spots.find(spot => spot.ownerId === sessionUser.id)
  console.log('!!!!!!', bookings)


//   const handleDelete = (id) => {
//     dispatch(deleteSpot(id));
//   };
  return (
    <div>
        <h3 className='spots-header'>
          My Bookings
        </h3>
        <ul className='ul'>
          {bookings?.map(booking => (
            booking.clientId === sessionUser.id?
            <li key={booking.id}>
              <div class="card">
                <div>
                  <img className='img' src={booking.Spot?.imgUrl} alt='No Image For This Spot'/>
                </div>
                <div>
                  <h4>Start Date: {booking.startDate}</h4>
                  <h4>End Date: {booking.endDate}</h4>
                  <p>{booking.Spot?.address}, {booking.Spot?.city} {booking.Spot?.state}</p>
                  <p>{booking.Spot?.description}</p>
                  <div>
                  </div>
                </div>
                {/* <div className='delete-button-div'>
                    <button className='delete-button' onClick={() => handleDelete(spot.id)}>
                    Delete Spot
                    </button>
                </div> */}
              </div>
            </li> 
            : null //end of ternary from line 27
          ))}
        </ul>
    </div>
  );
};
export default MyBookings;