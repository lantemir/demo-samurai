import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
// import store from './redux/store';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";



  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );


//rerenderEntireTree(store.getState());

// store.subscribe ( () => {
//   //let state = store.getState();
//   rerenderEntireTree(state);
// });  перерисовка



serviceWorker.unregister();