import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App.js';
import reducers from './reducers';

import './index.scss';


const store = createStore(reducers,applyMiddleware(reduxThunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,document.querySelector('#root'));