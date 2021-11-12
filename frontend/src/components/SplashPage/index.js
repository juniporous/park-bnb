import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session"
import { useHistory } from "react-router";


import './splash.css'

const SplashPage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)
  
  //const mySpots = spots.find(spot => spot.ownerId === sessionUser.id)
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if(sessionUser) {
    history.push('/mySpots')
  }

  const demoLogin = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
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
            <div className='button-div'>
            <button className='login-button' onClick={demoLogin}>Log in as guest</button>
            </div>
        </div>
       
    </div>
  );
};
export default SplashPage;