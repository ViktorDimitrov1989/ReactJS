import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import store from './calculator/Calculator';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />, document.getElementById('root')
    </Provider>
);
registerServiceWorker();