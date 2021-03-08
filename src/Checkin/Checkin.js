import  React, {Component} from 'react';
import Context from '../Context';
import Error from '../Error/Error';
import SelectPatron from '../SelectPatron/SelectPatron';
import SelectCheckedOut from '../SelectCheckedOut/SelectCheckedOut';
import './Checkin.css';

class Checkin extends Component {
  static contextType = Context;

  render() {
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