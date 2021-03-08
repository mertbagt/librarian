import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../Context';
import Error from '../Error/Error';
import AddPatron from '../AddPatron/AddPatron';
import SelectPatron from '../SelectPatron/SelectPatron';
import './Patron.css';

class Patron extends Component {
  static contextType = Context;

  render() {
    return (
      <>
        <Error />
        <h2>Patrons</h2>
        <AddPatron />
        <br />        
        <div className="searchPatron">
          <h3>Search / Delete Patrons</h3>
        </div>
        <SelectPatron path={this.props.location.pathname}/>
      </>
    );
  }  
}

export default withRouter(Patron);