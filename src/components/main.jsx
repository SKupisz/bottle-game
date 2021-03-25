import React from "react";
import "../css/main.scss";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            bottleStyle: {},
            ifRotated: false,
            currentRotation: 0
        };

        this.bottleRef = React.createRef();

        this.changeTheKeyframes = this.changeTheKeyframes.bind(this);
    }
    changeTheKeyframes(){
        if(this.state.ifRotated === false){
            let currentAngle = Math.floor(Math.random()*2520 + 90);
            if(currentAngle < 0) currentAngle*=(-1);
            console.log(currentAngle,this.state.currentRotation);
            currentAngle+=this.state.currentRotation;
            this.setState({
                bottleStyle: {
                    transform: "rotate("+currentAngle+"deg)"
                },
                currentRotation: currentAngle,
                ifRotated: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        ifRotated: false
                    }, () => {});
                },5000);
            });
        }
    }
    render(){
        return(
            <div className="main-content">
                <div className="circle-wrapper">
                    <div className="bottle" style = {this.state.bottleStyle} ref = {this.bottleRef} onClick = {() => {this.changeTheKeyframes()}}>
                        <div className="bottle-top-part">
                            <div className="thread"></div>
                            <div className="end-left"></div>
                            <div className="end-right"></div>
                            <div className="end-left"></div>
                            <div className="end-right"></div>
                            <div className="end-left"></div>
                            <div className="end-right"></div>
                            <div className="end-left"></div>
                            <div className="end-right"></div>
                            <div className="end-left"></div>
                            <div className="end-right"></div>
                        </div>
                        <div className="connector"></div>
                        <div className="bottle-main-part">
                            <div className="label">
                                Click the bottle
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}