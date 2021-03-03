import  React, {Component} from 'react';
import Context from '../Context';
import SelectPatron from '../SelectPatron/SelectPatron';
import SelectCheckedOut from '../SelectCheckedOut/SelectCheckedOut';
import './Checkin.css';

class Checkin extends Component {
  static contextType = Context;

  render() {
    const error = (this.context.error && (this.context.error != "No patrons found") && (this.context.error != "No books found"))
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
        <h2>Checkin</h2>
        <SelectPatron />
        <br />        
        <div className="resultsCheckin">
          <h3>Books currently checked out by this patron</h3>
        </div>
        <SelectCheckedOut />
      </>
    );
  }  
}

export default Checkin;