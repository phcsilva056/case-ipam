import React, { useEffect } from 'react';
import { Container } from './assets/css/app/style';
import Header from './components/header';
import Footer from './components/footer';
import { connect, useDispatch } from 'react-redux';
import {
  loadCitysRequest,
  loadDistrictsRequest,
  loadStatesRequest,
} from './redux/actions';
import { bindActionCreators } from 'redux';
import { ActionTypes } from './redux/actions/types';

const App = ({
  actions,
  citys,
  districts,
  error,
  loading,
  selectedCity,
  selectedDistrict,
  selectedState,
  states,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadStates = async () => {
      await actions.loadStates(dispatch);
    };
    loadStates();
  }, []);

  const setSelectedState = (e) => {
    dispatch({
      type: ActionTypes.SELECTED_STATE,
      payload: e.target.value,
    });
    actions.loadCitys({ dispatch, id: e.target.value });
  };

  const setSelectedCity = (e) => {
    dispatch({
      type: ActionTypes.SELECTED_CITY,
      payload: e.target.value,
    });
    actions.loadDistricts({ dispatch, id: e.target.value });
  };

  console.log('app Loop', {
    actions,
    citys,
    districts,
    error,
    loading,
    selectedCity,
    selectedDistrict,
    selectedState,
    states,
  });
  const compare = (a, b) => {
    if (a.nome.normalize('NFD') < b.nome.normalize('NFD')) return -1;
    if (a.nome.normalize('NFD') > b.nome.normalize('NFD')) return 1;
    return 0;
  };
  return (
    <>
      <Header />
      <Container>
        {loading ? 'Carregando' : states[6]?.nome}
        {states.length && (
          <select value={selectedState} onChange={setSelectedState}>
            <option value={''} disabled={true}>
              Selecione um Estado
            </option>
            {states.sort(compare).map(({ id, nome }) => {
              return (
                <option key={id} value={id}>
                  {nome}
                </option>
              );
            })}
          </select>
        )}
        {citys.length && (
          <select value={selectedCity} onChange={setSelectedCity}>
            <option value={''} disabled={true}>
              Selecione uma Cidade
            </option>
            {citys.sort(compare).map(({ id, nome }) => {
              return (
                <option key={id} value={id}>
                  {nome}
                </option>
              );
            })}
          </select>
        )}
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({ ...state });

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadStates: bindActionCreators(loadStatesRequest, dispatch),
      loadCitys: bindActionCreators(loadCitysRequest, dispatch),
      loadDistricts: bindActionCreators(loadDistrictsRequest, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
