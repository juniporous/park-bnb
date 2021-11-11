import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings } from "../../store/bookings";
import { addBooking } from "../../store/bookings";
import { useHistory } from "react-router";
import './createBooking.css'





const CreateBooking = ({ spotId, spotOwnerId }) => {
    const dispatch = useDispatch();

    const bookings = useSelector(state => Object.values(state.booking));
    useEffect(() => {
      dispatch(getAllBookings());
    }, [dispatch])
 
    const sessionUser = useSelector((state) => state.session.user)
    const clientId = sessionUser.id
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
          spotId,
          spotOwnerId,
          clientId,
          startDate,
          endDate,
        };
        
        if (endDate && startDate) {
          history.push('/bookings')
        }

        return dispatch(addBooking(payload)).catch(
          async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors)
            } 
          } 
        );
        
        

      };
      
      return (
        <>
        <div className='wrapper'>
          <div>
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
        </div>
        <div className='errors'>
          <ul>
          {errors.map((error, idx) => (
            <li className='error-text' key={idx}>{error}</li>
          ))}
         </ul>
        </div>
      </div>
    </>
      )
  };
  
  export default CreateBooking;