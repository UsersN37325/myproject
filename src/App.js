import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0,
    }
    extendBtnSec = () => {
        this.setState({
            second: this.state.second + 1,
        })
    }
    extendBtnMin = () => {
        this.setState({
            minute: this.state.minute + 1,
        })
    }
    extendBtnHour = () => {
        this.setState({
            hour: this.state.hour + 1,
        })
    }
    decreaseBtnSec = () => {
        if(second => 0){
            this.setState({
                second: this.state.second >= 1 ? this.state.second - 1 : 0
            })
        }
        else{
            this.setState({
                second:0
            })
        }
    }
    decreaseBtnMIn = () => {
        this.setState({
            minute: this.state.minute >= 1 ? this.state.minute - 1 : 0
        })
    }
    decreaseBtnHour = () => {
        this.setState({
            hour: this.state.hour >= 1 ? this.state.hour - 1 : 0
        })
    }
    startTime = () =>{
    let time = setInterval (()=>{
        const {second , minute , hour} = this.state
        if(hour === 0){
            if(minute === 0){
                if(second ===0){
                    this.setState({
                        second: 0,
                        minute: 0,
                        hour: 0
                    })
                }else{
                    this.setState({
                        second: second - 1,
                        minute: 0,
                        hour: 0,
                    })
                }
            }else{
                this.setState({
                    second:59 ,
                    minute: minute - 1,
                    hour: 0,
                })
            }
        }
        else{
                this.setState({
                    hour: (hour - 1) ,
                    minute: 59,
                    second: 59
                })

        }

    } , 1000)

    }

    render() {
        return (
            <div className={'container my-5'}>
                <div className={'col-md-12'}>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h1>Timer</h1>
                                </div>
                                <div className="card-body  d-flex  align-items-center justify-content-center gap-5">
                                    <div>
                                        <button onClick={this.extendBtnHour} className={'btn btn-success'}>+</button>
                                        <h1>{this.state.hour}</h1>
                                        <button onClick={this.decreaseBtnHour} className={'btn btn-danger'}>-</button>
                                    </div>
                                    <h1>:</h1>
                                    <div>
                                        <button onClick={this.extendBtnMin} className={'btn btn-success'}>+</button>
                                        <h1>{this.state.minute}</h1>
                                        <button onClick={this.decreaseBtnMIn} className={'btn btn-danger'}>-</button>
                                    </div>
                                    <h1>:</h1>
                                    <div>
                                        <button onClick={this.extendBtnSec} className={'btn btn-success'}>+</button>
                                        <h1>{this.state.second}</h1>
                                        <button onClick={this.decreaseBtnSec} className={'btn btn-danger'}>-</button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className={'btn btn-dark'} onClick={this.startTime}>Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div></div>
            </div>

        );

    }
}

export default App;