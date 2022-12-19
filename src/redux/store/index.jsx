import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers';
import ReduxThunk from 'redux-thunk';

export const store = createStore(reducers, applyMiddleware(ReduxThunk));
