import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { UserProvider } from './context/Auth';
ReactDOM.render(
  <UserProvider>
  <App />,
  </UserProvider>,
  document.querySelector('#root')
)