import React from "react";
import Header from "./components/Heaader";
import Image from "./components/Image";
import logo from "./img/logo.png"

class App extends React.Component {
    helpText = "Help Text!";

    inputClick()  {console.log("input click")} 
    inputEnter()  {console.log("input Enter")} 

    render(){
        return (
            <div className="App">
                <Header title="Шапка Сайта" />
                <header className="App-header">
                    
                    <h1>{this.helpText}</h1>
                    <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.inputEnter} /> <br />
                    <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
                    <Image image={logo} />
                    <img alt="" src={logo} />
                </header>
            </div>
        );
    }

    

}

export default App;
