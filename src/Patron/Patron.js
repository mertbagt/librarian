import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../Context'
import AddPatron from '../AddPatron/AddPatron';
import SelectPatron from '../SelectPatron/SelectPatron'
import './Patron.css';

class Patron extends Component {
  static contextType = Context;

  render() {
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
        <h2>Patrons</h2>
        <AddPatron />
        <br />        
        <div className="searchPatron">
          <p>Search / Delete Patrons</p>
        </div>
        <SelectPatron path={this.props.location.pathname}/>
      </>
    );
  }  
}

export default withRouter(Patron);