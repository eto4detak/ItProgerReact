import React from "react";
import Button from "./Button";

class Header extends React.Component{
    render(){
        return (
            <h1 className="header">
                {this.props.title}
            </h1>
        )


    }
}

export default Header