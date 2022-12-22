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
  mapBrazil,
  mapCity,
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
  console.log({
    actions,
    citys,
    districts,
    error,
    loading,
    selectedCity,
    selectedDistrict,
    selectedState,
    states,
    mapBrazil,
    mapCity,
  });

  const state = states.filter((state) => {
    return state.id == selectedState;
  })[0];

  const city = citys.filter((city) => {
    return city.id == selectedCity;
  })[0];

  return (
    <>
      <Header />
      <Container selectedState={selectedState}>
        {/* {loading && 'Carregando'} */}
        <div className="box-primary">
          <div className="box-selects">
            <Select
              arrayOptions={states}
              onChange={setSelectedState}
              selectedValue={selectedState}
              defaultOption={'Selecione um Estado'}
            />
            {!!citys.length && (
              <Select
                arrayOptions={citys}
                onChange={setSelectedCity}
                selectedValue={selectedCity}
                defaultOption={'Selecione uma Cidade'}
              />
            )}
          </div>
          <div className="box-details">
            {!!citys.length && (
              <div>
                <h3>Estado: {state.nome}</h3>
                <span>Sigla: {state.sigla}</span>
                <span>Região: {state.regiao.nome}</span>
                <span>Cidades: {citys.length}</span>
              </div>
            )}
            {!!districts.length && (
              <div>
                <h3>Cidade: {city.nome}</h3>
                <span>Microrregião : {city.microrregiao.nome}</span>
                <span>Mesorregião : {city.microrregiao.mesorregiao.nome}</span>
                <span>Região Imediata: {city['regiao-imediata'].nome}</span>
                <h3>Distritos{` (${districts.length})`}</h3>
                {districts.map((district) => {
                  return <span key={district.id}>{district.nome}</span>;
                })}
              </div>
            )}
          </div>
        </div>

        <div className="box-maps">
          {mapBrazil && (
            <div className="box-map-brazil">
              <div
                className="map-brazil"
                dangerouslySetInnerHTML={{ __html: mapBrazil }}
              />
              <h2>Território: Brasil</h2>
            </div>
          )}
          {mapCity && (
            <div className="box-map-city">
              <div
                className="map-city"
                dangerouslySetInnerHTML={{ __html: mapCity }}
              />
              <h2>Território: {city.nome}</h2>
            </div>
          )}
        </div>
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
