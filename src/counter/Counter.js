import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component {

  constructor(props) {
    console.log('Counter Constructor.');
    super(props);
    this.state = {
      count:0
    }
    this._deCrease=this._deCrease.bind(this);
  }

  _inCrease=()=>{
    this.setState({
      count:this.state.count + 1
    });
  }

  _deCrease(){
    this.setState({
      count:this.state.count - 1
    });
  }

  UNSAFE_componentWillMount(){
    console.log('Counter componentWillMount.');
  }

  componentDidMount(){
    console.log('Counter componentDidMount.');
  }

  componentWillUnmount(){
    console.log('Counter componentWillUnmount.');
  }

  componentWillUpdate(){
    console.log('Counter componentWillUpdate.');
  }

  componentDidUpdate(){
    console.log('Counter componentDidUpdate.');
  }

  render() {
    console.log('Counter Render.');
    return(
      <div className="counter">
        <Button color="primary" onClick={this._inCrease}>+</Button>
        <h2>{this.state.count}</h2>
        <Button color="primary" onClick={this._deCrease}>-</Button>
      </div>
    )
  }

}

export default Counter;