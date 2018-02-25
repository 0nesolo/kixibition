import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store from './bootstrap/store';
import history from './bootstrap/history';
import './bootstrap/locale';

import Root from './containers/Root';

/**
 * Render Application
 */
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={Root} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

