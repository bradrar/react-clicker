import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import { connect } from 'react-redux';
import { updateCount } from './Redux/Actions/counter-action';

class App extends React.Component {
  constructor(props){
    super(props); 

    this.state = {
      counter: 0,
    }
    
   this.handlePlus = this.handlePlus.bind(this);
   this.handleReset = this.handleReset.bind(this);
   this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus(){
      this.props.handlePlus(this.props.counter + 1)
    }
    
    handleReset(){
      this.props.handleReset(this.props.counter * 0)
    }

    handleMinus(){
      this.props.handleMinus(this.props.counter - 1)
    }


  
  render() {
    return (
      <div>
        <Header />
      <div className="mt-5" >
        <div className="border border-secondary rounded container">
        <p className="counter text-center">{this.props.counter}</p>
      
        <div className="d-flex flex-row">
          <button className="plus btn btn-success  w-100" onClick={this.handlePlus} > <i className="fas fa-plus fa-2x"></i> </button>
          <button className="reset btn btn-warning w-100" onClick={this.handleReset}><i className="fas fa-sync-alt fa-2x"></i> </button>
          <button className="minus btn btn-danger w-100" onClick={this.handleMinus}> <i className="fa fa-minus fa-2x"></i>  </button>
        </div>
        </div>  
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    counter : state.counter
  }
}

const mapDispatchToProps = {
  handlePlus: updateCount,
  handleReset: updateCount,
  handleMinus: updateCount
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
