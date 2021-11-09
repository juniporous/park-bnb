// Define Action Types as Constants
const ADD_SPOTS = 'spots/addSpots'

// Define Action Creators
const addSpots = payload => {
    return {
        type: ADD_SPOTS,
        payload
    }
}

// Define Thunk Creators
export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/spots');
    if (response.ok) {
      const data = await response.json();
      dispatch(addSpots(data.spots));
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
        default:
            return state
    }
    
}

export default spotReducer;