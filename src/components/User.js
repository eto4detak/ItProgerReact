import React from "react";
import AddUser from "./AddUser";
import { AiFillCloseCircle, AiFillEdit  } from "react-icons/ai";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editForm: false
        }
    }
    user = this.props.user;
    render(){
        return (
            <div className="user" >
                <AiFillCloseCircle onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"  />
                <AiFillEdit onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }}  className="edit-icon" />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не Особо :('}</b>

                {this.state.editForm && <AddUser onAdd={this.props.onEdit} />}
            </div>

        )


    }
}

export default User