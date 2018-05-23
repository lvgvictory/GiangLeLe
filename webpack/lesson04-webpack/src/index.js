import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import appReducers from './reducer/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);