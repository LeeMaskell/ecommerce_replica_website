import { createStore } from 'redux';
import { globalReducer } from './globalSlice.js';

export const store = createStore(globalReducer);