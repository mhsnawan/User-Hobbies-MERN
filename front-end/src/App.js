import React, { Fragment } from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="messaging">
        <div className="inbox_msg">
        <h2 className="text-center pt-3 pb-2">User Hobbies</h2>
          <UserList />
          <UserDetail />
        </div>
        </div>
      </div>
    </Fragment>
     
  )
 
}
  
export default App;
