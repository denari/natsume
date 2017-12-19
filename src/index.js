import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import NtReducer from "./app/nt-reducer/NtReducer"

import App from './app/App';

const initialState = {
  items: [
    {
      name: 'test',
      type: 'Section (Generic)',
    },
    {
      name: 'test2',
      type: 'Section (Generic)',
    },
    {
      name: 'test3',
      type: 'Section (Generic)',
    }
  ],
};

const store = createStore(NtReducer, initialState);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
