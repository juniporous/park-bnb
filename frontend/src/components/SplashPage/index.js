import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import { useHistory } from "react-router";
import EditSpotForm from "../UpdateSpot";
import './splash.css'

const SplashPage = () => {
 
  const sessionUser = useSelector((state) => state.session.user)
  
  //const mySpots = spots.find(spot => spot.ownerId === sessionUser.id)

  const history = useHistory();

  if(sessionUser) {
    history.push('/bookings')
  }

  
  return (
    <div className='splash-wrapper-div'>
        <div className='horizontal-center-div'>
            <h2 className='arial-font'>
            ParkBnb
            </h2>
        </div>
        <div className='horizontal-center-div'>
            <p className='arial-font'>
                Do you like AirBnb? Do you like parking?
            </p>
            <p className='arial-font'>
                Check out ParkBnb, the Airbnb of parking.
            </p>
            <p className='arial-font'>
                Book a parking spot, rent out your own...
            </p>
            <h3 className='center-text'>with ParkBnb</h3>

        </div>
       
    </div>
  );
};
export default SplashPage;