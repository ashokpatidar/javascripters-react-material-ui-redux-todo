import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer); // pass reducer

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}> 
        <App />
    </Provider></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
