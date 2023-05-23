//import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import productSaga from './productSaga';
import rootReducer from './rootReducer';
import createSagaMiddeleware from 'redux-saga';

const sagaMiddleware = createSagaMiddeleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
);
sagaMiddleware.run(productSaga);
export default store;