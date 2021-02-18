import  React, {Component} from 'react';
import './Patron.css';

class Patron extends Component {

  render() {  
    return (
      <>
        <h2>Patron</h2>
        <div className="editPatron">
          <p>Form for adding/editing library patrons</p>
        </div>
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