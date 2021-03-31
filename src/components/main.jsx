import React from "react";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        if(this.props.howmanygamers === undefined || this.props.howmanygamers === null){
            this.state = {
                bottleStyle: {},
                ifRotated: false,
                currentRotation: 0,
                gamers: null
            };
        }
        else{
            this.state = {
                bottleStyle: {},
                ifRotated: false,
                currentRotation: 0,
                gamers: this.props.howmanygamers
            };
        }

        this.bottleRef = React.createRef();

        this.changeTheKeyframes = this.changeTheKeyframes.bind(this);
    }
    changeTheKeyframes(){
        if(this.state.ifRotated === false){
            let currentAngle = Math.floor(Math.random()*2520 + 40);
            if(currentAngle < 0) currentAngle*=(-1);
            currentAngle+=90;
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
        let listOfElems = [];
        if(this.state.gamers !== null){
            if(this.state.gamers >= 8){
                for(let i = 0 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem elem-"+i} style = {{
                        transform: "rotate("+(i+1)*(360/this.state.gamers)+"deg)"
                    }}></div>);
                }
            }
            else if(this.state.gamers >= 6){
                for(let i = 1 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem-2 elem-2-"+i} style = {{
                        transform: "rotate("+i*(360/this.state.gamers)+"deg)"
                    }}></div>);
                }
            }
            else if(this.state.gamers === 5){
                for(let i = 1 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem-3 elem-2-"+i} style = {{
                        transform: "rotate("+i*(360/this.state.gamers)+"deg)"
                    }}></div>);
                }
            }
            else if(this.state.gamers === 4){
                for(let i = 1 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem-4 elem-3-"+i} style = {{
                        transform: "rotate("+i*(360/this.state.gamers)+"deg)"
                    }}></div>);
                }
            }
            else if(this.state.gamers === 3){
                for(let i = 1 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem-3 elem-2-"+i} style = {{
                        transform: "rotate("+i*(360/this.state.gamers)+"deg) skewY(60deg)"
                    }}></div>);
                }
            }
            else if(this.state.gamers === 2){
                for(let i = 1 ; i <= this.state.gamers; i++){
                    listOfElems.push(<div className={"circle-elem-6 elem-3-"+i}></div>);
                }
            }
        }
        return(
            <div className="main-content">
                <div className="circle-wrapper block-center">
                    {this.state.gamers === null ? "":
                    <div className="circle-div">
                        {listOfElems}
                    </div>}
                    <div className="bottle block-center" style = {this.state.bottleStyle} ref = {this.bottleRef} onClick = {() => {this.changeTheKeyframes()}}>
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