import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provide } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
