import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import  JobReducer from './reducers/jobreducers';
import  AjaxLoadingReducer from './reducers/ajaxreeducers';

import App from './App';


import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
 JobReducer,
AjaxLoadingReducer
   
});

const store = createStore(rootReducer,composeEnhancers());



ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root')
);
