import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
