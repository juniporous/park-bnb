import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../../store/bookings";
import { addBooking } from "../../store/bookings";
import { useHistory } from "react-router";




const CreateBooking = ({ spotId, spotOwnerId }) => {
    const dispatch = useDispatch();

    const bookings = useSelector(state => Object.values(state.booking));
    useEffect(() => {
      dispatch(getAllBookings());
    }, [dispatch])
 
    const sessionUser = useSelector((state) => state.session.user)
    const clientId = sessionUser.id
    // const [spotId, setSpotId] = useState();
    // const [spotOwnerId, setSpotOwnerId] = useState();
    //const [clientId, setClientId] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
          spotId,
          spotOwnerId,
          clientId,
          startDate,
          endDate,
        };
        //dispatch(addSpot(payload));
        return dispatch(addBooking(payload))
        
        //history.push('/');
      };
      
      return (
        <form onSubmit={handleSubmit} >
        <div>
          <label>
            <input
              className = 'login-input'
              type="date"
              max={endDate}
              onChange={(e) => setStartDate(e.target.value)}
              // ; setSpotId(spot.id); setSpotOwnerId(spot.ownerId); setClientId(sessionUser.id)
              value={startDate}
              placeholder='Start Date  yyyy-mm-dd'

            />
          </label>
        </div>
        <div>
          <label>
            <input
              className = 'login-input'
              type="date"
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              placeholder='End date   yyyy-mm-dd'
            />
          </label>
        </div>
        <button className='button-login' type='submit'>
          Book Spot
        </button>
      </form>
      )
  };
  
  export default CreateBooking;