import  React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context';
import './Nav.css';

class Nav extends Component {
  static contextType = Context;

  handleReset = e => {
    const results = [];
    const newError = [];

    this.context.updateResults(results);
    this.context.updateError(newError);
  }  

  render() {
    return (
      <>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        <h1>Librarian</h1>
        <div className={"navbar"}>
          <div className={"navitem"}>
            <Link to={`/`}>about</Link>
          </div>
          <div className={"navitem"}>
            <Link 
              to={`/patron`}
              onClick={this.handleReset}
            >patrons</Link>
          </div>
          <div className={"navitem"}>
            <Link 
              to={`/book`}
              onClick={this.handleReset}
            >books</Link>
          </div>
          <div className={"navitem"}>
            <Link 
              to={`/checkin`}
              onClick={this.handleReset}
            >checkin</Link>
          </div>
          <div className={"navitem"}>
            <Link 
              to={`/checkout`}
              onClick={this.handleReset}
            >checkout</Link>
          </div>
        </div>
      </>
    );
  }  
}

export default Nav;