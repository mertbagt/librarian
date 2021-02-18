import  React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
//  static contextType = Context;
    
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
            <Link to={`/patron`}>patrons</Link>
          </div>
          <div className={"navitem"}>
            <Link to={`/book`}>books</Link>
          </div>
          <div className={"navitem"}>
            <Link to={`/checkin`}>checkin</Link>
          </div>
          <div className={"navitem"}>
            <Link to={`/checkout`}>checkout</Link>
          </div>
        </div>
      </>
    );
  }  
}

export default Nav;