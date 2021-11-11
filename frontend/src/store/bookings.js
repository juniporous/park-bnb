import { csrfFetch } from './csrf';


// Define Action Types as Constants
const ADD_BOOKINGS = 'bookings/addBookings'
const ADD_ONE_BOOKING = 'bookings/addOneBooking'
const REMOVE_ONE_BOOKING = 'bookings/removeOneBooking';



// Define Action Creators
const addBookings = payload => {
    return {
        type: ADD_BOOKINGS,
        payload
    }
}

const addOneBooking = payload => {
    return {
        type: ADD_ONE_BOOKING,
        payload
    }
}


const removeOneBooking = id => {
    return { type: REMOVE_ONE_BOOKING, payload: id };
  };

// Define Thunk Creators
export const getAllBookings = () => async dispatch => {
    const response = await fetch('/api/bookings');
    if (response.ok) {
      const data = await response.json();
      dispatch(addBookings(data.bookings));
    }
  };

export const addBooking = booking => async dispatch => {
  const response = await csrfFetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
});

  if (response.ok) {
    const data = await response.json();
    dispatch(addOneBooking(data.booking));
  }
};

export const deleteBooking = id => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(removeOneBooking(id));
  }
};



// Define an initial state
const initialState = {};

// Define a reducer

const bookingReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case ADD_BOOKINGS:
            action.payload.forEach(booking => (newState[booking.id] = booking));
            return newState;
        case ADD_ONE_BOOKING:
            newState = { ...state, [action.payload.id]: action.payload};
            return newState;
        case REMOVE_ONE_BOOKING:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state
    }
    
}

export default bookingReducer;