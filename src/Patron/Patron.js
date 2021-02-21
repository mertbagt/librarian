import  React, {Component} from 'react';
import AddPatron from '../AddPatron/AddPatron';
import './Patron.css';

class Patron extends Component {

  render() {  
    return (
      <>
        <h2>Patrons</h2>
          <AddPatron></AddPatron>
        <br />        
        <div className="searchPatron">
          <p>Query for searching Patrons</p>
        </div>
        <div className="resultsPatron">
          <p>Query Results</p>
        </div>
      </>
    );
  }  
}

export default Patron;