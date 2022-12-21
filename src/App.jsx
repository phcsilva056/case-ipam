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
import Select from './components/select';

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
  const setSelectedDistrict = (e) => {
    dispatch({
      type: ActionTypes.SELECTED_DISTRICT,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <Container>
        {/* {loading && 'Carregando'} */}
        <Select
          arrayOptions={states}
          onChange={setSelectedState}
          selectedValue={selectedState}
          defaultOption={'Selecione um Estado'}
        />
        <Select
          arrayOptions={citys}
          onChange={setSelectedCity}
          selectedValue={selectedCity}
          defaultOption={'Selecione uma Cidade'}
        />
        <Select
          arrayOptions={districts}
          onChange={setSelectedDistrict}
          selectedValue={selectedDistrict}
          defaultOption={'Selecione um Distrito'}
        />
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
