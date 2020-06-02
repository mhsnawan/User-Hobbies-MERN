import React, { useState, Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: '',
      name: ''
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = async (e) => {
    const { name } = this.state;
    e.preventDefault();
    const newUser = {
      name: name
    } 
    try {
      const config = {
        headers : {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newUser);
      const res = await axios.post('api/v1/users', body, config);
      this.props.userHobbies(this.props.userId);
      this.setState({
        passion: '',
        name: '',
        year: ''
      })
      this.props.getUsersCallback();
    } catch(err) {
      return err;
    }
  }

  userHobbies = (userId) => {
    this.setState({
      selectedUser: userId
    });
    this.props.userHobbies(userId);
  }

  render() {
    const users = this.props.users;
    if(users) {
      var items = users.map((item, key) =>
      <div className="chat_list active_chat" key={key} onClick={ () => this.userHobbies(""+item._id) }>
          <div className="chat_people">
              <div className="chat_ib">
                  <h5>{item.name}</h5>
              </div>
          </div>
      </div>
      );
    }
    
    return (
      <div className="inbox_people">
          <div className="inbox_chat">
              <div className="chat_list active_chat">
                  <div className="chat_people">
                      <form onSubmit={e => this.handleSubmit(e)}>
                          <div className="row">
                              <div className="col-md-9">
                                  <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} className="form-control" placeholder="Enter User" required />
                              </div>
                              <div className="col-md-3">
                                  <button className="btn btn-success">Add</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>  
              {items}
          </div>
      </div> 
    );
  }
   
}

export default UserList;

