import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import WebPage from './components/WebPage';
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <WebPage/>
  </Provider>, 
  document.getElementById('fieldToShow')
);