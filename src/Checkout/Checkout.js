import  React, {Component} from 'react';
import './Checkout.css';

class Checkout extends Component {

  render() {  
    return (
      <>
        <h2>Checkout</h2>
        <div className="selectPatronOut">
          <p>Form to select/search patron ready to check books out</p>
        </div>
        <div className="resultsPatronOut">
          <p>&nbsp;&nbsp;&nbsp;Display selected user if no error; otherwise error if not found, etc</p>  
        </div>
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