import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const defaultState = {
	todos: []
};

const isClient = typeof window !== 'undefined';

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV != 'production' ? window.devToolsExtension && window.devToolsExtension() : f => f
);

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers);

export default store;
