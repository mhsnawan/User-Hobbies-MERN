import React, { useState, Component } from 'react';
import axios from 'axios';

class UserDetail extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      passion: '',
      name: '',
      year: '',
      userId: props.userId
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    if(e.target.name == 'name') {
      console.log('name');
      this.setState({
        name: e.target.value
      }) 
    } else if(e.target.name == 'passion') {
      this.setState({
        passion: e.target.value
      }) 
    } else if(e.target.name == 'year') {
      this.setState({
        year: e.target.value
      }) 
    }
  }

  handleSubmit = async (e) => {
    const { userId, passion, name, year } = this.state;
    e.preventDefault();
    const newHobby = {
      userId: userId,
      passion: passion,
      name: name,
      year: year
    } 
    try {
      const config = {
        headers : {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newHobby);
      const res = await axios.post('api/v1/hobby', body, config);
      this.props.userHobbies(this.props.userId);
      this.setState({
        passion: '',
        name: '',
        year: ''
      })
    } catch(err) {
      return err;
    }
  }

  onDeleteHobby = async(id) => {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.delete(`api/v1/hobby/${id}`);
    this.props.userHobbies(this.props.userId);
  }

  render() {
    const { userDetail } = this.props;
    if(userDetail) {
    var items = userDetail.map((item, key) =>
    <tr key={key} className="row">
      <td className="col-md-3">{item.passion}</td>
      <td className="col-md-3">{item.name}</td>
      <td className="col-md-3">Since {item.year}</td>
      <td className="col-md-3"><button className="btn btn-danger" onClick={() => this.onDeleteHobby(""+item._id)}>Delete</button></td>
    </tr>
    );
    }
    return (
      <div className="mesgs">
        <div className="msg_history">
            <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-3">
              <select className="selectpicker form-control" value={this.state.passion} onChange={this.handleChange} id="passion" name="passion" required>
                <option disabled>Select Passion</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} id="name" name="name" placeholder="Enter User Hobby" required/>
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" value={this.state.year} onChange={this.handleChange} name="year" placeholder="Enter Year" required/>
            </div>
            <div className="col-md-3">
              <button className="btn btn-success">Add</button>
            </div>
          </div>
          </form>
        <table className="table border">
          <tbody>
            {items}
          </tbody>
        </table>
            
        </div>
      </div>
    );
   }   
}

export default UserDetail;
