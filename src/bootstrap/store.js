import {
    compose,
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import { localeReducer as locale } from 'react-localize-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import history from './history';

import userReducers from '../reducers/User';

/**
 * Router middleware
 */
const routerMidWare = routerMiddleware(history);

/**
 * Configure store
 */
const composing = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMidWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

/**
 * Create store
 */
const store = composing(
    combineReducers({
        locale,
        user: userReducers,
        router: routerReducer
    })
);

/**
 * Export store
 */
export default store;