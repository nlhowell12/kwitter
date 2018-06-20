import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './reducers';
import Homepage from "./components/Homepage.jsx"

 
ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
            
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
