import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
  states: [],
  loading: false,
  error: false,
  selectedState: '',
  selectedCity: '',
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_SUCCESS:
      return { states: action.payload, loading: false, error: false };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// export const reducers = combineReducers({
//   allStates: statesReducer,
// });
