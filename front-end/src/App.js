import React, { Fragment, Component } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: '',
      userDetail: '',
      selectedUser: ''
    }
    
  }

  componentDidMount(){
   this.getUsers().then(res => {
     this.setState({ users: res }) 
    });
  }

  getUsers = async () => {
    const res = await axios.get('api/v1/users');
    return res.data.users;
  }

  userHobbies = async (userId) => {
    console.log('userHobbies called', userId);
    var request = 'api/v1/hobby/'+userId;
    const res = await axios.get(`api/v1/hobby/${userId}`);
    this.setState({
      userDetail: res.data.hobby,
      selectedUser: userId
    })
  }

  getUsersCallback = async () => {
    this.getUsers().then(res => {
      this.setState({ users: res }) 
     });
  }

  render() {
    const { users, selectedUser } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="messaging">
          <div className="inbox_msg">
          <h2 className="text-center pt-3 pb-2">User Hobbies</h2>
            <UserList users={this.state.users} userHobbies={this.userHobbies.bind(this)} getUsersCallback={this.getUsersCallback.bind(this)} />
            { selectedUser &&
            <UserDetail userDetail={this.state.userDetail} userId={this.state.selectedUser} userHobbies={this.userHobbies.bind(this) }/> }
          </div>
          </div>
        </div>
      </Fragment>
       
    )
  } 
 
}
  
export default App;
