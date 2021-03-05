import  React, {Component} from 'react';
import Context from '../Context';
import Error from '../Error/Error';
import SelectPatron from '../SelectPatron/SelectPatron';
import SelectCheckedOut from '../SelectCheckedOut/SelectCheckedOut';
import './Checkin.css';

class Checkin extends Component {
  static contextType = Context;

  render() {
//    const error = (this.context.error && (this.context.error != "No patrons found") && (this.context.error != "No books found"))
//          ? <div className="errorTop">{this.context.error}</div>
//          : "";

    const selectCheckOut =  (this.context.currentPatron.length !== 0)
          ? <SelectCheckedOut />
          : "";

    return (
      <>
        <Error />
        <h2>Checkin</h2>
        <SelectPatron />
        <br />        
        {selectCheckOut}
      </>
    );
  }  
}

export default Checkin;