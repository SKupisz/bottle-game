import React from "react";
import Main from "./main.jsx";

import "../css/connector.scss";

export default class Launcher extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            phase: 0,
            gamers: null
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
                {this.state.phase === 2 ? <span>
                    <button className="close-btn block-center" onClick = {() => {this.runTheGame(0)}}>Main menu</button>
                    <Main howmanygamers = {this.state.gamers}/>
                    </span> : 
                this.state.phase === 1 ? <div className="picking-up block-center">
                    <header className="choosing-header block-center">Choose the number of players</header>
                    <button className="close-btn block-center" onClick = {() => {this.runTheGame(0)}}>Main menu</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 2}, () => {this.runTheGame(2);})}}>2</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 3}, () => {this.runTheGame(2);})}}>3</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 4}, () => {this.runTheGame(2);})}}>4</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 5}, () => {this.runTheGame(2);})}}>5</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 6}, () => {this.runTheGame(2);})}}>6</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 7}, () => {this.runTheGame(2);})}}>7</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 8}, () => {this.runTheGame(2);})}}>8</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 9}, () => {this.runTheGame(2);})}}>9</button>
                    <button className="pick-the-game" onClick = {() => {this.setState({ gamers: 10}, () => {this.runTheGame(2);})}}>10</button>
                </div> :
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