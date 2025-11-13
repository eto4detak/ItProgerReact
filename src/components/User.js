import React from "react";
import { AiFillCloseCircle, AiFillEdit  } from "react-icons/ai";

class User extends React.Component{
    user = this.props.user;
    render(){
        return (
            <div className="user" >
                <AiFillCloseCircle className="delete-icon" />
                <AiFillEdit  className="edit-icon" />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не Особо :('}</b>
            </div>
        )


    }
}

export default User