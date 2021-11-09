//added for xsrf token
import Cookies from 'js-cookie'


// Define Action Types as Constants
const ADD_SPOTS = 'spots/addSpots'
const ADD_ONE_SPOT = 'spots/addOneSpot'
const REMOVE_ONE_SPOT = 'spot/removeOneSpot';


// Define Action Creators
const addSpots = payload => {
    return {
        type: ADD_SPOTS,
        payload
    }
}

const addOneSpot = payload => {
    return {
        type: ADD_ONE_SPOT,
        payload
    }
}

const removeOneSpot = id => {
    return { type: REMOVE_ONE_SPOT, payload: id };
  };

// Define Thunk Creators
export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/spots');
    if (response.ok) {
      const data = await response.json();
      dispatch(addSpots(data.spots));
    }
  };

export const addSpot = spot => async dispatch => {
  const response = await fetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')},
    body: JSON.stringify(spot),
});

  if (response.ok) {
    const data = await response.json();
    dispatch(addOneSpot(data.spot));
  }
};



export const deleteSpot = id => async dispatch => {
    const response = await fetch(`/api/spots/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      dispatch(removeOneSpot(id));
    }
  };

// Define an initial state
const initialState = {};

// Define a reducer

const spotReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case ADD_SPOTS:
            action.payload.forEach(spot => (newState[spot.id] = spot));
            return newState;
        case ADD_ONE_SPOT:
            newState = { ...state, [action.payload.id]: action.payload};
            return newState;
        case REMOVE_ONE_SPOT:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state
    }
    
}

export default spotReducer;