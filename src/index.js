import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {acmeStore} from './reducers';
import {createStore} from 'redux';

/**
 * create the redux store from the combined reducers
 * @type {Store<any>}
 */
const store = createStore(acmeStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
	<div>
		<header>
			Basic React/Redux Cart
		</header>
		<App/>
		<footer>
			&copy; 2017, Bob Nickolopoulos.
		</footer>
	</div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
