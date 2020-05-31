import React from 'react';

const UserDetail = () => {
    return (
      <div className="mesgs">
        <div className="msg_history">
        <table className="table border">
          <tbody>
            <tr>
              <th scope="row">
                <select className="selectpicker form-control">
                  <option disabled selected value="">Select Passion</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
              </select>
              </th>
              <td><input type="text" className="form-control" placeholder="Enter User Hobby"/></td>
              <td><input type="text" className="form-control" placeholder="Enter Year"/></td>
              <td><button className="btn btn-success">Add</button></td>
            </tr>
            <tr>
              <th scope="row">Low</th>
              <td>Cricket</td>
              <td>1992</td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">Low</th>
              <td>Cricket</td>
              <td>1992</td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
            
        </div>
      </div>
    );
}

export default UserDetail;
