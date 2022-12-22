import { createAsyncThunk } from '@reduxjs/toolkit';
import { compare } from '../../utils/utils';
import { ActionTypes } from './types';

const BASE_URL = 'https://servicodados.ibge.gov.br/api';

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

const fetchSuccessMapBrazil = (data) => {
  return {
    type: ActionTypes.FETCH_SUCCESS_MAP_BRAZIL,
    payload: data,
  };
};

const fetchSuccessMapCity = (data) => {
  return {
    type: ActionTypes.FETCH_SUCCESS_MAP_CITY,
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
    const response = await fetch(`${BASE_URL}/v1/localidades/estados/`);
    const responseMap = await fetch(
      `${BASE_URL}/v3/malhas/paises/BR?intrarregiao=UF`
    );
    const data = await response.json();
    let dataMap = await responseMap.text();

    for (const state of data)
      dataMap = dataMap.replace(`id="${state.id}"`, `id="UF-${state.id}"`);

    dispatch(fetchSuccessMapBrazil(dataMap));
    dispatch(fetchSuccess(data.sort(compare)));
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
        `${BASE_URL}/v1/localidades/estados/${id}/municipios`
      );
      const data = await response.json();
      dispatch(fetchSuccessCitys(data.sort(compare)));
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
        `${BASE_URL}/v1/localidades/municipios/${id}/distritos`
      );
      const responseMap = await fetch(`${BASE_URL}/v3/malhas/municipios/${id}`);
      const dataMap = await responseMap.text();
      dispatch(fetchSuccessMapCity(dataMap));
      const data = await response.json();
      dispatch(fetchSuccessDistricts(data.sort(compare)));
      return data;
    } catch (error) {
      dispatch(fetchFailure(error));
      return !!error;
    }
  }
);
