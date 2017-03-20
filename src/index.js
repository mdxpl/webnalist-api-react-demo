import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import {BrowserRouter} from 'react-router-dom';
import {IntlProvider} from 'react-intl';

import App from './components/App';
import {Config} from './config';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={Config.locale.fallback}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
    , document.getElementById('app')
);


