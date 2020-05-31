import React from 'react';

const UserList = () => {
    return (
        <div className="inbox_people">
            <div className="inbox_chat">
                <div className="chat_list active_chat">
                    <div className="chat_people">
                        <div className="row">
                            <div className="col-md-9">
                                <input type="text" className="form-control" placeholder="Enter User"/>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="chat_list active_chat">
                    <div className="chat_people">
                        <div className="chat_ib">
                            <h5>Sunil Rajput</h5>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
       
    );
}

export default UserList;

