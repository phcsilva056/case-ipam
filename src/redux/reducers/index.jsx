import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
  states: [],
  citys: [],
  districts: [],
  loading: true,
  error: false,
  selectedCity: '',
  selectedDistrict: '',
  selectedState: '',
  mapBrazil: '',
  mapCity: '',
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOADING:
      return { ...state, loading: true };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        states: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.FETCH_FAILURE:
      return { ...state, loading: false, error: true };
    case ActionTypes.FETCH_SUCCESS_CITYS:
      return { ...state, citys: action.payload, loading: false, error: false };
    case ActionTypes.FETCH_SUCCESS_DISTRICTS:
      return {
        ...state,
        districts: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.SELECTED_STATE:
      return {
        ...state,
        loading: false,
        error: false,
        selectedState: action.payload,
        selectedCity: '',
        selectedDistrict: '',
        mapCity: '',
        districts: [],
      };
    case ActionTypes.SELECTED_CITY:
      return {
        ...state,
        loading: false,
        error: false,
        selectedCity: action.payload,
        selectedDistrict: '',
      };
    case ActionTypes.FETCH_SUCCESS_MAP_BRAZIL:
      return {
        ...state,
        mapBrazil: action.payload,
      };
    case ActionTypes.FETCH_SUCCESS_MAP_CITY:
      return {
        ...state,
        mapCity: action.payload,
      };
    default:
      return { ...state };
  }
};
