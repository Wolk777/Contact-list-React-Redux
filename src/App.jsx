import React, {Fragment} from 'react';
import UserList from './containers/userList';
import Title from './components/title/title';
import './App.css';

const App =() => (
  <Fragment>
    <Title title='UserList App'/>
    <UserList />
  </Fragment>
);

export default App;