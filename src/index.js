import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';

import {userReducer} from './reducers/userReducer';

const rootReducer=combineReducers({userReducer});
const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));

