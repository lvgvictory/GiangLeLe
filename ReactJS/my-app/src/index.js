import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './Demo';

ReactDOM.render(<Demo />, document.getElementById('root'));// lay 1 cai selector <App /> se duoc do vao id = root
registerServiceWorker();
