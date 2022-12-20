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

const fetchSuccessCitys = (data) => {
  return {
    type: ActionTypes.FETCH_SUCCESS_CITYS,
    payload: data,
  };
};

const fetchSuccessDistricts = (data) => {
  return {
    type: ActionTypes.FETCH_SUCCESS_DISTRICTS,
    payload: data,
  };
};

const fetchFailure = (error) => {
  return {
    type: ActionTypes.FETCH_FAILURE,
    payload: error,
  };
};

export const loadStatesRequest = createAsyncThunk('get', async (dispatch) => {
  dispatch(fetchLoading());
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    );
    const data = await response.json();
    dispatch(fetchSuccess(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error));
    return !!error;
  }
});

export const loadCitysRequest = createAsyncThunk(
  'get',
  async ({ dispatch, id }) => {
    dispatch(fetchLoading());
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
      );
      const data = await response.json();
      dispatch(fetchSuccessCitys(data));
      return data;
    } catch (error) {
      dispatch(fetchFailure(error));
      return !!error;
    }
  }
);

export const loadDistrictsRequest = createAsyncThunk(
  'get',
  async ({ dispatch, id }) => {
    dispatch(fetchLoading());
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}/distritos`
      );
      const data = await response.json();
      dispatch(fetchSuccessDistricts(data));
      return data;
    } catch (error) {
      dispatch(fetchFailure(error));
      return !!error;
    }
  }
);

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
