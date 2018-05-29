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
    this.setSignal('Automatic');
    this.handleClick = this.handleClick.bind(this);
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
setSignal(value) {
    if(value === "Automatic"){
      this.interval = window.setInterval(() => {
          console.log("timer");
          this.changeHandle();
      }, 3000);
    }
    else{
      clearInterval(this.interval);
    }
  }
  handleClick(event){
    console.log(event);
    switch (event) {
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

  render(){
    return(
      <div>
        <div><input type="radio" name="signaltype" value="Automatic" onChange={(event) => this.setSignal(event.target.value)} defaultChecked/>Automatic<input type="radio" name="signaltype" value="Manual" onChange={(event) => this.setSignal(event.target.value)}/>Manual</div>
        <div className="container" style={{backgroundColor: this.state.red ? "red" : "black"}} onClick={this.handleClick.bind(this, 'red')}></div>
        <div className="container" style={{backgroundColor: this.state.yellow ? "yellow" : "black"}} onClick={this.handleClick.bind(this, 'yellow')}></div>
        <div className="container" style={{backgroundColor: this.state.green ? "green" : "black"}} onClick={this.handleClick.bind(this, 'green')}></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
