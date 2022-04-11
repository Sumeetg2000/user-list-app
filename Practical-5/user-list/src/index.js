import React from 'react';
import * as ReactDomClient from 'react-dom/client'; 
import UserList from './components/userList';

const app =document.getElementById('root');
const root=ReactDomClient.createRoot(app);

root.render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
  
);