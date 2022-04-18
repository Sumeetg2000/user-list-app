import React from 'react';
import * as ReactDomClient from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './reducers/rootReducer';
import UserList from './components/userList/userList';

const app =document.getElementById('root');
const root=ReactDomClient.createRoot(app);

root.render(
  <Provider store={store}>
    <UserList />
  </Provider>,
);