import  React, {Component} from 'react';
import Context from '../Context'
import SelectPatron from '../SelectPatron/SelectPatron'
import './Checkout.css';

class Checkout extends Component {
  static contextType = Context;

  render() {
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
        <h2>Checkout</h2>
        <SelectPatron />
        <br />              
        <div className="searchBookOut">
          <p>Query for searching Books</p>
          <p>&nbsp;&nbsp;&nbsp;Possibly hide this section until user is selected?</p>
        </div>
        <div className="resultsBookOut">
          <p>Query Results</p>
          <p>&nbsp;&nbsp;&nbsp;Button for each entry to check books out to selected patron</p>
          <p>&nbsp;&nbsp;&nbsp;on backend, relate patronId, bookId, and dayCheckedOut on table</p>
        </div>
      </>
    );
  }  
}

export default Checkout;