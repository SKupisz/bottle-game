import React from "react";
import Main from "./main.jsx";

import "../css/main.scss";
import "../css/bottle.scss";

export default class Launcher extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            phase: 0
        };

        this.runTheGame = this.runTheGame.bind(this);

    }
    runTheGame(whichOption){
        this.setState({
            phase: whichOption
        }, () => {});
    }
    render(){
        return(
            <div className="application-container">
                {this.state.phase === 2 ? <Main/> : 
                this.state.phase === 1 ? "" :
                <div className="navigation-div">
                    <header className="main-header block-center">Select the mode</header>
                    <div className="btns-container block-center ">
                    <button className="choosing-button" onClick = {() => {this.runTheGame(1)}}>Users settings</button>
                    <button className="choosing-button" onClick = {() => {this.runTheGame(2)}}>Play</button>
                    </div>
                </div>
                }
            </div>
        );
    }
}