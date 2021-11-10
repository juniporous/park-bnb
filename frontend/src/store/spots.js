import { csrfFetch } from './csrf';


// Define Action Types as Constants
const ADD_SPOTS = 'spots/addSpots'
const ADD_ONE_SPOT = 'spots/addOneSpot'
const REMOVE_ONE_SPOT = 'spot/removeOneSpot';
const UPDATE_ONE_SPOT = 'spot/updateSpot'


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

const updateOneSpot = (payload) => ({
    type: UPDATE_ONE_SPOT,
    payload
  });

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
  const response = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot),
});

  if (response.ok) {
    const data = await response.json();
    dispatch(addOneSpot(data.spot));
  }
};

export const deleteSpot = id => async dispatch => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(removeOneSpot(id));
  }
};

export const updateSpot = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (response.ok) {
      const spot = await response.json();
      dispatch(updateOneSpot(spot));
      return spot;
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
        case UPDATE_ONE_SPOT:
          console.log('!!!!!', action.payload.id) 
        newState = { ...state, [action.payload.id]: { ...action.payload } }
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