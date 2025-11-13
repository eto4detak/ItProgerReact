import React from "react";
import Header from "./components/Heaader";
import Image from "./components/Image";
import logo from "./img/logo.png"

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          helpText : "Help Text!",
          userData : ""  
        }

        //для отслеживания измениния состояния вне рендер
        this.inputClick = this.inputClick.bind(this);
    }

    inputClick()  {
        this.setState({helpText: "Changed"});
        console.log("input click")
    } 
    inputEnter()  {console.log("input Enter")} 

    componentDidUpdate(prevProp){
        if(this.state.helpText !== "Help"){
            console.log("Some");
        }
    }

    render(){
        return (
            <div className="App">
                <Header title="Шапка Сайта" />
                <header className="App-header">
                    
                    <h1>{this.state.helpText}</h1>
                    <h2>{this.state.userData}</h2>
                    <input placeholder={this.state.helpText}
                        onChange={event => this.setState({userData : event.target.value})}
                     onClick={this.inputClick} onMouseEnter={this.inputEnter} /> <br />
                    <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>
                    <Image image={logo} />
                    <img alt="" src={logo} />
                </header>
            </div>
        );
    }

    

}

export default App;
