import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import rootSaga from '../src/sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer, applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga);
    return store;
}