
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Counter from './counter/Counter';

import './styles.css'

class App extends Component {
  constructor(props) {
    console.log('App constructor.');
    super(props);
    this.state={
      showCounter:true
    }
  }

  _hide(){
    this.setState({
      showCounter: !this.state.showCounter
    });
  }

  UNSAFE_componentWillMount(){
    console.log('App componentWillMount.');
  }

  componentDidMount(){
    console.log('App componentDidMount.');
  }

  componentWillUnmount(){
    console.log('App componentWillUnmount.');
  }

  componentDidUpdate(){
    console.log('App componentDidUpdate.');
  }
  render(){
    console.log('App render');
    return (
      <div className="App">
        <Button color="danger" onClick={()=>this._hide()}>
        {this.state.showCounter && 'Hide Counter'}
        {!this.state.showCounter && 'Show Counter'}
        </Button>
        {this.state.showCounter && <Counter/>}
      </div>
    );
  }
}

export default App;