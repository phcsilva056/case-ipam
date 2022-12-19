import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './types';

const fetchLoading = () => {
  return {
    type: ActionTypes.FETCH_LOADING,
  };
};

const fetchSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailure = (error) => {
  return {
    type: ActionTypes.FETCH_FAILURE,
    payload: error,
  };
};

const selectedStates = (state) => {
  return {
    type: ActionTypes.SELECTED_STATE,
    payload: state,
  };
};

const selectedCity = (city) => {
  return {
    type: ActionTypes.SELECTED_CITY,
    payload: city,
  };
};

export const loadRequest = createAsyncThunk('get', async (dispatch) => {
  dispatch(fetchLoading());
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    );
    const data = await response.json();
    console.log(data);
    await dispatch(fetchSuccess(data));
    return data;
  } catch (error) {
    console.log('asdas');
    dispatch(fetchFailure(error));
  }

  //   dispatch(fetchLoading());
  //   await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
  //     .then(async (response) => await response.json())
  //     .then((json) => {
  //       dispatch(fetchSuccess(json));
  //       return json;
  //     })
  //     .catch((error) => dispatch(fetchFailure(error)));
});

// export const loadRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchLoading());
//     fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch(fetchSuccess(json));
//         return json;
//       })
//       .catch((error) => dispatch(fetchFailure(error)));
//   };
// };
