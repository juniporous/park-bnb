import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import Spots from "./components/MySpots";
import CreateSpot from "./components/CreateSpot";
import AllSpots from "./components/AllSpots";
import MyBookings from "./components/MyBookings";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/mySpots">
            <Spots/>
          </Route>
          <Route path="/create">
            <CreateSpot/>
          </Route>
          <Route path="/spots">
            <AllSpots/>
          </Route>
          <Route path="/bookings">
            <MyBookings/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;