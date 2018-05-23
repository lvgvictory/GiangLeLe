import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

var store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
