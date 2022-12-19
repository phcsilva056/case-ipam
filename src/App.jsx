import React from 'react';
import { Container } from './assets/css/app/style';
import Header from './components/header';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { loadRequest } from './redux/actions';

const INITIAL_STATE = [
  { id: 0, siglas: '', nome: '', regiao: { id: 0, nome: '', sigla: '' } },
];

function App({
  states = INITIAL_STATE,
  loading,
  error,
  selectedState,
  selectedCity,
}) {
  console.log('app Loop');
  console.log('app', {
    states,
    loading,
    error,
    selectedState,
    selectedCity,
  });
  return (
    <>
      <Header />
      <Container>{loading ? 'Carregando' : states[6]?.nome}</Container>
      <Footer />
    </>
  );
}

const dataProps = (state) => ({
  ...state,
});

export default connect(dataProps, loadRequest)(App);
