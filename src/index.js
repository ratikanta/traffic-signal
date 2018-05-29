import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component {

  constructor(props){

    super(props);
    this.state={
      red: true,
      yellow: false,
      green: false,
      next: "yellow"
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
changeHandle = () => {
      console.log("called", this.trafficColor);
      switch (this.state.next) {
        case "red":
          this.setState({
            red:true,
            yellow: false,
            green: false,
            next: "yellow"
          });
          break;
        case "yellow":
          this.setState({
            red:false,
            yellow: true,
            green: false,
            next: "green"
          });
          break;
        case "green":
          this.setState({
            red:false,
            yellow: false,
            green: true,
            next: "red"
          });
          break;
      }
}
setSignal(event) {
    console.log(event.target.value);
    if(event.target.value === "Automatic"){
      this.interval = window.setInterval(() => {
          console.log("timer");
          this.changeHandle();
      }, 3000);
    }
    else{
      clearInterval(this.interval);
    }
  }
  handleClick1(){
    this.setState({
      red:true,
      yellow: false,
      green: false,
      next: "yellow"
    });
  }
  handleClick2(){
    this.setState({
      red:false,
      yellow: true,
      green: false,
      next: "yellow"
    });
  }
  handleClick3(){
    this.setState({
      red:false,
      yellow: false,
      green: true,
      next: "yellow"
    });
  }
  render(){
    return(
      <div>
        <div onChange={this.setSignal.bind(this)}><input type="radio" name="signaltype" value="Manual" defaultChecked/>Manual<input type="radio" name="signaltype" value="Automatic"/>Automatic</div>
        <div className="container" style={{backgroundColor: this.state.red ? "red" : "black"}} onClick={this.handleClick1}></div>
        <div className="container" style={{backgroundColor: this.state.yellow ? "yellow" : "black"}} onClick={this.handleClick2}></div>
        <div className="container" style={{backgroundColor: this.state.green ? "green" : "black"}} onClick={this.handleClick3}></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
