import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BasicRoute from './router/index';
import {
	BrowserRouter
} from 'react-router-dom';

import {
	createStore
} from 'redux'
import {
	Provider,
	connect
} from 'react-redux';
import reducer from './reducer'

import * as serviceWorker from './serviceWorker';
//创建store
const store = createStore(reducer);


ReactDOM.render(<BrowserRouter>
		<Provider store={store}>
			<BasicRoute />
		</Provider>
	</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();